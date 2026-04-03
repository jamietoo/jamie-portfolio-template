import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/ProjectDetail.scss';
import unscriptedCover from '../assets/images/screenshot.png';

function Unscripted() {
  return (
    <div className="project-detail-container">
      <Link to="/" className="back-button">← Back to Portfolio</Link>

      <div className="project-detail-content">
        <div className="cover-image">
          <img src={unscriptedCover} alt="Unscripted cover" />
        </div>

        <div className="project-info">
          <h1>Unscripted | Product Design & Implementation</h1>
          <p className="date">Mar 2026 - Apr 2026</p>

          <div className="project-actions">
            <a href="https://unscripted-phi.vercel.app" target="_blank" rel="noreferrer" className="project-link slides">
              <span className="icon">🔗</span>
              <span className="text">View Live App</span>
            </a>
            <a href="/jamie-portfolio-template/documents/Unscripted_PRD%20copy.pdf" target="_blank" rel="noreferrer" className="project-link demo">
              <span className="icon">📄</span>
              <span className="text">View PRD</span>
            </a>
          </div>

          <div className="description">
            <h2>Project Overview</h2>
            <p>
              Unscripted is a one-topic, one-minute speaking practice tool built to help users get structured repetition, clearer self-review, and faster feedback on filler words and repeated phrases. The product focuses on a simple flow: choose a prompt, record a short response, review transcript insights, and iterate.
            </p>
          </div>

          <div className="skills">
            <h2>Skills & Tools</h2>
            <p>Product Design, UX Design, Product Thinking, AI Integration, User Flow Design, PRD Writing, Figma, UI Prototyping, React, TypeScript, Tailwind CSS, OpenAI Whisper</p>
          </div>

          <div className="key-features">
            <h2>What I Built</h2>
            <ul>
              <li>Prompt-based speaking flow centered on a one-minute response window</li>
              <li>Transcript feedback that surfaces filler words and repeated phrases</li>
              <li>Browser-based audio recording experience</li>
              <li>Serverless transcription pipeline using OpenAI Whisper</li>
            </ul>
          </div>

          <div id="prd" className="prd-section">
            <h2>PRD</h2>
            <p>
              The PRD is provided as a PDF document. Use the button above to open the file directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unscripted;