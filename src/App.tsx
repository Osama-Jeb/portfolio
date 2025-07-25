import './App.css'
import { useState } from 'react'
import Contact from './sections/contact'
import Hero from './sections/hero'
import Navbar from './sections/navbar'
import Projects from './sections/projects'
import Skills from './sections/skills'
import Trusted from './sections/trusted'
import ProjectDetails from './components/ProjectDetails'

function App() {
  const [theme, setTheme] = useState<Theme>({
    backgroundColor: "#050505",
    color: "#E1E1E1"
  });

  const changeTheme = () => {
    setTheme({
      backgroundColor: theme.backgroundColor == "#050505" ? "#000000" : "#050505",
      color: theme.color == "#E1E1E1" ? "#FFFFFF" : "#E1E1E1"
    })
  }

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project)
  }

  const handleBackToProjects = () => {
    setSelectedProject(null)
  }



  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color
      }}
      className={theme.backgroundColor == "#050505" ? "" : "invert"}
    >
      <Navbar changeTheme={changeTheme} />

      {selectedProject ? (
        <ProjectDetails
          project={selectedProject}
          onBack={handleBackToProjects}
        />
      ) : (
        <>
          <Hero />
          <Skills />
          <Projects onProjectSelect={handleProjectSelect} />
          <Trusted />
          <Contact />
        </>
      )}
    </div>
  )
}

export default App
