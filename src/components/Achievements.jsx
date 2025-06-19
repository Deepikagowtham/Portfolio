"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaTrophy, FaMedal, FaAward } from "react-icons/fa"
import { useTheme } from "../context/ThemeContext"

const Achievements = ({ achievements }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { isDarkMode } = useTheme()
  const sectionBg = isDarkMode ? "bg-[#940B92]" : "bg-[#e9ecef]"
  const cardBg = isDarkMode ? "bg-[#610C9F]" : "bg-[#f8f9fa]"
  const textColor = isDarkMode ? "text-white" : "text-gray-800"
  const mutedTextColor = isDarkMode ? "text-gray-300" : "text-gray-600"
  const accentColor = isDarkMode ? "text-[#E95793]" : "text-[#9D4EDD]"

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const getIcon = (type) => {
    const iconClass = accentColor + " text-3xl"
    switch (type) {
      case "competition":
        return <FaTrophy className={iconClass} />
      case "award":
        return <FaMedal className={iconClass} />
      default:
        return <FaAward className={iconClass} />
    }
  }

  return (
    <section id="achievements" className={`py-20 ${sectionBg} theme-transition section-bg-2`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block ${textColor}`}>
          Achievements
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#DA0C81]"></span>
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`mb-8 ${cardBg} rounded-lg p-6 shadow-lg theme-transition`}
              whileHover={{ scale: 1.02, x: 5, transition: { duration: 0.3 } }}
            >
              <div className="flex items-start">
                <motion.div
                  className="mr-4 mt-1"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {getIcon(achievement.type)}
                </motion.div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{achievement.title}</h3>
                  <p className={`${mutedTextColor} mb-1`}>{achievement.description}</p>
                  {achievement.date && <p className={accentColor + " text-sm"}>{achievement.date}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
