import React, { useState } from "react";
import "./Capa.css";

import Downloader from "./assets/Downloader";

const Capa = () => {
  const [downloadFile, DownloaderUI] = Downloader();
  const [disable, setDisable] = useState(false);
  const download = (file) => {
    downloadFile(file);
    setDisable(true);
  };

  const file = {
    url: "https://entrexangoeajuremasagrada.herokuapp.com/download",
    filename: "ENTRE_XANGO_E_A_JUREMA_SAGRADA.pdf",
  };

  return (
    <div className="capa" id="capa">
      <div className="content">
        <p>
          ENTRE XANGÔ E A<br />
          JUREMA SAGRADA
        </p>
        <p>
          tradição, cultura e saberes ancestrais
          <br />
          no Ilê Àse Obá Aganju
        </p>

        <button
          href="/"
          disabled={disable}
          className="button"
          onClick={() => download(file)}
        >
          Baixe agora
        </button>
        <div className="downloader-ui-container">
          <div className="downloader-ui">{DownloaderUI}</div>
        </div>
      </div>
    </div>
  );
};

export default Capa;
