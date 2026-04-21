import { useState } from 'react'
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import AboutME from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Experience from "./components/Experience/Experience"
import Projects from "./components/Projects/Projects"
import Achievements from "./components/Achievements/Achievements"
import Connect from "./components/Connect/Connect"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <AboutME/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Achievements/>
    <Connect/>
    </>
  )
}

export default App
