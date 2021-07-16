import React from "react";

import "./styles/Projects.css";
import Carousel from "../components/Carousel";

function Projects() {
  return (
    <div className="Projects">
      <section>
        <div className="project">
          <div className="project_description">
            <h2>Platzi-tiendita</h2>
            <h5>
              e-commerce<i></i> || <span>Javascript/React</span>
            </h5>
          </div>
          <hr />

          <div className="project-carousel">
            <Carousel />
          </div>
        </div>
        <p>Seccion en desarrollo</p>
      </section>
    </div>
  );
}

export default Projects;
