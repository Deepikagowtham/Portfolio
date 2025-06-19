"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaServer, FaDatabase, FaNetworkWired, FaBrain } from "react-icons/fa"
import { useTheme } from "../context/ThemeContext"

const AreaOfInterest = () => {
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

  const interests = [
    {
      title: "Operating Systems",
      icon: <FaServer className={`text-5xl ${accentColor} mb-4`} />,
      description:
        "Fascinated by the architecture and design of operating systems, kernel development, and system-level programming.",
    },
    {
      title: "DBMS",
      icon: <FaDatabase className={`text-5xl ${accentColor} mb-4`} />,
      description:
        "Interested in database management systems, query optimization, and designing efficient data storage solutions.",
    },
    {
      title: "OOPS",
      icon: <FaNetworkWired className={`text-5xl ${accentColor} mb-4`} />,
      description:
        "Passionate about object-oriented programming principles, design patterns, and building scalable software architectures.",
    },
    {
      title: "Machine Learning",
      icon: <FaBrain className={`text-5xl ${accentColor} mb-4`} />,
      description:
        "Enthusiastic about developing intelligent systems, natural language processing, and solving complex problems with AI.",
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="interests" className={`py-20 ${sectionBg} theme-transition section-bg-2`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block ${textColor}`}>
          Area of Interest
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#DA0C81]"></span>
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${cardBg} rounded-lg p-6 shadow-lg text-center theme-transition`}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="flex justify-center"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {interest.icon}
              </motion.div>
              <h3 className={`text-xl font-bold mb-3 ${textColor}`}>{interest.title}</h3>
              <p className={mutedTextColor}>{interest.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AreaOfInterest
