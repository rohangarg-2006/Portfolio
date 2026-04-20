import React from 'react'
import Rohan from '../../assets/Rohan.jpg'
import './About.css'
import { Element } from 'react-scroll'

const About = () => {
  const stats = [
    { label: 'Projects', value: '7+' },
    { label: 'Experience', value: '2+ yrs' },
    { label: 'CGPA', value: '8.20/10' }
  ];

  return (
    <Element name='AboutME'>
      <div className="about-section">
        <div className="about-container">
          {/* Left Content */}
          <div className="about-content">
            <div className="greeting-wrapper">
              <span className="greeting">Hello, I'm</span>
              <h1 className="hero-name">Rohan Garg</h1>
              <h2 className="hero-title">Full Stack Developer | ML Enthusiast</h2>
            </div>

            {/* Education Info */}
            <div className="edu-section">
              <div className="edu-item">
                <span className="edu-icon">🎓</span>
                <div className="edu-text">
                  <p className="edu-degree">Bachelor of Technology</p>
                  <p className="edu-field">Computer Science and Engineering</p>
                  <p className="edu-college">IIT (ISM) Dhanbad</p>
                </div>
              </div>
            </div>

            {/* About Description */}
            <p className="about-description">
              I craft innovative, scalable solutions that transform ideas into impactful digital experiences. With deep expertise in full-stack development, competitive programming, and machine learning, I specialize in building real-time collaborative systems using React, Node.js, and cutting-edge technologies. My approach combines strong algorithmic thinking with elegant code architecture, ensuring solutions that are both powerful and user-centric.
            </p>

            {/* Contact & Stats */}
            <div className="about-footer">
              <a href="mailto:rohangarg1444@gmail.com" className="contact-link">
                📧 rohangarg1444@gmail.com
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="about-image-wrapper">
            <div className="image-frame">
              <div className="frame-decoration"></div>
              <img src={Rohan} alt="Rohan Garg" className="about-image"/>
            </div>
            
            {/* Stats Cards */}
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default About