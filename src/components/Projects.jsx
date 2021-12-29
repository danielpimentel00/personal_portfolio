import React, { useState } from "react";
import Project from "./Project";
import stocks_tracker from "../images/stocks_tracker.png";
import juego_de_azar from "../images/juego_de_azar.png";
import product_landing_page from "../images/product_landing_page.png";
import documentation_page from "../images/documentation_page.png";
import survey_form from "../images/survey_form.png";

export default function Projects() {
  const [projects] = useState([
    {
      title: "Stocks Tracker",
      image: stocks_tracker,
      path: "/webPages/Stocks_Tracker/index.html",
    },
    {
      title: "Juego de Azar",
      image: juego_de_azar,
      path: "/webPages/Juego_de_azar/index.html",
    },
    {
      title: "Product Landing Page",
      image: product_landing_page,
      path: "/webPages/product_landing_page/index.html",
    },
    {
      title: "Documentation Page",
      image: documentation_page,
      path: "/webPages/Technical_Documentation_Page/index.html",
    },
    {
      title: "Survey Form",
      image: survey_form,
      path: "/webPages/survey_form/index.html",
    },
  ]);

  return (
    <div className="projects-container" id="projects-container">
      {projects.map((p, index) => (
        <Project key={index} title={p.title} image={p.image} path={p.path} />
      ))}
    </div>
  );
}
