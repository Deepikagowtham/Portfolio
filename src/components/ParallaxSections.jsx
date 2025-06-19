"use client"

import { useParallax } from "react-scroll-parallax"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "../context/ThemeContext"

const ParallaxSections = () => {
  const { ref: parallaxRef1 } = useParallax({ speed: -10 })
  const { ref: parallaxRef2 } = useParallax({ speed: 10 })
  const { ref: parallaxRef3 } = useParallax({ speed: -15 })
  const { isDarkMode } = useTheme()

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  // Use theme-consistent background colors
  const sectionBg = isDarkMode ? "bg-[#610C9F]" : "bg-[#f8f9fa]"
  const cardBg = isDarkMode ? "bg-[#940B92]/50" : "bg-[#e9ecef]/70"
  const textColor = isDarkMode ? "text-white" : "text-gray-800"
  const accentColor = isDarkMode ? "text-[#E95793]" : "text-[#9d4edd]"

  return (
    <section className={`relative py-20 overflow-hidden ${sectionBg} theme-transition section-bg-1`} ref={ref}>
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute top-20 left-10 w-64 h-64 rounded-full ${isDarkMode ? "bg-[#DA0C81]" : "bg-[#9d4edd]"} opacity-20 blur-3xl`}
          ref={parallaxRef1}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-80 h-80 rounded-full ${isDarkMode ? "bg-[#E95793]" : "bg-[#7b2cbf]"} opacity-20 blur-3xl`}
          ref={parallaxRef2}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full ${isDarkMode ? "bg-[#940B92]" : "bg-[#c77dff]"} opacity-20 blur-3xl`}
          ref={parallaxRef3}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className={`text-4xl md:text-5xl font-bold mb-8 ${textColor}`}>
            Crafting Digital <span className={accentColor}>Experiences</span>
          </motion.h2>
          <motion.p variants={itemVariants} className={`text-xl mb-12 ${textColor}`}>
            Combining AI/ML expertise with full-stack development to build innovative solutions
          </motion.p>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${cardBg} backdrop-blur-sm p-8 rounded-lg shadow-lg theme-transition`}>
              <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>AI/ML</h3>
              <p className={textColor}>Creating intelligent systems that learn and adapt to solve complex problems</p>
            </div>
            <div className={`${cardBg} backdrop-blur-sm p-8 rounded-lg shadow-lg theme-transition`}>
              <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>Web Development</h3>
              <p className={textColor}>Building responsive, user-friendly web applications with modern technologies</p>
            </div>
            <div className={`${cardBg} backdrop-blur-sm p-8 rounded-lg shadow-lg theme-transition`}>
              <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>Research</h3>
              <p className={textColor}>
                Contributing to academic research in natural language processing and machine learning
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ParallaxSections
