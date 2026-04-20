import React from 'react'
import "./Skills.css"
import cpp from "../../assets/cpp.png"
import html from "../../assets/html.png"
import python from "../../assets/python.jpeg"
import torch from "../../assets/torch.jpeg"
import { Element } from 'react-scroll'

const Skills = () => {
  return (
    <Element name='Skills'>
    <div className='main'>
        <h1 className="intro">What do I do?</h1><br/><br/>
        <h3 className="para">I'm a second-year CSE student passionate about Coding, Competative Programming, Mathematics, and Machine Learning. Currently, I'm exploring web development to create innovative projects that blend technology and creativity, showcasing my skills and interests.</h3>
        <div className="sections">
            <div className="cpp">
                <img src={cpp} alt="C++" />
                <p>C++ is one of the important and famous coding languages. I am currently practicing Competative Programming on the Codeforces (Rating: 1366) | CodeChef (Rating: 1524) | Atcoder (Rating: 712).</p>
            </div>
            <div className="python">
                <img src={python} alt="PYTHON" />
                <p>Python is one of the important coding languages which I generally use in Machine Learning.</p>
            </div>
            <div className="torch">
                <img src={torch} alt="PyTorch" />
                <p>PyTorch a python library which is very frequently used in Machine Learning. Apart from Numpy I also use Numpy, Pandas and  Matplotlib.</p>
            </div>
            <div className="html">
                <img src={html} alt="HTML" />
                <p>HTML is the foundation language of Web Developmet. Apart from HTML, CSS and JS is also frequently used.</p>
            </div>
        </div>
    </div>
    </Element>
  )
}

export default Skills