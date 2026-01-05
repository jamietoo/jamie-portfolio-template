import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience & Projects</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2025 - May 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Flavor QC intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Takasago International (Singapore) Pte Ltd</h4>
            <p>
              Quality Control, GC Analysis, SGRI Operation, Sensory Evaluation, Sample Management, Cross-Functional Collaboration, Documentation
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Zalora App Redesign Case Competition</h3>
            <h4 className="vertical-timeline-element-subtitle">Singapore</h4>
            <p>
              UX Design, Product Thinking, User Research, Figma, Usability Testing, UI Prototyping
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2025 - Nov 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Projects</h3>
            <h4 className="vertical-timeline-element-subtitle">Nanyang Technological University</h4>
            <p>
              CNN model implementation, K-Means, Expectation Maximization, PCA, ICA, Randomised Projections, Python, Data Visualization
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2025 - Nov 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Sight Design for Global Health Competition</h3>
            <h4 className="vertical-timeline-element-subtitle">SIGHT</h4>
            <p>
              UX Research, Healthcare Design, Prototyping, Cross-Cultural Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Communications Subcommittee</h3>
            <h4 className="vertical-timeline-element-subtitle">NTU Product Club</h4>
            <p>
              Event Communications, Visual Design, Content Strategy, Product & UX Workshops, Team Coordination
            </p>
            </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2022 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Piano Instructor</h3>
            <h4 className="vertical-timeline-element-subtitle">Ensemble Music, Singapore</h4>
            <p>
              Teaching, Curriculum Design, Student Mentorship, Performance Coaching, Feedback Systems
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;