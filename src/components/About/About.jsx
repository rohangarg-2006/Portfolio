import React from 'react'
import Rohan from '../../assets/Rohan.jpg'
import './About.css'
import { Element } from 'react-scroll'

const About = () => {
  return (
    <Element name='AboutME'>
      <div className="introduction-container">
        <div className='introduction'>
            <br/><br/><br/><br/>
            <p className="hello-">Hello,</p>
            <h1 className="name_ro">I am <span className="intro-name">Rohan Garg</span><br/></h1><br/>
            <h3 className="edu">I am Currently a Second Year student at <span className="col">IIT (ISM) Dhanbad</span>.</h3>
            <h3 className="branch">I am persuing Bachelor of Technology in <span className="bran">Computer Science and Engineering</span>.</h3><br/><br/>
            <p className="do">I am pashionate about Coding, Mathematics and Machine Learning <br/>and looking forward to make a wonderful carrier ahead in these fields.</p>
            <br/>
        </div>
        <img src={Rohan} alt="Rohan_Garg" className="Rohan_image"/>
      </div>
    </Element>
  )
}

export default About