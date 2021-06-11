import React, { useState } from "react";
import "./styles/Cursos.css";
import GenericCard from "../components/GenericCard";
import FrontendSC from "../assets/diplomas/frontendDev.jpg";
import reactFun from "../assets/diplomas/reactF.jpg";
import reactP from "../assets/diplomas/reactP.jpg";
import reactRedux from "../assets/diplomas/reactRedux.jpg";
import fundaJS from "../assets/diplomas/fundamentosJs.jpg";
import jsprofesional from "../assets/diplomas/jsprofesional.jpg";
import htmlCSS from "../assets/diplomas/htmlyCSS.jpg";
import dom from "../assets/diplomas/dom.jpg";
import grid from "../assets/diplomas/grid.jpg";

function Cursos() {
  const initialCourses = [
    {
      id: 1,
      title: "Frontend Developer",
      description:
        "Adquirí conocimentos de HTML y arquitectura CSS, maquetando componentes basados en un diseño responsivo. Aplicando la metodología BEM.",
      imagen: FrontendSC,
    },
    {
      id: 2,
      title: "React.js",
      description:
        "React es un framework de Javascript para construir interfaces de usuario basadas en componentes reactivos y reutilizables.",
      imagen: reactFun,
    },
    {
      id: 3,
      title: "Práctico de React.js",
      description:
        "Curso practico de react donde aprendo a dominar las cualidades del framework y desarrollo una pequeña app con llamadas a una API.",
      imagen: reactP,
    },
    {
      id: 4,
      title: "React Router y Redux",
      description:
        "Curso de introducción a React Router para el manejo de rutas y a los principios básicos de Redux.",
      imagen: reactRedux,
    },
    {
      id: 5,
      title: "Fundamentos de Javascript",
      description:
        "Curso de javascript donde aprendí la sitáxis básica, programación orientada a objetos y asincronismo del lenguaje.",
      imagen: fundaJS,
    },
    {
      id: 6,
      title: "Javascript Profesional",
      description:
        "Fundamentos intermedios y avanzados del lenguaje, buenas prácticas para el desarrollo profesional y acercamiento a TypeScript.",
      imagen: jsprofesional,
    },
    {
      id: 7,
      title: "Curso definitivo de HTML Y CSS",
      description:
        "Maquetación y estilización de sitios web profesional, fundamentos,práctica y diseño responsive",
      imagen: htmlCSS,
    },
    {
      id: 8,
      title: "Manipulación del DOM",
      description:
        "Con las nuevas características de Vanilla Javascript podemos manejar eventos y elementos de nuestro sitio web sin usar 'JQuery'.",
      imagen: dom,
    },
    {
      id: 9,
      title: "CSS GRID LAYOUT",
      description:
        "Un sistema de grillas para crear layouts, es indispensable para el desarrollo de sitios web.",
      imagen: grid,
    },
  ];

  const [courses, setstate] = useState(initialCourses);

  return (
    <div className="Cursos">
      <section>
        <h1>Cursos de Desarrollo Web</h1>
        <div className="courseContainer">
          {courses.map((course) => {
            return (
              <GenericCard
                key={course.id}
                title={course.title}
                description={course.description}
                img={course.imagen}
              />
            );
          })}
        </div>
        <div className="coursesFooter">
          <p>
            <i>"Porque el aprendizaje no es un deporte de espectadores".</i>
          </p>
          <h6>
            Aún hay{" "}
            <a target="_blank" href="https://platzi.com/p/javalvarenga/">
              más
            </a>
          </h6>

        </div>
      </section>
    </div>
  );
}

export default Cursos;
