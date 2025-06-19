"use client"

import { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { FaArrowUp } from "react-icons/fa"
import { ParallaxProvider } from "react-scroll-parallax"
import { ThemeProvider } from "./context/ThemeContext"

// Components
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Skills from "./components/Skills"
import AreaOfInterest from "./components/AreaOfInterest"
import Projects from "./components/Projects"
import Achievements from "./components/Achievements"
import Certifications from "./components/Certifications"
import Publications from "./components/Publications"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ParallaxSections from "./components/ParallaxSections"

// Data
import { projectsData } from "./data/projectsData"
import { achievementsData } from "./data/achievementsData"
import { publicationsData } from "./data/publicationsData"

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <ThemeProvider>
      <ParallaxProvider>
        <Helmet>
          <title>Deepiga Prabhu | Portfolio</title>
          <meta name="description" content="AI/ML Enthusiast & Full Stack Developer" />
          <meta name="theme-color" content="#610C9F" />
        </Helmet>

        <div className="min-h-screen theme-transition">
          <Navbar />

          <main>
            <Hero />
            <ParallaxSections />
            <About />
            <Education />
            <Skills />
            <AreaOfInterest />
            <Projects projects={projectsData} />
            <Achievements achievements={achievementsData} />
            <Certifications />
            <Publications publications={publicationsData} />
            <Contact />
          </main>

          <Footer />

          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="fixed bottom-8 right-8 bg-[#E95793] p-3 rounded-full shadow-lg hover:bg-[#DA0C81] transition-colors duration-300 z-50 pulse-glow"
              onClick={scrollToTop}
            >
              <FaArrowUp className="text-white" />
            </motion.button>
          )}
        </div>
      </ParallaxProvider>
    </ThemeProvider>
  )
}

export default App
