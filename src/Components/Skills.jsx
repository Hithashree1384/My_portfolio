import React from 'react'
import './skills.css'

export default function Skills() {
  return (
    <div className='skills'>
      <h2>Skills</h2>

      <h3 className="section-title">Hard Skills</h3>
      <div className="skill-grid">
        <div className="skill-card">
          <p>Programming Languages</p>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>C</li>
            <li>C++</li>
          </ul>
        </div>

        <div className="skill-card">
          <p>Web Development</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
          </ul>
        </div>

        <div className="skill-card">
          <p>Database Management</p>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="skill-card">
          <p>Tools & Platforms</p>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>

      <h3 className="section-title">Soft Skills</h3>
      <div className="skill-grid">
        <div className="skill-card soft">
          <ul>
            <li>Problem Solving</li>
            <li>Teamwork</li>
            <li>Time Management</li>
            <li>Communication</li>
            <li>Leadership</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
