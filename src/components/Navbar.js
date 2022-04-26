import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./images/logo.png";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" style={{ filter: "invert(1)" }} />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" onClick={closeMenu}>
              Livro
            </a>
          </li>
          <li className="nav-item">
            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>
          </li>
          <li className="nav-item">
            <a href="#autora" onClick={closeMenu}>
              Autora
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
