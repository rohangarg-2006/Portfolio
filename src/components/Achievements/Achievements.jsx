import React from 'react'
import "./Achievements.css"
import { Element } from 'react-scroll'

const Achievements = () => {
  return (
    <Element name='Achievements'>
    <div className='main-achieve'>
        <h1 className="ach">Achievements</h1><br/>
        <div className="list-ach">
            <div className="ten">I got 98.4% marks in CBSE Class 10th Board Examination. </div>
            <div className="twe">I got 97.6% marks in CBSE Class 12th Board Examination. </div>
            <div className="jee">I secured AIR 2559 in JEE(Advanced) 2023 and AIR 4390 in JEE(Mains) 2023.</div>
            <div className="codecon">My team was 10th ranked in a coding event organised by CSE dept among more than 100 teams.</div>
        </div>
    </div>
    </Element>
  )
}

export default Achievements