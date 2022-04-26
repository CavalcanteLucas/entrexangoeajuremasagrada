import React from "react";
import "./Foto.css";

const Foto = (props) => {
  const background = require(`${props.imgPath}`).default;

  return (
    <div
      className="foto"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${props.gradientLevelStart}), rgba(0, 0, 0, 0), rgba(0, 0, 0, ${props.gradientLevelEnd})), url(${background})`,
      }}
    />
  );
};

export default Foto;
