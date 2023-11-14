import React from "react";
import ReadMore from "../readMore/ReadMore";

const ProjectList = ({ imageUrl, title, desc, link }) => {
  return (
    <div className="card">
      <div className="img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="words">
        <h2>{title}</h2>
        <div className="desc">
          <ReadMore text={desc} maxLength={40} />
        </div>
        <a href={link}>
          <button className="project">View Project</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectList;
