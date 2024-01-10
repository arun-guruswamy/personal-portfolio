import React, { useState } from 'react';
import '../App.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function ExpPage() {

  const adaptive = ['Python', 'Bazel', 'Java', 'Langchain', 'Azure', 'Agile'];
  const dartmouth = ['C', 'Bash', 'Git', 'Github', 'Unix'];
  const pittsburgh = ['Python', 'Scikit-learn', 'CNNs', 'Bash'];


  const [currentContentIndex, setCurrentContentIndex] = useState(1);
  const [headerText, setHeaderText] = useState('Software Engineer Intern • Adaptive Biotechnologies'); // Initial header text
  const [descrText, setDescrText] = useState("Built an AI-powered python application using Langchain and fine-tuned Large Language Models to expedite the process of configuring a new information management system."); // Initial body text
  const [skillVar, setSkillVar] = useState(adaptive);
  const [dateText, setDateText] = useState("June 2023 - September 2023")

  const skills = [adaptive, dartmouth, pittsburgh];

  const contentArray = [
    "Built an AI-powered python application using Langchain and fine-tuned Large Language Models to expedite the process of configuring a new information management system.",
    "Facilitated in teaching a software class focused on building large-scale, reliable, and maintainable software systems",
    "Identified a set of molecules that could bind effectively to a SARS-CoV-2 protein to help accelerate the discovery of a Coronavirus antibody effective across mutations.",
  ];

  const headerArray = [
    "Software Engineer Intern • Adaptive Biotechnologies",
    "Software Design Teaching Assitant • Dartmouth College",
    "TECBio Research Intern • National Science Foundation",
  ];

  const dateArray = [
    "June 2023 - Sept 2023",
    "Mar 2023 - June 2023",
    "May 2022 - July 2022"
  ]
  

  const updateContent = () => {
    setHeaderText(headerArray[currentContentIndex])
    setDescrText(contentArray[currentContentIndex])
    setSkillVar(skills[currentContentIndex])
    setDateText(dateArray[currentContentIndex]) 
  };

  const changeContent = (direction) => {
    setCurrentContentIndex((prevIndex) => (prevIndex + direction) % contentArray.length);
    updateContent();
  };



  return (
    <>
  <div className="exppage">
    <div className="test">Experience</div>
    <VerticalTimeline className="vertical-timeline-element--work custom-timeline-element">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="JUNE 2023 - SEPTEMBER 2023"
        dateClassName="exp_date"
        iconStyle={{ background: 'white', color: '#000' }}
        icon={<img className="logo" src={require("../images/adapt.png")} alt="myLogo" />}
      >
        <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">Remote</h4>
        <p>
          Built an AI-powered python application using Langchain and fine-tuned Large Language Models to expedite the process of configuring a new information management system.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="MARCH 2023 - JUNE 2023"
        dateClassName="exp_date"
        iconStyle={{ background: 'white', color: '#fff' }}
        icon={<img className="logo" src={require("../images/dartmouth.png")} alt="myLogo" />}
      >
        <h3 className="vertical-timeline-element-title">Software Design Teaching Assistant</h3>
        <h4 className="vertical-timeline-element-subtitle">Hanover, NH</h4>
        <p>
          Facilitated in teaching a software class focused on building large-scale, reliable, and maintainable software systems
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="MAY 2022 - JULY 2022"
        dateClassName="exp_date"
        iconStyle={{ background: 'white', color: '#fff' }}
        icon={<img className="logo" src={require("../images/nsf.png")} alt="myLogo" />}
      >
        <h3 className="vertical-timeline-element-title">Computational Biology Research Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">Pittsbrugh, PA</h4>
        <p>
          Identified a set of molecules that could bind effectively to a SARS-CoV-2 protein to help accelerate the discovery of a Coronavirus antibody effective across mutations.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="SEPTEMBER 2022 - JUNE 2025"
        dateClassName="exp_date"
        iconStyle={{ background: 'white', color: '#fff' }}
        icon={<img className="logo" src={require("../images/dartmouth.png")} alt="myLogo" />}
      >
        <h3 className="vertical-timeline-element-title">Student, Dartmouth College</h3>
        <h4 className="vertical-timeline-element-subtitle">Hanover, New Hampshire</h4>
        <p>
          <b>Major:</b> Computer Engineering <br/>
          <b>GPA:</b> 3.71 <br/>
          <b>Relevant Courses:</b> Digital Electronics, Embedded Systems, Software Design and Implementation, Machine Learning and Statistical Data Analysis <br/>
          <b>Extracurriculars:</b> Rocket Team, Tennis Club, Badminton Competitive Team
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="AUGUST 2020 - MAY 2024"
        dateClassName="exp_date"
        iconStyle={{ background: 'white', color: '#fff' }}
        icon={<img className="logo" src={require("../images/vc.png")} alt="myLogo" />}
      >
        <h3 className="vertical-timeline-element-title">Student, Vassar College</h3>
        <h4 className="vertical-timeline-element-subtitle">Poughkeepsie, New York</h4>
        <p>
          <b>Major:</b> Computer Science <br/>
          <b>GPA:</b> 3.95 <br/>
          <b>Relevant Courses:</b> Data Structures and Algorithms, Software Design and Implementation, Analysis of Algorithms, Computer Architecture, Theory of Computation, Compilers, Operating Systems, Graphics <br/>
          <b>Extracurriculars:</b> Varsity Tennis Team
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
    </>
  )
}


// document.addEventListener("DOMContentLoaded", function () {
//   const container = document.getElementById("scroll-container");
//   const exp_img = document.getElementsByClassName("exp_img");
//   const images = ["timeline1.png", "timeline2.png", "timeline3.png"]; // Add more image URLs as needed
//   let currentImageIndex = 0;

//   container.addEventListener("scroll", function () {
//     const threshold = 50; // Adjust the threshold as needed
//     const scrolled = container.scrollTop;

//     if (scrolled > threshold) {
//       currentImageIndex = (currentImageIndex + 1) % images.length;
//       container.scrollTop = 0; // Reset the scroll position
//       updateImage();
//     }
//   });

//   function updateImage() {
//     exp_img.src = images[currentImageIndex];
//   }
// });



// {/* <div className="exppage">
// {/* <img className="exp_img_left" src={require("../images/flying_rocket.png")} alt="Exp_system"/> */}
// <h1 id="test">Experience</h1> 
// <div className="exp-container" id="scroll-container">
// <div className="flex-container">
//   {/* <div className="flex-date"><img src={require("../images/Adaptive_time.png")} alt="Adaptive_time"/></div> */}
//   <div id="SWE" className="flex-descr"><h2>{headerText}</h2>
//         {descrText}
//         <div className="skill-container">
//           {skillVar.map((word, index) => (
//             <div key={index} className="skill">
//               {word}
//             </div>
//           ))}
//         </div>
//   </div>
// </div>
//   <button id="change-content-btn" onClick={() => changeContent(contentArray.length-1)}>
//     <img className="left_exp" src={require("../images/shooting_star.png")} alt="leftarrow"/>
//   </button>
//   <div className="exp_date">{dateText}</div>
//   <button id="change-content-btn" onClick={() => changeContent(1)}>
//     <img className="right_exp" src={require("../images/shooting_star.png")} alt="rightarrow"/>
//   </button>
// </div>
// {/* <img className="exp_img_right" src={require("../images/flying_rocket.png")} alt="Exp_system"/> */}

// </div> */}


