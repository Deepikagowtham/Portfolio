"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { useTheme } from "../context/ThemeContext"

const Projects = ({ projects }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { isDarkMode } = useTheme()

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

  // Group projects by category
  const webProjects = projects.filter((p) => p.live !== null)
  const mlProjects = projects.filter((p) => p.live === null)

  // Use theme-consistent colors
  const sectionBg = isDarkMode ? "bg-[#610C9F]" : "bg-[#f8f9fa]"
  const cardBg = isDarkMode ? "bg-[#940B92]" : "bg-[#e9ecef]"
  const cardBorder = isDarkMode ? "border-[#DA0C81]/30" : "border-purple-200"
  const cardText = isDarkMode ? "text-white" : "text-gray-800"
  const cardHighlight = isDarkMode ? "text-[#E95793]" : "text-[#9D4EDD]"
  const tagBg = isDarkMode ? "bg-[#610C9F]" : "bg-purple-100"

  return (
    <section id="projects" className={`py-20 ${sectionBg} theme-transition section-bg-1`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block ${cardText}`}>
          Projects
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#DA0C81]"></span>
        </h2>

        {/* Web Projects */}
        <div className="mb-12">
          <h3 className={`text-2xl font-bold mb-6 ${cardHighlight}`}>Web Development Projects</h3>
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {webProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`${cardBg} rounded-lg overflow-hidden shadow-lg h-full flex flex-col border border-${cardBorder} project-card theme-transition`}
              >
                <div className="p-6 flex-grow">
                  <h3 className={`text-xl font-bold mb-3 ${cardHighlight}`}>{project.title}</h3>
                  <p className={`${cardText} mb-4`}>{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`${tagBg} text-xs px-3 py-1 rounded-full ${cardText}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`flex justify-between p-4 border-t ${cardBorder}`}>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${cardText} hover:${cardHighlight} transition-colors duration-300 flex items-center`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="mr-1" /> Code
                    </motion.a>
                  )}

                  {project.live && project.live !== "#" && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${cardText} hover:${cardHighlight} transition-colors duration-300 flex items-center`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="mr-1" /> Live Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ML Projects */}
        <div>
          <h3 className={`text-2xl font-bold mb-6 ${cardHighlight}`}>Machine Learning Projects</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {mlProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`${cardBg} rounded-lg overflow-hidden shadow-lg h-full flex flex-col border border-${cardBorder} project-card theme-transition`}
              >
                <div className="p-6 flex-grow">
                  <h3 className={`text-xl font-bold mb-3 ${cardHighlight}`}>{project.title}</h3>
                  <p className={`${cardText} mb-4`}>{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`${tagBg} text-xs px-3 py-1 rounded-full ${cardText}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`flex justify-start p-4 border-t ${cardBorder}`}>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${cardText} hover:${cardHighlight} transition-colors duration-300 flex items-center`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="mr-1" /> GitHub Repository
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects
