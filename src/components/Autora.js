import React from "react";
import gabi from "./images/gabi.png";
import "./Autora.css";

const Autora = () => {
  return (
    <div className="autora" id="autora">
      <div className="container">
        <img src={gabi} alt="gabi" />
        <div className="col-2">
          <h2>Sobre a autora</h2>
          <span className="line"></span>
          <p>
            Gabriela Azevêdo é arquiteta e urbanista, com mestrado em
            desenvolvimento urbano pela UFPE. Militante, professora
            universitária e pesquisadora sobre patrimônio cultural, participação
            social, estudos raciais e religião. Escritora e produtora cultural.
            Abiã do Ilê Àse Obá Aganju.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Autora;
