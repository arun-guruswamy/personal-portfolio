import React, { useState } from 'react';
import '../App.css';

export default function ProjectPage() {
  
  const imageData = [
    { imgSrc: require('../images/game.png'), linkUrl: '/page1', imgTitle: "Multiplayer Maze game", imgDescr: "An online multiplayer maze game that allows up to 50 players to join and race to collect the most gold." },
    { imgSrc: require('../images/vga.jpg'), linkUrl: '/page2', imgTitle: "Morse-Code VGA Game", imgDescr: "FPGA designed game that tests Morse Code inputs of characters displayed on the VGA"},
    { imgSrc: require('../images/solar_sim.png'), linkUrl: '/page3', imgTitle: "2D Solar System simlution",  imgDescr: "Simulation of Solar System built using Pygame and fundamental Newtonian equations"},
    { imgSrc: require('../images/social_workout.png'), linkUrl: '/page4', imgTitle: "Social Media for Workouts", imgDescr: "Android app built to serve as a hub for sharing workouts and interacting with the fitness community."},
    { imgSrc: require('../images/tse.png'), linkUrl: '/page5', imgTitle: "Tiny Search Engine", imgDescr: "Search engine written in C that mimics the design of Google's inital search engine"},
    { imgSrc: require('../images/trader.png'), linkUrl: '/page6', imgTitle: "Trading Simulator", imgDescr: "Python Stock trading simulator built using Flask and data from the IEX API"}
  ]; 

  // Split the imageData into rows of 3 images each
  const rows = [];
  for (let i = 0; i < imageData.length; i += 3) {
    rows.push(imageData.slice(i, i + 3));
  }

  return (
    <>
      <div className="projectpage">
        <h1>Projects</h1>
        <div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="image-row">
          {row.map((image, index) => (
            <div className="image-container">
              <img src={image.imgSrc} alt={`Link to ${image.linkUrl}`} />
              <div className="image-text">
                <div className="image-title">{image.imgTitle}</div>
                <div className="image-subtitle">{image.imgDescr}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
    </>
  );
}

// return (
//   <>
//     <div className="projectpage">
//       <h1 id="test">Projects</h1>
//       <div className="flex-container-projects">
//         {contentIndexes.map((index, i) => (
//           <div key={i} className="flex-item-projects">
//             <img className="project-img" src={require(`../images/${imgArray[index]}`)} alt="project" />
//             <div className="projectTitle">{titleArray[index]}</div>
//             <div className="projectDescr">{descrArray[index]}</div>
//           </div>
//         ))}
//       </div>
//       <button id="change-content-btn" onClick={() => changeContent(1)}>
//         <div className="projectLeftArrow"></div>
//       </button>
//       <button id="change-content-btn" onClick={() => changeContent(contentIndexes.length)}>
//         <div className="projectRightArrow"></div>
//       </button>
//     </div>
//   </>
// );
// }

// Tiny Search Engine
// Morse code VGA
// Adjustable Shoe
// Solar System
// Stock market simulation
// Tic Tac Toe game
// Social Media for workouts
// Multiplayer maze game

