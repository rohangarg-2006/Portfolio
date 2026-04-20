import React, { useRef } from 'react';
import './Connect.css'
import insta from '../../assets/insta.jpeg'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import { Element } from 'react-scroll'
import emailjs from '@emailjs/browser';

const Connect = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_v4wmpi9', 'template_d08bb88', form.current, {
            publicKey: 'jK17NLdpNM50XbRQx',
            })
            .then(
            () => {
                console.log('SUCCESS!');
                e.target.reset();
                alert('Email Sent!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
            );
        };
  

  return (
    <Element name='Connect'>
    <div className='main-connect'>
        <h1 className="contact">Contact Me</h1>
        <p className="desc-cont">Please fill out the form below to contact me</p>
        <form className="connect-form" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='your_name'/>
            <input type="email" className="email" placeholder='Your Email Id' name='your_email'/>
            <textarea name="message" className="msg" placeholder='Your Message' rows={5}></textarea>
            <button className="submit" type='submit' value="send">Submit</button>
        </form>
        <div className="images-contact">
            <a href="https://www.linkedin.com/in/rohan-garg-1446-/" className="linked" target='_blank'>
                <img src={linkedin} className="linkimg" alt='LinkedIn'></img>
            </a>
            <a href="https://www.instagram.com/rohangarg1446/" className="insta" target='_blank'>
                <img src={insta} alt="Instagram" className="instaimg"/>
            </a>
            <a href="https://github.com/rohangarg-2006" className="github" target='_blank'>
                <img src={github} alt="GitHub" className="githubimg"/>
            </a>
        </div>
    </div>
    </Element>
  )
}

export default Connect