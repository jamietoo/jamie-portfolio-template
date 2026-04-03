import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/ProjectDetail.scss';
import govtechCover from '../assets/images/govtech-bob-cover.png';

function GovTechBob() {
  return (
    <div className="project-detail-container">
      <Link to="/" className="back-button">← Back to Portfolio</Link>
      
      <div className="project-detail-content">
        <div className="cover-image">
          <img src={govtechCover} alt="GovTech BoB Case Competition" />
        </div>
        
        <div className="project-info">
          <h1>GovTech BoB Case Competition</h1>
          <p className="date">Jan 2026 - Mar 2026</p>
          
          <div className="description">
            <h2>Project Overview</h2>
            <p>
              Designed and prototyped a Build on Build (BoB) workflow on ApplySG to improve the PEI Student's Pass registration-by-institution process in Singapore, while evaluating a new market expansion use case for BoB in the private education sector. Built a linear case flow with SOLAR+ prefill concept, structured student/sponsor document collection, AI validation checks, and risk-based admin review before ICA handoff.
            </p>
          </div>

          <div className="project-links">
            <h2>Project Materials</h2>
            <div className="links-grid">
              <a 
                href="/jamie-portfolio-template/documents/PEI_govtech_casecomp.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="project-link slides"
              >
                <span className="icon">📊</span>
                <span className="text">Presentation Slides</span>
              </a>
              
              <a 
                href="/jamie-portfolio-template/documents/govtech-bob-demo.mov" 
                target="_blank" 
                rel="noreferrer"
                className="project-link demo"
              >
                <span className="icon">🎥</span>
                <span className="text">Demo Video</span>
              </a>
            </div>
          </div>

          <div className="key-features">
            <h2>Key Features Delivered</h2>
            <ul>
              <li>Linear case flow design with SOLAR+ prefill concept</li>
              <li>Structured student and sponsor document collection system</li>
              <li>AI-powered validation checks for document compliance</li>
              <li>Risk-based administrative review workflow</li>
              <li>ICA handoff integration</li>
              <li>Market expansion use case evaluation for BoB in private education</li>
            </ul>
          </div>

          <div className="skills">
            <h2>Skills & Tools</h2>
            <p>Product Strategy, UX Prototyping, Workflow Design, ApplySG Configuration, API/Webhook Concepting, AI Validation Logic, Risk Scoring, Stakeholder Presentation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GovTechBob;
