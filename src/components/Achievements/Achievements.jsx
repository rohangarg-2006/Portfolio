import React from 'react'
import "./Achievements.css"
import { Element } from 'react-scroll'

const Achievements = () => {
  const achievementsData = [
    {
      title: "Academic Excellence",
      items: [
        "Class XII CBSE: 97.6%",
        "Class X CBSE: 98.4%",
        "Current CGPA at IIT ISM Dhanbad: 8.20/10"
      ]
    },
    {
      title: "Competitive Programming",
      items: [
        "CodeChef: Rating 1842 (4 star)",
        "Codeforces: Rating 1644 (Expert)",
        "AtCoder: Rating 712"
      ]
    },
    {
      title: "Entrance Exams",
      items: [
        "AIR 2559 in JEE(Advanced) 2023",
        "AIR 4390 in JEE(Mains) 2023"
      ]
    },
    {
      title: "Hackathons & Contests",
      items: [
        "287th rank in Meta Hacker Cup 2025 among 13000+ participants",
        "Top 10 at Agglomeration 1.0 Hackathon (Dept. of CSE, IIT ISM Dhanbad)",
        "1st Place in Agglomeration 1.0 Hackathon - Best Problem Statement Solution",
        "Top 10 in Code Conquest among 100+ teams (Coding event organized by CSE dept)",
        "Top 20 out of 400+ in Competitive Coding Club (C3) Recruitment, IIT(ISM) Dhanbad"
      ]
    },
    {
      title: "Certifications & Recognition",
      items: [
        "Google Student Upskilling Program - Certificate",
        "Salesforce Futureforce Tech Accelerator Event - Spot earned",
        "AIR 2559 | JEE Advanced 2023"
      ]
    },
    {
      title: "Social Engagement",
      items: [
        "Event Coordinator at Udbhav - Annual Flagship Event (IIT ISM Dhanbad)",
        "Technical Head and Jagrati Coordinator at Fast Forward India - Facilitating learning for underprivileged children",
        "Club Member at Competitive Coding Club(C3) - IIT Dhanbad",
        "Content Writer at Buffered Reader - Biannual Magazine of CSE Department"
      ]
    }
  ];

  return (
    <Element name='Achievements'>
    <div className='main-achieve'>
        <h1 className="ach-title">Achievements & Recognition</h1>
        <p className="ach-subtitle">Highlights of my academic and professional accomplishments</p>
        <div className="achievements-container">
          {achievementsData.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <h3 className="achievement-category">{achievement.title}</h3>
              <ul className="achievement-items">
                {achievement.items.map((item, idx) => (
                  <li key={idx} className="achievement-item">
                    <span className="achievement-bullet">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </div>
    </Element>
  )
}

export default Achievements