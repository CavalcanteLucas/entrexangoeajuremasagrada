import React from "react";
import Navbar from "./components/Navbar";
import Capa from "./components/Capa";
import Sobre from "./components/Sobre";
import Autora from "./components/Autora";
import Foto from "./components/Foto";
import Footer from "./components/Footer";
import Patrocinio from "./components/Patrocinio";

function App() {
  return (
    <div>
      <Navbar />
      <Capa />
      <Foto
        imgPath="./images/02.jpg"
        gradientLevelStart={1}
        gradientLevelEnd={1}
      />
      <Sobre />
      <Foto
        imgPath="./images/04.jpg"
        gradientLevelStart={1}
        gradientLevelEnd={1}
      />
      <Autora />
      <Patrocinio />
      <Footer />
    </div>
  );
}

export default App;
