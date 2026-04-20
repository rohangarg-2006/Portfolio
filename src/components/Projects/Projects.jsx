import React from 'react'
import "./Projects.css"
import { Element } from 'react-scroll'
import codeforces from "../../assets/codeforces.png"
import codechef from "../../assets/codechef.jpeg"
import atcoder from "../../assets/atcoder.png"

const Projects = () => {
  const projectsData = [
    {
      title: "CodeCollab - Collaborative Coding Platform",
      type: "Real-time Code Editor",
      description: "A multi-user collaborative coding environment with live code editing, role-based access control (Admin/Editor/Viewer), and AI-powered coding assistance. Supports 10+ programming languages with Monaco Editor and real-time WebSocket synchronization.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Monaco Editor"],
      github: "https://github.com/rohangarg-2006/Collaborative-Coding-Platform",
      demo: "https://collaborative-coding-platform-li35.onrender.com/",
      featured: true
    },
    {
      title: "Solid Waste Management Application",
      type: "Full-Stack MERN + ML Application",
      description: "Comprehensive waste management system with role-based access (citizen/manager), ML-based waste classification, and real-time request tracking. Includes ML module with PyTorch for waste image classification and data analytics dashboard.",
      tech: ["React", "Node.js", "Express", "MongoDB", "PyTorch", "JWT", "Tailwind CSS"],
      github: "https://github.com/rohangarg-2006/Solid-Waste-Management-Application",
      demo: "https://solid-waste-management-application-d0al.onrender.com",
      featured: true
    },
    {
      title: "Algomaration Live Colab",
      type: "Real-time Data Visualization",
      description: "🏆 Won 1st Place at Agglomeration 2024 Hackathon (IIT ISM Dhanbad). Interactive real-time data visualization platform with token-based authentication and dynamic data refreshes. Built as part of hackathon innovation challenge.",
      tech: ["JavaScript", "Node.js", "Express", "EJS", "Real-time Updates"],
      github: "https://github.com/rohangarg-2006/Algomaration_Live_Colab",
      featured: true,
      award: "🏆 1st Place - Agglomeration Hackathon"
    },
    {
      title: "Personal Portfolio Website",
      type: "Modern Portfolio Showcase",
      description: "A responsive, modern portfolio website built with React and Vite. Features smooth scrolling navigation, glassmorphic design system, interactive project showcase, achievements gallery, and contact form. Includes comprehensive sections for skills, projects, competitive programming ratings, and professional achievements with elegant animations and hover effects.",
      tech: ["React 18.2", "Vite", "JavaScript", "CSS3", "React-Scroll", "EmailJS"],
      github: "https://github.com/rohangarg-2006/Portfolio",
      demo: "https://portfolio-mrm0.onrender.com/",
      featured: true
    },
    {
      title: "Machine Learning Algorithms",
      type: "ML Implementation from Scratch",
      description: "Comprehensive implementation of core ML algorithms from scratch using only NumPy, Pandas, and Matplotlib. Includes Linear/Polynomial/Logistic Regression, Artificial Neural Networks, K-NN, and K-Means Clustering with detailed analysis.",
      tech: ["Python", "NumPy", "Pandas", "Matplotlib", "Jupyter"],
      github: "https://github.com/rohangarg-2006/Machine-Learning"
    },
    {
      title: "Go Flow Mail",
      type: "AI-Powered Email & Chat Application",
      description: "Full-stack email client with integrated AI chatbot powered by Google Gemini. Features folder-based email organization (Inbox, Sent, Drafts, Spam), secure JWT authentication, and real-time AI assistance with user context management.",
      tech: ["React", "Node.js", "Express.js", "Google Gemini API", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/rohangarg-2006/HackFest",
      featured: true
    },
    {
      title: "Campus Virtual Bus",
      type: "Real-time Ride-Sharing Platform",
      description: "A full-stack campus ride-sharing application enabling students to request and offer rides in real-time. Features include role-based access (passenger/driver), real-time notifications via Socket.io, and dynamic seat management across 31+ campus locations.",
      tech: ["React 18.2", "Node.js", "Express.js", "Socket.io", "Vite", "Tailwind CSS"],
      github: "https://github.com/rohangarg-2006/SE-Project",
      featured: true
    },
    {
      title: "CNN Models on MNIST & Fashion MNIST",
      type: "Deep Learning & Image Classification",
      description: "Convolutional Neural Network implementations for digit and fashion item classification. Features custom CNN architectures, ResNet implementations, and analysis of data transformation impacts on model accuracy (custom vs ResNet).",
      tech: ["PyTorch", "NumPy", "Pandas", "Matplotlib", "Jupyter"],
      github: "https://github.com/rohangarg-2006/CNN_models"
    }
  ];

  return (
    <Element name='Projects'>
    <div className='projects-main'>
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">Featured projects and hackathon submissions showcasing full-stack development and machine learning expertise</p>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
              {project.award && <div className="award-badge">{project.award}</div>}
              <div className="project-header">
                <h3 className="project-title-name">{project.title}</h3>
                <p className="project-type">{project.type}</p>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="competitive-section">
          <h2 className="comp-title">Competitive Programming</h2>
          <p className="comp-subtitle">Regular practice on leading competitive programming platforms with strong ratings</p>
          <div className="platforms">
            <div className="codeforces-link">
              <a href="https://codeforces.com/profile/rohangarg1446" className="codeforce" target='_blank' rel="noopener noreferrer">
                <img src={codeforces} alt="CodeForces" />
              </a>
              <p className="codeftext">CodeForces<br/><span className="rating">Rating: 1644 (Expert)</span></p>
            </div>
            <div className="codechef-link">
              <a href="https://www.codechef.com/users/rohan_garg1446" className="codechef" target='_blank' rel="noopener noreferrer">
                <img src={codechef} alt="CodeChef" />
              </a>
              <p className="codectext">CodeChef<br/><span className="rating">Rating: 1842 (4 star)</span></p>
            </div>
            <div className="atcoder-link">
              <a href="https://atcoder.jp/users/Rohan_Garg" className="atcoder" target='_blank' rel="noopener noreferrer">
                <img src={atcoder} alt="AtCoder" />
              </a>
              <p className="attext">AtCoder<br/><span className="rating">Rating: 712</span></p>
            </div>
          </div>
        </div>
    </div>
    </Element>
  )
}

export default Projects