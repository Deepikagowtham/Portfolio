"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaBookOpen, FaFileAlt } from "react-icons/fa"
import { useTheme } from "../context/ThemeContext"

const Publications = ({ publications }) => {
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

  return (
    <section id="publications" className={`py-20 ${sectionBg} theme-transition section-bg-2`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block ${textColor}`}>
          Publications
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#DA0C81]"></span>
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div className="mb-8 text-center" variants={itemVariants} whileHover={{ scale: 1.05 }}>
            <div className={`inline-block ${cardBg} rounded-lg p-4 shadow-lg theme-transition`}>
              <motion.div whileHover={{ rotate: 5, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <FaBookOpen className={`${accentColor} text-3xl mx-auto mb-2`} />
              </motion.div>
              <p className={`text-lg ${textColor}`}>Workshop: DravidianLangTech@NAACL 2024/2025</p>
            </div>
          </motion.div>

          {publications.map((publication, index) => (
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
                  <FaFileAlt className={`${accentColor} text-2xl`} />
                </motion.div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{publication.title}</h3>
                  <p className={mutedTextColor}>{publication.summary}</p>
                  {publication.link && (
                    <motion.a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${accentColor} hover:underline mt-2 inline-block`}
                      whileHover={{ scale: 1.05, x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read Publication
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Publications
