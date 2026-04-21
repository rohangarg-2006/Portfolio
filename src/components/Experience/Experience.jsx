import React from 'react'
import "./Experience.css"
import { Element } from 'react-scroll'
import oracleLogo from "../../assets/oracle-logo.png"

const Experience = () => {
  const experienceData = [
    {
      company: "Oracle",
      position: "Summer Internship",
      duration: "Summer 2026",
      type: "Upcoming",
      description: "Secured internship offer from Oracle for the upcoming summer of 2026. Will be working on innovative projects leveraging cloud technologies and enterprise solutions.",
      highlights: [
        "Competitive selection process",
        "Industry-leading tech stack exposure",
        "Mentorship from Oracle engineers",
        "Real-world project experience"
      ],
      status: "Offer Accepted ✓"
    }
  ]

  return (
    <Element name="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <div className="experience-content">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="company-info">
                  <div className="company-header-content">
                    <img src={oracleLogo} alt={exp.company} className="company-logo" />
                    <div>
                      <h3 className="company-name">{exp.company}</h3>
                      <p className="position">{exp.position}</p>
                    </div>
                  </div>
                </div>
                <div className="duration-badge">
                  <span className={`type-badge ${exp.type.toLowerCase()}`}>{exp.type}</span>
                  <p className="duration">{exp.duration}</p>
                </div>
              </div>
              
              <p className="description">{exp.description}</p>
              
              <div className="highlights">
                <h4>Key Highlights:</h4>
                <ul>
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div className="status-badge">
                {exp.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default Experience
