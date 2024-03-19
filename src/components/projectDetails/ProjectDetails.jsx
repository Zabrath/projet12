import React from "react";
import "./ProjectDetails.scss";

const ProjectDetails = ({ project }) => {
  return (
    <div className="project-details">
      <h1>{project.projetName}</h1>
      <p>{project.description}</p>
      <p>{project.production}</p>
    </div>
  );
};

export default ProjectDetails;
