const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const util = require("util");
const path = require("path");
require("dotenv").config();

/* database */
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused");
    }

    if (connection) connection.release();

    return;
  }
});

pool.query = util.promisify(pool.query);

/* app */
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

/* api routes */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/download-count", (req, res) => {
  console.log("/download-count");
  pool.query(
    "SELECT COUNT(*) as downloadCount FROM downloads",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(result[0]);
      }
    }
  );
});

app.get("/download", (req, res) => {
  console.log("/download");
  console.log("hostname: " + req.headers["host"]);
  console.log("user-agent: " + req.headers["user-agent"]);

  pool.query(
    "INSERT INTO downloads (hostname, useragent, createdat) VALUES (?, ?, ?)",
    [req.headers["host"], req.headers["user-agent"], Date.now()],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Request succeffully registered");
      }
    }
  );

  res.download("./public/data/document.pdf");
});

/* service */
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
