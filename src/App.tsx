import './App.css'
import { useState } from 'react'
// import About from './sections/about'
import Contact from './sections/contact'
import Hero from './sections/hero'
import Navbar from './sections/navbar'
import Projects from './sections/projects'
import Skills from './sections/skills'
import Trusted from './sections/trusted'

interface Theme {
  backgroundColor: string,
  color: string,
}

function App() {
  const [theme, setTheme] = useState<Theme>({
    backgroundColor: "#050505",
    color: "#F1F1F1"
  })
  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color
      }}
    >
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Trusted />
      <Contact />
    </div>
  )
}

export default App
