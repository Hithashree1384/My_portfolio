import React from 'react'
import './project.css'
import gas from '../assets/gas.webp'
import travel from '../assets/travel-website.webp'
import puzzle from '../assets/puzzle.png'
import weather from '../assets/Weather-app.webp'
import ai from '../assets/ai-generator.png'
import ecommerce from '../assets/ecommerce.webp'
const projectitems=[
  {
    title:'Travel Ventures-FSD' ,
    description:'Developed a travel website using HTML, CSS, and JavaScript for the main interface, with a React-based booking page to handle user reservations and enhance interactivity.',
    image:travel,
    lang_used:['HTML ','CSS ','Javascript ','React.js .'],
    github: 'https://github.com/Hithashree1384/TravelVentures-FSD'
  },
      {
    title: 'E-commerce',
    description: 'Built a full-stack e-commerce website with JWT authentication, product search, cart, and Stripe payments. Includes an admin dashboard for product and inventory management.',
    image: ecommerce,
    lang_used: ['MongoDB ', 'Express ', 'React ','NodeJS '],
    github: 'https://github.com/Hithashree1384/E-Commerce-Website'
    
  },
    {
    title: 'AI image generator',
    description: 'Developed a React-based app that generates images from text prompts using AI APIs. Features real-time rendering, download option, and a user-friendly interface.',
    image: ai,
    lang_used: ['MongoDB ', 'Express ', 'React ','NodeJS '],
    github: 'https://github.com/Hithashree1384/Ai_image_generator'
  },
  {
    title: 'Java Puzzle Game',
    description: 'Created a 3x3 sliding tile puzzle game using Java Swing. The game features button interactions, a click counter, shuffle logic, and win detection with a dialog popup.',
    image: puzzle,
    lang_used: ['Java ,', 'Swing ,', 'OOP .'],
    github: 'https://github.com/Hithashree1384/Puzzle_game'
  
  },
   {
    title: 'React Weather App',
    description: 'A weather forecasting application built with React and OpenWeatherMap API. Allows users to search for current weather by city, displaying temperature, humidity, and condition icons.',
    image: weather,
    lang_used: ['React.js ', 'CSS ', 'OpenWeather API '],
    github: 'https://github.com/Hithashree1384/weather_app'
  
  },
    {
    title: 'IoT-based Gas Leakage Detection and Alert System' ,
    description:'Detects gas leakage and sends real-time alerts via IoT dashboard or SMS using Arduino, MQ-5 sensor, and Blynk platform.',
    image:gas,
    lang_used:['ESP 8266 ','MQ-5 ','Blynk '],
  
  }


]
export default function Projects() {
  return (
    <div>
      
      <div className="projects">
        <h2>Projects</h2>
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
           {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="github-btn"
                >
                  View on Github
                </a>)}
      </div>
    </div>
        ))}
    </div> 
    </div>
  );
}
