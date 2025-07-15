import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <>
    <h1>Contact Me</h1>
    <div className='contactt'>
      
      <div className="contact">
        
        <form action='#'>
          <div className="input">
            <div className="input-field">
              <input type="text" placeholder='Full Name' id='name' className='item' autoComplete='off' required />
            </div>
            <div className="input-field">
              <input type="text" placeholder='Email' id='email' className='item' autoComplete='off' required />

            </div>
          </div>

          <div className="input">
            <div className="input-field">
              <input type="text" placeholder='Mobile number' id='mobile' className='item' autoComplete='off' required />
            </div>
            <div className="input-field">
              <input type="text" placeholder='Subject' id='sub' className='item' autoComplete='off' />

            </div>
          </div>
          <div className='textarea'>
            <textarea name="" id="message" placeholder='Your message' className='item' autoComplete='off' ></textarea>
          </div>
          <button type='submit'>Send Message</button>

        </form>

      </div>
      <div className="mycontact">
        <h3>Get in touch</h3>
        <p>Phone : 9353038876</p>
        <p>Email : hithashree1384</p>
        <p>Linkedin: <a href="https://linkedin.com/in/hithashree-a-m" target="_blank" rel="noreferrer" >Linkedin.com/in/hithashree-a-m</a></p>
        <p>Github: <a href="https://github.com/Hithashree1384" target="_blank" rel="noreferrer">github.com/in/hithashree1384</a></p>
    
      </div>
    </div></>

  )
}
