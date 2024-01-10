import React from 'react';
import {useRef} from 'react';
import '../App.css';
import Typewriter from "./typewriter";
import { Link } from 'react-router-dom';

export default function HomePage() {
  const ref = useRef(null);
  const handleClick = () => {
  ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
<div className="homepage">
  {/* <div class="bottom-left">Bottom Left</div>
  <div class="top-left">Top Left</div>
  <div class="bottom-right">Bottom Right</div> */}
  {/* <div className="top-right"><button onClick={handleClick}>Experience &ensp; </button>
                             <button onClick={handleClick}>Projects &ensp; </button> 
                             <button onClick={handleClick}>About</button>
                          </div> */}
  <div className="centered"><Typewriter text="Arun Guruswamy" delay={100}/></div>
  {/* <div ref={ref} className="belowCenter">Software + Computer Engineer</div> */}
  {/* <div className="belowArrow"></div> */}
</div>

    </>
  )
}