import React from "react";
import "./Patrocinio.css";

import patrocinio1 from "./images/patrocinio/01.png";
import patrocinio2 from "./images/patrocinio/02.png";
import patrocinio3 from "./images/patrocinio/03.png";
import patrocinio4 from "./images/patrocinio/04.png";
import patrocinio5 from "./images/patrocinio/05.png";
import patrocinio6 from "./images/patrocinio/06.png";
import patrocinio7 from "./images/patrocinio/07.png";
import patrocinio8 from "./images/patrocinio/08.png";

const Patrocinio = () => {
  return (
    <div className="patrocinio">
      <img src={patrocinio1} alt="patrocinio_01" />
      <img src={patrocinio2} alt="patrocinio_02" />
      <img src={patrocinio3} alt="patrocinio_03" />
      <img src={patrocinio4} alt="patrocinio_04" />
      <img src={patrocinio5} alt="patrocinio_05" />
      <img src={patrocinio6} alt="patrocinio_06" />
      <img src={patrocinio7} alt="patrocinio_07" />
      <img src={patrocinio8} alt="patrocinio_08" />
    </div>
  );
};

export default Patrocinio;
