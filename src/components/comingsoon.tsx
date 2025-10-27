import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/OngoingProject.scss';

function OngoingProject() {
  return (
    <div className="ongoing-container">
      <div className="ongoing-content">
        <h1>🚧 Project In Progress</h1>
        <p>This project is currently under development. Check back soon for updates!</p>
        <Link to="/" className="back-button">← Back to Portfolio</Link>
      </div>
    </div>
  );
}

export default OngoingProject;
