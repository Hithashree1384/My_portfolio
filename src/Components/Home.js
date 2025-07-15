import React from 'react'
import myprofile from '../assets/mypic.jpg'
import Navbar from './Navbar'
import './Home.css'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='home'>
      <div className="intro">
        <h4>Helloo..I'm</h4>
        <h1 className='name'>Hithashree A M</h1>
        <p className='desc'> Computer Science Engineering student with<br/>skills in Java and web
 development, seeking an <br/> opportunity to apply my knowledge and<br/>
 contribute to software development projects</p>
      </div>
   
    <div className="img">
        <img src={myprofile} className='photo' alt="Myphoto"/>
    </div>
     </div>
     <a href='/resume.pdf' className='resume'>Download Resume</a>
    </>
  )
}
