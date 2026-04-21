import React, { useRef, useEffect, useState } from 'react';
import './Connect.css'
import insta from '../../assets/insta.jpeg'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import { Element } from 'react-scroll'
import emailjs from '@emailjs/browser';

const Connect = () => {
    const form = useRef();
    const [alert, setAlert] = useState({ show: false, message: '', type: '' });

    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const showAlert = (message, type) => {
        setAlert({ show: true, message, type });
        setTimeout(() => setAlert({ show: false, message: '', type: '' }), 4000);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
            (response) => {
                console.log('SUCCESS!', response);
                form.current.reset();
                showAlert('✨ Message sent successfully! I\'ll get back to you soon.', 'success');
            },
            (error) => {
                console.log('FAILED...', error);
                showAlert('❌ Failed to send email. Please try again or contact me directly.', 'error');
            },
            );
        };
  

  return (
    <Element name='Connect'>
    <div className='main-connect'>
        <h1 className="contact-title">Get In Touch</h1>
        <p className="desc-cont">Feel free to reach out to me via email or connect on social media. I'm always open to discussing new projects and opportunities.</p>
        
        <div className="contact-wrapper">
            <div className="contact-info-box">
                <h3 className="contact-heading">Contact Information</h3>
                <div className="contact-details">
                    <div className="contact-item">
                        <span className="contact-icon">📧</span>
                        <div>
                            <p className="label">Email</p>
                            <a href="mailto:rohangarg1444@gmail.com">rohangarg1444@gmail.com</a>
                        </div>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">📍</span>
                        <div>
                            <p className="label">Location</p>
                            <p>Delhi, India</p>
                        </div>
                    </div>
                </div>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/rohan-garg-1446-/" className="social-btn linkedin" target='_blank' rel="noopener noreferrer">
                        <img src={linkedin} alt='LinkedIn'/>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/rohangarg-2006" className="social-btn github" target='_blank' rel="noopener noreferrer">
                        <img src={github} alt="GitHub" />
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.instagram.com/rohangarg1446/" className="social-btn instagram" target='_blank' rel="noopener noreferrer">
                        <img src={insta} alt="Instagram" />
                        <span>Instagram</span>
                    </a>
                </div>
            </div>

            <form className="connect-form" ref={form} onSubmit={sendEmail}>
                <h3 className="form-heading">Send Me a Message</h3>
                <div className="form-group">
                    <input type="text" className="form-input" placeholder='Your Name' name='your_name' required/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-input" placeholder='Your Email' name='your_email' required/>
                </div>
                <div className="form-group">
                    <textarea name="message" className="form-textarea" placeholder='Your Message' rows={5} required></textarea>
                </div>
                <button className="form-submit" type='submit'>Send Message</button>
            </form>
        </div>
        
        {alert.show && (
            <div className={`custom-alert ${alert.type}`}>
                <div className="alert-content">
                    <p className="alert-message">{alert.message}</p>
                </div>
            </div>
        )}
    </div>
    </Element>
  )
}

export default Connect