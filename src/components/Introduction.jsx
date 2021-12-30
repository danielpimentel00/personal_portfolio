import React from "react";
import "../css/all.css";

export default function Introduction() {
  return (
    <div className="introduction">
      <h1 className="greeting">Welcome</h1>
      <h2 className="title">I'm Daniel Pimentel</h2>
      <h3 className="subtitle">a web developer</h3>
      <a href="#projects-container">
        <button className="projects-btn">
          My Projects<i class="fas fa-arrow-down arrow"></i>
        </button>
      </a>
    </div>
  );
}
