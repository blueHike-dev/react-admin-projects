import React from "react";
import ReadMore from "../readMore/ReadMore";

const ProjectList = ({ imageUrl, title, desc, link }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="" />
      <h2>{title}</h2>
      <div className="desc">
        <ReadMore text={desc} maxLength={40} />
      </div>
      <a href={link}>
        <button className="project">View Project</button>
      </a>
    </div>
  );
};

export default ProjectList;
