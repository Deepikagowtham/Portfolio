"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import { useTheme } from "../context/ThemeContext"

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { isDarkMode } = useTheme()
  const sectionBg = isDarkMode ? "bg-[#610C9F]" : "bg-[#f8f9fa]"
  const cardBg = isDarkMode ? "bg-[#940B92]" : "bg-[#e9ecef]"
  const hoverBg = isDarkMode ? "hover:bg-[#DA0C81]" : "hover:bg-[#9D4EDD]"
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

  const contactLinks = [
    {
      platform: "Email",
      link: "mailto:deepikagowtham24@gmail.com",
      icon: <FaEnvelope className="text-3xl" />,
      username: "deepikagowtham24@gmail.com",
    },
    {
      platform: "GitHub",
      link: "https://github.com/Deepikagowtham",
      icon: <FaGithub className="text-3xl" />,
      username: "Deepikagowtham",
    },
    {
      platform: "LinkedIn",
      link: "https://tinyurl.com/DeepigaPrabhu",
      icon: <FaLinkedin className="text-3xl" />,
      username: "Deepiga Prabhu",
    },
  ]

  return (
    <section id="contact" className={`py-20 ${sectionBg} theme-transition section-bg-1`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block ${textColor}`}>
          Contact Me
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#DA0C81]"></span>
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactLinks.map((contact, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardBg} rounded-lg p-6 shadow-lg text-center ${hoverBg} transition-colors duration-500 flex flex-col items-center theme-transition`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: isDarkMode ? "0 0 20px rgba(233, 87, 147, 0.5)" : "0 0 20px rgba(157, 78, 221, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`mb-4 ${accentColor}`}
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {contact.icon}
                </motion.div>
                <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{contact.platform}</h3>
                <p className={mutedTextColor}>{contact.username}</p>
              </motion.a>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className={`text-lg ${textColor}`}>
              I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the
              platforms above!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
