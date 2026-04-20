import React from 'react'
import "./Skills.css"
import cpp from "../../assets/cpp.png"
import html from "../../assets/html.png"
import python from "../../assets/python.jpeg"
import torch from "../../assets/torch.jpeg"
import { Element } from 'react-scroll'

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: ["C++", "C", "Python", "HTML", "CSS", "JavaScript"],
      desc: "Proficient in multiple programming languages with expertise in competitive programming (CodeChef: 1642 Expert, Codeforces: 1366, Atcoder: 712)"
    },
    {
      category: "Frontend Technologies",
      skills: ["React.js", "HTML5", "CSS3", "Vite", "Bootstrap", "TailwindCSS"],
      desc: "Building responsive and interactive user interfaces with modern web technologies"
    },
    {
      category: "Backend & Databases",
      skills: ["Node.js", "Express.js","SQL", "MongoDB", "REST APIs"],
      desc: "Developing scalable backend solutions and managing databases efficiently"
    },
    {
      category: "Data Science & ML",
      skills: ["PyTorch", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
      desc: "Implementing machine learning algorithms and data analysis with MLOps concepts"
    },
    {
      category: "Tools & Platforms",
      skills: ["Git & GitHub", "VS Code", "Postman", "WebSocket"],
      desc: "Version control, API testing, and real-time communication protocols"
    },
    {
      category: "Core Concepts",
      skills: ["Data Structures", "Algorithms", "Object Oriented Programming", "System Design", "Computer Networks", "Operating Systems", "Database Management Systems"],
      desc: "Strong foundation in computer science fundamentals"
    }
  ];

  return (
    <Element name='Skills'>
    <div className='main'>
        <h1 className="intro">Skills & Expertise</h1>
        <h3 className="para">Full Stack Developer with expertise in building scalable web applications and machine learning solutions. Experienced in competitive programming and modern web technologies.</h3>
        
        <div className="skills-container">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skills-list">
                {skillGroup.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">{skill}</span>
                ))}
              </div>
              <p className="skill-desc">{skillGroup.desc}</p>
            </div>
          ))}
        </div>

        <div className="sections">
            <div className="cpp">
                <img src={cpp} alt="C++" />
                <h4>Competitive Programming</h4>
                <p>Expert in competitive programming with strong ratings across multiple platforms: CodeChef (1642 - Expert), Codeforces (1366), and Atcoder (712).</p>
            </div>
            <div className="python">
                <img src={python} alt="PYTHON" />
                <h4>Machine Learning</h4>
                <p>Proficient in Python for ML with expertise in NumPy, Pandas, and Matplotlib for data analysis and visualization.</p>
            </div>
            <div className="torch">
                <img src={torch} alt="PyTorch" />
                <h4>Deep Learning</h4>
                <p>Experienced with PyTorch for building and training neural networks. Implementation of Linear/Polynomial Regression, Logistic Regression, ANN, KNN, and K-means Clustering.</p>
            </div>
            <div className="html">
                <img src={html} alt="HTML" />
                <h4>Web Development</h4>
                <p>Full-stack web development with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB for building complete web applications.</p>
            </div>
        </div>
    </div>
    </Element>
  )
}

export default Skills