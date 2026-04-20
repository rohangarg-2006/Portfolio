import React from 'react'
import {Link} from 'react-scroll';
import Resume from '../../assets/Rohan Garg Resume.pdf'
// import R_img from '../../assets/R.png'
import "./Navbar.css"

const nav_bar = () => {
  return (
    <nav className="nav_bar">
        <div className="navbar-container">
            <div className="logo-section">
                {/* <img src={R_img} alt="Rohan Garg" className="rimage" /> */}
                <span className="brand-name">Rohan Garg</span>
            </div>
            <div className="links">
                <Link activeClass='active' to='AboutME' spy={true} smooth={true} offset={-100} duration={500} className="shortcuts nav-link" >
                    <span className="nav-icon">👤</span>About Me
                </Link>
                <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-100} duration={500} className="shortcuts nav-link">
                    <span className="nav-icon">⚡</span>Skills
                </Link>
                <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-120} duration={500} className="shortcuts nav-link">
                    <span className="nav-icon">🚀</span>Projects
                </Link>
                <Link activeClass='active' to='Achievements' spy={true} smooth={true} offset={-120} duration={500} className="shortcuts nav-link">
                    <span className="nav-icon">🏆</span>Achievements
                </Link>
                <Link activeClass='active' to='Connect' spy={true} smooth={true} offset={-120} duration={500} className="shortcuts nav-link cta-button">
                    <span className="nav-icon">💬</span>Connect
                </Link>
                <a href={Resume} download="Rohan-Garg-Resume.pdf" className="shortcuts nav-link resume-button">
                    <span className="nav-icon">📄</span>Resume
                </a>
            </div>
        </div>
    </nav>
  )
}

export default nav_bar