import React from "react";
import "./ProjectDetails.scss";

const ProjectDetails = ({ project }) => {
  return (
    <div className="project-details">
      <h3>{project.projetName}</h3>
      <p>{project.description}</p>
      <p>{project.production}</p>
    </div>
  );
};

export default ProjectDetails;
