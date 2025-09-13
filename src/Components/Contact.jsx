import React, { useRef } from 'react';
import './contact.css'
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
export default function Contact() {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_golsxvo', 'template_ovif9hj', form.current, 'BFmSVbTitbcHAuGYO')
      .then((result) => {
          alert('Message sent successfully!');
          e.target.reset(); // clear the form
      }, (error) => {
          alert('Failed to send message. Please try again.');
      });
  };
  return (
    <>
    
    <h1 className='cont'>Contact Me</h1>
    <div className='contactt'>
      
      <div className="contact">
        <div><h3>Send me a message</h3></div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="input">
            <div className="input-field">
              <input type="text" placeholder='Full Name' name='full-name' id='name' className='item' autoComplete='off' required />
            </div>
            <div className="input-field">
              <input type="text" placeholder='Email' name='email' id='email' className='item' autoComplete='off' required />

            </div>
          </div>

          <div className="input">
            <div className="input-field">
              <input type="text" placeholder='Mobile number' name='mobile' id='mobile' className='item' autoComplete='off' required />
            </div>
            <div className="input-field">
              <input type="text" name='subject' placeholder='Subject' id='sub' className='item' autoComplete='off' />

            </div>
          </div>
          <div className='textarea'>
            <textarea name="message" id="message"  placeholder='Your message' className='item' autoComplete='off' ></textarea>
          </div>
          <button type='submit'>Send Message</button>

        </form>

      </div>
     
      <div className="mycontact">
        <h3>Get in touch</h3>
        <p><FaPhone className='contact-icon'/> 9353038876</p>
        <p><FaEnvelope className="contact-icon" /> hithashree1384@gmail.com</p>
        <p><FaLinkedin className="contact-icon" /> <a href="https://linkedin.com/in/hithashree-a-m" target="_blank" rel="noreferrer" >Linkedin.com/in/hithashree-a-m</a></p>
        <p><FaGithub className="contact-icon"/><a href="https://github.com/Hithashree1384" target="_blank" rel="noreferrer">github.com/in/hithashree1384</a></p>
    
      </div>
    </div></>

  )
}
