import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/jamie.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={avatar} alt="Jamie Too" />
        </div>
        <div className="content">
          <div className="social_icons">
             <a href="mailto:jamietoo123@gmail.com"><EmailIcon/></a>
            <a href="https://www.linkedin.com/in/jamie-too" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Jamie Too</h1>
          <p>Fresh Graduate Of Chemical & Biomolecular Engineering</p>

          <div className="mobile_social_icons">
            <a href="mailto:jamietoo123@gmail.com"> <EmailIcon/> </a>
            <a href="https://www.linkedin.com/in/jamie-too" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;