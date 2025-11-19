import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faChartLine, faPalette, faCog } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Pandas",
    "NumPy",
    "Scikt-learn",
    "Tensorflow",
    "Matplotlib",
   
];

const labelsSecond = [
    "Figma",
    "Canva",
    "Notion",
   
];

const labelsThird = [
    "Aspen HYSYS",
    "MATLAB",
    "Excel",
    "Simulink",
   
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Data and Machine Learning </h3>
                    <p>I apply data-driven approaches to uncover insights and evaluate models. Experienced with Python, TensorFlow, and data visualization libraries to build and analyze predictive and clustering models.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPalette} size="3x"/>
                    <h3>Product and UX Design</h3>
                    <p>I design human-centered solutions informed by data and research. Skilled in Figma prototyping, usability testing, and translating complex ideas into intuitive interfaces.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCog} size="3x"/>
                    <h3>Engineering and Simulation</h3>
                    <p>With a foundation in chemical engineering, I bring structure, analytical thinking to problem-solving. Experienced in modelling, simulation and process optimization.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;