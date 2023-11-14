import ProjectList from "../../components/projectList/ProjectList";
import { projectData } from "../../data";
import "./projects.scss";
import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      {projectData.map((project) => (
        <ProjectList
          key={project.id}
          imageUrl={project.imageUrl}
          title={project.title}
          desc={project.desc}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Projects;
