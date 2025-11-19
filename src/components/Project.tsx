import React from "react";
import { Link } from "react-router-dom";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import EM from '../assets/images/EM.png';
import CNN from '../assets/images/CNN.png';
import '../assets/styles/Project.scss';
import Zalora from '../assets/images/Zalora.png';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.figma.com/design/2nVjpREl7X4keQ1Ly1JAi2/Zalora-case-competition-updated?node-id=0-1&t=RBQgGoxTYDvSD06J-1" target="_blank" rel="noreferrer"><img src={Zalora} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/2nVjpREl7X4keQ1Ly1JAi2/Zalora-case-competition-updated?node-id=0-1&t=RBQgGoxTYDvSD06J-1" target="_blank" rel="noreferrer"><h2>Zalora App Redesign Case Competition</h2></a>
                <p>Redesigned Zalora’s review and homepage experience to enhance user engagement and trust. Introduced “Hold-to-React” and Upvote interactions, VIP review tags, and featured highlights to spotlight authentic user feedback, showcased through a high-fidelity Figma prototype. Awarded 3rd place for the design innovation and usability</p>
            </div>
            <div className="project">
                <a href="https://colab.research.google.com/drive/117DuprBPqXP68bGQXkoncCCrnM4r_zaP?usp=sharing" target="_blank" rel="noreferrer"><img src={CNN} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://colab.research.google.com/drive/117DuprBPqXP68bGQXkoncCCrnM4r_zaP?usp=sharing" target="_blank" rel="noreferrer"><h2>CNN Model Implementation</h2></a>
                <p>Built and visualized a convolutional neural network (CNN) to analyze model robustness under pixel-shift perturbations. Developed an interactive Python UI to demonstrate feature stability and classification behavior.</p>
            </div>
           <div className="project">
                <img src={EM} className="zoom" alt="Unsupervised Learning thumbnail" width="100%" />
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