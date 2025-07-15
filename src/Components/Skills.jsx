import React from 'react'
import './skills.css'
export default function Skills() {
  return (
    <div className='skills'>
      <h2>Skills</h2>
      <div className="hardskills">
        <h3>Hard Skills</h3>
      <div className="prgrmskills">
        <p>Programming Languages</p>
        <ul>
        <li> Java </li>
        <li>Python </li>
        <li>c lang </li>
        <li>C++</li>
        </ul>

      </div>
      <div className="web">
        <p>Web Development </p>
        <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        </ul>
      </div>
      <div className="db">
        <p>Database Management</p>
        <ul>
        
        <li>My SQL</li>
        <li>Mongo db</li>
        </ul>
      </div>
      <div className="tools">
        <p>Tools and Platform</p>
        <ul>
        
        <li>Git & GitHub</li>
        <li>vs code</li>
        </ul>
      </div>
</div>
<div className="softskil">
  <h3>Softskills</h3>
  <div className='soft'>
    <ul>
    <li>Problem solving</li>
    <li>Teamwork</li>
    <li>Time management</li>
    <li>Communication</li>
    <li>Leadership</li>
    </ul>

  </div>
</div>
    </div>
  )
}
