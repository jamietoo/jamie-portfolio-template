import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="mailto:jamietoo123@gmail.com">
          <EmailIcon/>
        </a>
        <a href="https://www.linkedin.com/in/jamie-too" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p> Thank you for stopping by!</p>
    </footer>
  );
}

export default Footer;