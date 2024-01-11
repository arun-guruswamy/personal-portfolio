import React from 'react';
import '../App.css';
import Typewriter from "./typewriter";

export default function AboutPage() {

  const handleViewPdf = () => {
    window.open('Arun_Guruswamy_resume.pdf', '_blank');
  };

  return (
    <>

<div className="aboutpage">
  <h1>About Me</h1>
  <div className="box">
  <div className="AboutTitle"><Typewriter text="Hi I'm Arun, nice to meet you" delay={100} /> </div>
  <div className="AboutText"> 
    Currently I am a senior at Vassar College aiming to complete my BA in Computer Science. 
    I am a skilled programmer comfortable with various technologies. I am driven by my
    enthusiasm for innovation and love to learn cutting edge technologies. When I'm not coding, you can find me competing in tennis, trying new video games or consuming
    all things space related. 
    </div>
    <a href="https://github.com/arun-guruswamy">
      <img className="git" src={require("../images/github.png")} alt="Me"/>
    </a>
    <a href="https://www.facebook.com/arun.guruswamy.77">
      <img className="fb" src={require("../images/fb.png")} alt="Me"/>
    </a>
    <a href="https://www.linkedin.com/in/arun-guruswamy/">
      <img className="in" src={require("../images/linkedin.png")} alt="Me"/>
    </a>
    <img className="me_img" src={require("../images/v15.png")} alt="Me"/>
    <button onClick={handleViewPdf}>RESUME ↓</button>
    </div>
    
  </div>      
    </>
  )
}
