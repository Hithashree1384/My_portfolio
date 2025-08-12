import React from 'react'
import './about.css'

export default function About() {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>  
      </div>

      <div className="about-me">
        <p>
          I am currently pursuing BE in Computer Science at St Joseph Engineering College, Vamanjoor.
          I love tackling challenging problems and creating secure, scalable, and innovative solutions, always eager to learn, explore new technologies, and contribute to impactful projects.
        </p>

        <div className="education">
          <h2>Education</h2>
          <p>
            St Joseph Engineering College, Vamanjoor, Mangalore <br/> 
            Year: 2022-26<br/> 
            CGPA: 9.75
          </p>
          <p>
            K V G Amarajyoti PU College Sullia, Dakshina Kannada <br/> 
            Year: 2020-22<br/>
            96.8% in PCMC
          </p>
          <p>
            Rotary English Medium School, Sullia, Dakshina Kannada <br/>
            Year: 2010-20<br/>
            Grade: 94.8%
          </p>

          <h2>Internship Certifications</h2>
          <p>
            Salesforce Developer Intern – Agentblazer Champion Program (Virtual)   
            <br/>
            Completed: May 2025 – July 2025 <br/>
            Covered: Salesforce Fundamentals, Organizational Setup, Data Management, Security Management, Developer Fundamentals, Process Automation.
          </p>
        </div>
      </div>
    </div>
  )
}
