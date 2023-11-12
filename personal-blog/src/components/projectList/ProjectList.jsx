import React from "react";
import ReadMore from "../readMore/ReadMore";

const ProjectList = ({ imageUrl, title, desc }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="" />
      <h2>{title}</h2>
      <div className="desc">
        <ReadMore text={desc} maxLength={50} />
      </div>
      <button className="project">View Project</button>
    </div>
  );
};

export default ProjectList;
