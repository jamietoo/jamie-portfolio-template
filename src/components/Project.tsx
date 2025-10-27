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
                <a href="https://www.figma.com/design/2nVjpREl7X4keQ1Ly1JAi2/Zalora-case-competition-updated?node-id=0-1&t=RBQgGoxTYDvSD06J-1" target="_blank" rel="noreferrer"><h2>Zalora App Redisign Case Competition</h2></a>
                <p>Redesigned Zalora’s review and homepage experience to improve user engagement and trust, introducing “Hold-to-React” & Upvote interactions, VIP review tags, and featured highlights through a high-fidelity Figma prototype.</p>
            </div>
            <div className="project">
                <a href="https://colab.research.google.com/drive/117DuprBPqXP68bGQXkoncCCrnM4r_zaP?usp=sharing" target="_blank" rel="noreferrer"><img src={CNN} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://colab.research.google.com/drive/117DuprBPqXP68bGQXkoncCCrnM4r_zaP?usp=sharing" target="_blank" rel="noreferrer"><h2>CNN Model Implementation</h2></a>
                <p>Built and visualized a convolutional neural network (CNN) to analyze model robustness under pixel-shift perturbations. Developed an interactive Python UI to demonstrate feature stability and classification behavior.</p>
            </div>
           <div className="project">
                <Link to="/projects/unsupervised">
                  <img src={EM} className="zoom" alt="Unsupervised Learning thumbnail" width="100%" />
                </Link>
                <Link to="/projects/unsupervised">
                  <h2>Unsupervised Learning Analysis (In Progress)</h2>
                </Link>
                <p>
                  Currently developing clustering and dimensionality-reduction algorithms to explore hidden patterns in unlabeled data. Implementing <strong>K-Means</strong>, <strong>Expectation-Maximization (EM)</strong>, and <strong>PCA</strong> to compare cluster behavior and visual interpretability.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;