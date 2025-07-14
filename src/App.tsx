import './App.css'
import About from './sections/about'
import Contact from './sections/contact'
import Hero from './sections/hero'
import Navbar from './sections/navbar'
import Projects from './sections/projects'
import Skills from './sections/skills'
import Trusted from './sections/trusted'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Trusted />
      <Contact />
    </>
  )
}

export default App
