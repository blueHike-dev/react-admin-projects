import ProjectList from "../../components/projectList/ProjectList";
import { projectData } from "../../data";
import "./projects.scss";
import React from "react";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <div className="project">
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
        <div className="border"></div>
      </div>
    </>
  );
};

export default Projects;
