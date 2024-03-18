import React from "react";
import "./ProjectDetails.scss";

const ProjectDetails = ({ project }) => {
  return (
    <div className="project-details">
      <h2>{project.projetName}</h2>
      <p>{project.description}</p>
      <p>{project.production}</p>
    </div>
  );
};

export default ProjectDetails;
