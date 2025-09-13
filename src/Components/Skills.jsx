import React from 'react'
import './skills.css'

// React Icons
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaGitAlt,FaNodeJs  } from "react-icons/fa";
import { SiMongodb,SiJavascript,SiMysql,SiCplusplus,SiExpress } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaCode } from "react-icons/fa";

export default function Skills() {
  return (
    <div className='skills'>
      <h2>Skills</h2>

      <h3 className="section-title">Technical Skills</h3>
      <div className="skill-grid">

        {/* Programming Languages */}
        <div className="skill-card">
          <p>Programming Languages</p>
          <ul>
            <li><FaJava className="icon java" /> Java</li>
            <li><FaPython className="icon python" /> Python</li>
            <li><FaCode className="icon c" /> C</li>
            <li><SiCplusplus className="icon cpp" /> C++</li>
          </ul>
        </div>

        {/* Web Development */}
        <div className="skill-card">
          <p>Frontend Development</p>
          <ul>
            <li><FaHtml5 className="icon html" /> HTML</li>
            <li><FaCss3Alt className="icon css" /> CSS</li>
            <li><SiJavascript className="icon js" /> JavaScript</li>
            <li><FaReact className="icon react" /> React.js</li>
          </ul>
        </div>

        {/* Backend Development */}
        <div className="skill-card">
          <p>Backend Development</p>
          <ul>
            <li><FaNodeJs className="icon node" /> Node.js</li>
            <li><SiExpress className="icon express" /> Express.js</li>
          </ul>
        </div>


        {/* Database */}
        <div className="skill-card">
          <p>Database Management</p>
          <ul>
            <li><SiMysql className="icon mysql" /> MySQL</li>
            <li><SiMongodb className="icon mongo" /> MongoDB</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <p>Tools & Platforms</p>
          <ul>
            <li><FaGitAlt className="icon git" /> Git & GitHub</li>
            <li><BiLogoVisualStudio  className="icon vscode" /> VS Code</li>
          </ul>
        </div>
      </div>

<h3 className="section-title">Soft Skills</h3>
<div className="soft-skills">
  <span className="skill-tag">Problem Solving</span>
  <span className="skill-tag">Teamwork</span>
  <span className="skill-tag">Time Management</span>
  <span className="skill-tag">Communication</span>
  <span className="skill-tag">Leadership</span>
  <span className="skill-tag">Adaptability</span>
</div>

    </div>
  )
}
