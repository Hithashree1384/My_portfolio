import React from 'react'
import './project.css'
import gas from '../assets/gas.webp'
import travel from '../assets/travel-website.webp'
const projectitems=[
  {
    title:'Travel Ventures-FSD' ,
    description:'Developed a travel website using HTML, CSS, and JavaScript for the main interface, with a React-based booking page to handle user reservations and enhance interactivity.',
    image:travel,
    lang_used:['HTML ,','CSS ,','JAVASCRIPT ,','React.js .'],
  },
  {
    title: 'IoT-based Gas Leakage Detection and Alert System' ,
    description:'Detects gas leakage and sends real-time alerts via IoT dashboard or SMS using Arduino, MQ-5 sensor, and Blynk platform.',
    image:gas,
    lang_used:['ESP 8266 ,','MQ-5 ,','Blynk .'],
  },

]
export default function Projects() {
  return (
    <div>
      <div className="projects">
        <h1>Projects</h1>
      </div>
      <div className="projectitems">
        {projectitems.map((project,index)=>(
          <div key={index} className="box">
          <img src={project.image} alt={project.title} className='image' />
          <div className="proj-title">
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
           <p className="tech-heading">Tech Stack Used:</p>
              <div className="project-tags">
                
                {project.lang_used.map((tag, i) => (
                  <span key={i} className="tag">{tag} </span>
                ))}
              
        
          </div>
      </div>
    </div>
        ))}
    </div> 
    </div>
  );
}
