import React from 'react'
import "./Projects.css"
import { Element } from 'react-scroll'
import codeforces from "../../assets/codeforces.png"
import codechef from "../../assets/codechef.jpeg"
import atcoder from "../../assets/atcoder.png"

const Projects = () => {
  return (
    <Element name='Projects'>
    <div className='ML_main_project'>
        <h3 className="machinelr">Machine Learning Project</h3><br/>
        <p className="short-desc">This is a ML project created by me which contains some of the algorithms of ML implimented by me.</p>
        <p className="desc-project-ml">The project on Machine Learning made by me includes the different Machine Learning algorithms including Linear Regression, Polynomial Regression, Logistic Regression, Artificial Neural Network, K-Nearest Neighbours KNN, K-means Clustering with their training and testing on some given datasets.</p>
        <p className="link-ml">The code for the project can be accessed from <a href="https://github.com/rohangarg-2006/Rohan_Garg_Machine_learning" target="_blank" className='ProjectML'> Here</a></p><br/><br/>
        <p className="code-pract">Apart from this I regularly practice Competative Programming on the following sites.</p>
        <div className="platforms">
          <div className="codeforces-link">
            <a href="https://codeforces.com/profile/rohangarg1446" className="codeforce" target='_blank'><img src={codeforces} alt="CodeForces" /></a>
            <p className="codeftext">CodeForces</p>
          </div>
          <div className="codechef-link">
            <a href="https://www.codechef.com/users/rohangarg1446" className="codechef" target='_blank'><img src={codechef} alt="CodeChef" /></a>
            <p className="codectext">CodeChef</p>
          </div>
          <div className="atcoder-link">
            <a href="https://atcoder.jp/users/Rohan_Garg" className="atcoder" target='_blank'><img src={atcoder} alt="AtCoder" /></a>
            <p className="attext">Atcoder</p>
          </div>
        </div>
    </div>
    </Element>
  )
}

export default Projects