import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import OngoingProject from './components/comingsoon';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <Router basename="/jamie-portfolio-template">
      <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Routes>
          <Route path="/" element={
            <>
              <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
              <FadeIn transitionDuration={700}>
                <Main/>
                <Expertise/>
                <Timeline/>
                <Project/>
                <Contact/>
              </FadeIn>
              <Footer />
            </>
          } />
          <Route path="/projects/unsupervised" element={<OngoingProject />} />
        </Routes>
      </div>
    </Router>
    );
}

export default App;