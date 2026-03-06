import './App.css'
import Navbar from './components/Navbar'
import ScrollExperience from './components/ScrollExperience'
import About from './components/About'
import Projects from './components/Projects'
import Approach from './components/Approach'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        {/* Immersive scroll-driven 3D hero */}
        <ScrollExperience />

        {/* Sections below the 3D experience */}
        <About />
        <Projects />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
