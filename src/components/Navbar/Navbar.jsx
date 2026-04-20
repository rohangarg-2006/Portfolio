import React from 'react'
import {Link} from 'react-scroll';
import R_img from '../../assets/R.png'
import "./Navbar.css"

const nav_bar = () => {
  return (
    <nav className="nav_bar">
        <img src={R_img} alt="R" className="rimage" />
        <div className="links">
            <Link activeClass='active' to='AboutME' spy={true} smooth={true} offset={-100} duration={500} className="shortcuts">About Me</Link>
            <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-100} duration={500} className="shortcuts">Skills</Link>
            <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-120} duration={500} className="shortcuts">Projects</Link>
            <Link activeClass='active' to='Achievements' spy={true} smooth={true} offset={-120} duration={500} className="shortcuts">Achievements</Link>
            <Link activeClass='active' to='Connect' spy={true} smooth={true} offset={-120} duration={500} className="shortcuts">Connect With Me</Link>
        </div>
    </nav>
  )
}

export default nav_bar