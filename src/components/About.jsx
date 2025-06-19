"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "../context/ThemeContext"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { isDarkMode } = useTheme()
  const sectionBg = isDarkMode ? "bg-[#610C9F]" : "bg-[#f8f9fa]"
  const textColor = isDarkMode ? "text-white" : "text-gray-800"

  return (
    <section id="about" className={`py-20 ${sectionBg} theme-transition section-bg-1`}>
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 relative inline-block ${textColor}`}>
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#DA0C81]"></span>
          </h2>

          <div className={`text-lg leading-relaxed ${textColor}`}>
            <p className="mb-4">
              Passionate AI/ML enthusiast and Full Stack Developer with a strong foundation in computer science. I am
              dedicated to creating innovative solutions that leverage cutting-edge technologies to solve real-world
              problems.
            </p>
            <p className="mb-4">
              My goal is to contribute to the field of artificial intelligence and machine learning while developing
              robust, scalable applications that provide exceptional user experiences. I am particularly interested in
              natural language processing and computer vision applications.
            </p>
            <p>
              I am constantly learning and expanding my skill set, staying up-to-date with the latest technologies and
              best practices in software development and AI/ML research.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
