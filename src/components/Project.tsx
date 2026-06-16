import React from "react";
import { Link } from "react-router-dom";
import EM from '../assets/images/EM.png';
import CNN from '../assets/images/CNN.png';
import '../assets/styles/Project.scss';
import Zalora from '../assets/images/Zalora.png';
import DentalHealth from '../assets/images/dental-health-forms.png';
import NotionKanban from '../assets/images/notion-kanban.png';
import UnscriptedCover from '../assets/images/screenshot.png';
import GovTechCover from '../assets/images/govtech-bob-cover.png';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
          <div className="project">
            <Link to="/projects/unscripted"><img src={UnscriptedCover} className="zoom project-cover" alt="Unscripted cover"/></Link>
            <Link to="/projects/unscripted"><h2>Unscripted | Product Design & Implementation</h2></Link>
            <p>Designed and built a web-based public speaking practice tool to help users improve speaking clarity through prompt-based 1-minute recordings and AI-generated transcript feedback, highlighting filler words and repeated phrases. Defined the MVP and product flow through a product requirements document, then developed and deployed the app using React, TypeScript, Tailwind CSS, browser-based audio recording, and OpenAI Whisper via a Vercel serverless function.</p>
          </div>
          <div className="project">
            <Link to="/projects/govtech-bob"><img src={GovTechCover} className="zoom project-cover" alt="GovTech BoB case competition"/></Link>
            <Link to="/projects/govtech-bob"><h2>GovTech BoB Case Competition</h2></Link>
            <p>Designed and prototyped a Build on Build workflow on ApplySG to streamline PEI Student's Pass registration by institution, with SOLAR+ prefill, structured document collection, AI validation checks, and risk-based admin review before ICA handoff.</p>
          </div>
            <div className="project">
                <a href="https://www.figma.com/design/WBEf7mEKhHap6iTeMB9nVd/Notion-UIUX-with-Proposed-Features?node-id=183-72&t=kT1Ixx5A70WFB67N-1" target="_blank" rel="noreferrer"><img src={NotionKanban} className="zoom project-cover" alt="Notion AI Ideathon"/></a>
                <a href="https://www.figma.com/design/WBEf7mEKhHap6iTeMB9nVd/Notion-UIUX-with-Proposed-Features?node-id=183-72&t=kT1Ixx5A70WFB67N-1" target="_blank" rel="noreferrer"><h2>Notion AI Ideathon</h2></a>
                <p>Designed an AI-assisted decision framework, selected as a finalist at the Notion AI Ideathon (NTU), to help early-stage founders evaluate which problems are worth solving by mapping intended outcomes to success metrics and solution feasibility, reducing cognitive load in early product discovery.</p>
            </div>
            <div className="project">
                <a href="/jamie-portfolio-template/documents/dental-health-presentation.pdf" target="_blank" rel="noreferrer"><img src={DentalHealth} className="zoom project-cover" alt="Dental screening forms"/></a>
                <a href="/jamie-portfolio-template/documents/dental-health-presentation.pdf" target="_blank" rel="noreferrer"><h2>Dental Health Impact Checker — SIGHT Global Health Competition</h2></a>
                <p>Designed a step-by-step system to help rural clinics transition from paper records to digital dental tracking. Developed simplified screening forms, a color-coded priority system, and a central logbook to reduce missed follow-ups. Proposed a gradual digital onboarding workflow so healthcare volunteers can manage children's oral health more consistently and sustainably.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/design/2nVjpREl7X4keQ1Ly1JAi2/Zalora-case-competition-updated?node-id=0-1&t=RBQgGoxTYDvSD06J-1" target="_blank" rel="noreferrer"><img src={Zalora} className="zoom project-cover" alt="thumbnail"/></a>
                <a href="https://www.figma.com/design/2nVjpREl7X4keQ1Ly1JAi2/Zalora-case-competition-updated?node-id=0-1&t=RBQgGoxTYDvSD06J-1" target="_blank" rel="noreferrer"><h2>Zalora App Redesign Case Competition</h2></a>
                <p>Redesigned Zalora’s review and homepage experience to enhance user engagement and trust. Introduced “Hold-to-React” and Upvote interactions, VIP review tags, and featured highlights to spotlight authentic user feedback, showcased through a high-fidelity Figma prototype. Awarded 3rd place for the design innovation and usability</p>
            </div>
            <div className="project">
                <a href="https://colab.research.google.com/drive/117DuprBPqXP68bGQXkoncCCrnM4r_zaP?usp=sharing" target="_blank" rel="noreferrer"><img src={CNN} className="zoom project-cover" alt="thumbnail"/></a>
                <a href="https://colab.research.google.com/drive/117DuprBPqXP68bGQXkoncCCrnM4r_zaP?usp=sharing" target="_blank" rel="noreferrer"><h2>CNN Model Implementation</h2></a>
                <p>Built and visualized a convolutional neural network (CNN) to analyze model robustness under pixel-shift perturbations. Developed an interactive Python UI to demonstrate feature stability and classification behavior.</p>
            </div>
           <div className="project">
                <img src={EM} className="zoom project-cover" alt="Unsupervised Learning thumbnail" />
                <h2>Unsupervised Learning Analysis</h2>
                <p>
                  Developed and implemented EM clustering with ICA dimensionality reduction to uncover hidden patterns in unlabeled epidemiological data, and evaluated performance against alternative clustering approaches used by the team.
                </p>
                <div style={{display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap'}}>
                  <a href="/jamie-portfolio-template/documents/unsupervised-learning-report.pdf" target="_blank" rel="noreferrer" style={{padding: '8px 16px', background: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px', fontSize: '14px'}}>
                    📄 View Report
                  </a>
                  <a href="https://colab.research.google.com/drive/1yHhv-u_Q0JAmSd7-NdrTAr3wDxTRQ3oG?usp=sharing" target="_blank" rel="noreferrer" style={{padding: '8px 16px', background: '#f9ab00', color: 'white', textDecoration: 'none', borderRadius: '5px', fontSize: '14px'}}>
                    📓 View Notebook
                  </a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;