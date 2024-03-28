import { useState } from "react";
import { projects, ProjectsDataType } from "../Projects/Projects";
import ProjectItem from "./ProjectItem";
import './ProjectsGrid.css'

function ProjectsGrid() {
    return (
        <div className="projects-grid-container">
            <div className="projects-grid">
              {projects.map((project, i) => {
                return <ProjectItem key={i} projectData={project}/>
              })}
            </div>
        </div>
    );
  }
  
  export default ProjectsGrid;
  