import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills.jsx"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Education />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App