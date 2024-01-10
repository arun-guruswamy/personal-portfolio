import './App.css';
import {useRef} from 'react';
import React from 'react';
import About from './components/about';
import Home from './components/home';
import Experience from './components/experience';
import Projects from './components/projects';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Typewriter from "./components/typewriter";

function App() {

  const expRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  const expClick = () => {
  expRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const projectClick = () => {
    projectsRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const aboutClick = () => {
    aboutRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  return(
    <div>
      <div className="homepage">
         <div className="top-right"><button onClick={expClick}>EXPERIENCE</button>&nbsp;&nbsp;|&nbsp;&nbsp;         
                                    <button onClick={projectClick}>PROJECTS</button>&nbsp;&nbsp;|&nbsp;&nbsp;    
                                    <button onClick={aboutClick}>ABOUT</button>
         </div>
        <div className="centered">Hello, I'm</div>
        <div className="name"><Typewriter text="Arun Guruswamy" delay={100}/></div>
        <div className="belowCenter">Software + Computer Engineer</div>
        <img className="me" src={require("./images/cropped_v5.png")} alt="Me"/>
        {/* <button className="navButton" onClick={expClick}><div className="belowArrow"></div></button> */}
      </div>

      <div ref={expRef}>
      <Experience/>
      </div>

      <div ref={projectsRef}>
      <Projects/>
      </div>

      <div ref={aboutRef}>
      <About/>
      </div>
    </div>
    )
}

export default App;
