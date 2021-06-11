import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import twitterImg from "../assets/images/twit.png";
import igLogo from "../assets/images/iglogo.png";
import inLogo from "../assets/images/linkedin.png";
function Home() {
  return (
    <div className="Home">
      <main>
        <div className="container">
          <button id="cvBtn">DESCARGAR CV</button>
          <div className="hero">
            <div className="avatar"></div>
            <h1>Abraham Alvarenga</h1>
          </div>
          <div className="info">
            <p>
              <i>Desarrollador Web/Frontend Development</i>
            </p>
            <p>autodidacta, apasionado por la tecnología.</p>

            <div className="estudio">
              <div className="subContainer">
                <h6>Skills/Habilidades</h6>
                <ul>
                  <li>-HTML & CSS</li>
                  <li>-Javascript</li>
                  <li>-React</li>
                  <li>-Git</li>
                  <li>-SQL</li>
                  <li>-Bootstrap 4</li>
                  <li>-Linux</li>
                </ul>
              </div>
              <div className="subContainer">
                <h6 className="subtitle">ve mis proyectos</h6>
                <Link to="/projects">
                  <button id="btnPortafolio">Portafolio</button>
                </Link>
              </div>
              <div className="subContainer">
                <h6>Educación</h6>
                <ul>
                  <li>-Ingeniería en Sistemas.</li>
                  <li>-Cursos de desarrollo web en Platzi.</li>
                  <li>
                    -Diversificado: Períto en Ciencias de la Comunicación
                    Social.
                  </li>
                </ul>
              </div>
              <div className="subContainer">
                <h6 className="subtitle">
                  Mi proceso de aprendizaje en <b>Platzi</b>
                </h6>
                <Link to="/cursos">
                  <button id="btnCursos">mis Cursos</button>
                </Link>
              </div>
            </div>
            <div className="redes">
              <h6>Contáctame</h6>

              <div>
                <div id="instagram">
                  <img src={igLogo} alt="" />
                  <p>Instagram</p>
                </div>
                <div id="twitter">
                  <img src={twitterImg} alt="" />
                  <p>Twitter</p>
                </div>
                <div id="linkedin">
                  <img src={inLogo} alt="" />
                  <p>Linkedin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
