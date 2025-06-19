"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaGraduationCap } from "react-icons/fa"
import { useTheme } from "../context/ThemeContext"

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { isDarkMode } = useTheme()
  const sectionBg = isDarkMode ? "bg-[#940B92]" : "bg-[#e9ecef]"
  const cardBg = isDarkMode ? "bg-[#610C9F]" : "bg-[#f8f9fa]"
  const textColor = isDarkMode ? "text-white" : "text-gray-800"
  const mutedTextColor = isDarkMode ? "text-gray-300" : "text-gray-600"

  const educationItems = [
    {
      degree: "BE Computer Science and Engineering",
      institution: "Kongu Engineering College",
      year: "2022 - 2026",
      score: "CGPA: 8.61 (till 6th sem)",
      icon: <FaGraduationCap className="text-[#E95793] text-3xl" />,
    },
    {
      degree: "Higher Secondary School Certificate (HSLC)",
      institution: "Higher Secondary School",
      year: "2022",
      score: "Percentage: 92%",
      icon: <FaGraduationCap className="text-[#E95793] text-3xl" />,
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Secondary School",
      year: "2020",
      score: "Percentage: 84.2%",
      icon: <FaGraduationCap className="text-[#E95793] text-3xl" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="education" className={`py-20 ${sectionBg} theme-transition section-bg-2`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block ${textColor}`}>
          Education
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#DA0C81]"></span>
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`mb-10 ${cardBg} rounded-lg p-6 shadow-lg relative overflow-hidden theme-transition`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-[#DA0C81]"></div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">{item.icon}</div>
                <div>
                  <h3 className={`text-xl font-bold mb-1 ${textColor}`}>{item.degree}</h3>
                  <p className={`${mutedTextColor} mb-1`}>{item.institution}</p>
                  <p className={`${mutedTextColor} mb-1`}>{item.year}</p>
                  <p className="text-[#E95793] font-semibold">{item.score}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education
