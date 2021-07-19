import React from "react";

import "./styles/Projects.css";
import Carousel from "../components/CarouselFn";
import demo from "../assets/images/global.svg";
import github from "../assets/images/github.svg";

function Projects() {
  return (
    <div className="Projects">
      <section>
        <div className="project">
          <div className="project_description">
            <h2>Platzi-tiendita</h2>
            <h5>
              <i>e-commerce</i>
            </h5>
          </div>
          <hr />

          <div className="project-carousel">
            <div className="carousel">
              <Carousel />
            </div>
            <aside>
              <div className="icons">
              <a href="https://github.com/javalvarenga/platzi-tiendita" target="_blank" rel="">
              <div className="icon">
                  <img src={github} alt="github" />
                  <p>repositorio</p>
                </div>
              </a>
                <a href="https://platzi-tiendita.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                <div className="icon">
                  <img src={demo} alt="demo" />
                  <p>ver demo</p>
                </div>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
