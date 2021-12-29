import React, { useState } from "react";

export default function Project({ title, image, path }) {
  const [hovered, setHovered] = useState(false);

  const headerStyle = {
    backgroundColor: "#fff",
    color: "#003",
  };

  const imageStyle = {
    transform: "scale(1.1)",
    opacity: 0.5,
  };

  const messageStyle = {
    opacity: 1,
  };

  return (
    <a target="_blank" href={process.env.PUBLIC_URL + path}>
      <div
        className="project"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="project-header" style={hovered ? headerStyle : null}>
          <h4 className="project-title">{title}</h4>
        </div>
        <img
          className="project-img"
          style={hovered ? imageStyle : null}
          src={image}
          alt="stocks tracker page"
        />
        <span className="webpage-message" style={hovered ? messageStyle : null}>
          Visit Webpage
        </span>
      </div>
    </a>
  );
}
