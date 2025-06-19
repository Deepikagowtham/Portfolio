"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaCertificate, FaExternalLinkAlt, FaLaptopCode } from "react-icons/fa"
import { useTheme } from "../context/ThemeContext"

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { isDarkMode } = useTheme()
  const sectionBg = isDarkMode ? "bg-[#610C9F]" : "bg-[#f8f9fa]"
  const cardBg = isDarkMode ? "bg-[#940B92]" : "bg-[#e9ecef]"
  const textColor = isDarkMode ? "text-white" : "text-gray-800"
  const accentColor = isDarkMode ? "text-[#E95793]" : "text-[#9D4EDD]"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const certifications = [
    {
      name: "NPTEL Entrepreneurship",
      link: "https://drive.google.com/file/d/1TkwoBaRbXTaS5pZAbSG9ISV1QWVt_6CA/view?usp=sharing",
    },
    {
      name: "NPTEL Privacy and Social Security",
      link: "https://drive.google.com/file/d/1reoqx_ybzLP0mWlQ_bFaN3LNAc7fcBhg/view?usp=sharing",
    },
    {
      name: "TensorFlow Google Cloud from Coursera",
      link: "https://drive.google.com/file/d/1EiPo4vkjMO9siqMgyaORdRnfkCl-U7rj/view?usp=sharing",
    },
    {
      name: "IBM Data Science from Coursera",
      link: "https://drive.google.com/drive/folders/1RUQIzQ0ZP9gDunjyRfO-rbjjJao-b655?usp=drive_link",
    },
    {
      name: "MongoDB Associate Developer",
      link: "https://drive.google.com/file/d/1mVPxm4ZnsDKOn1PomuTWg9hly_AOTIc0/view?usp=sharing",
    },
  ]

  const internships = [
    {
      company: "Generative AI Consortium and SystimaNx Pvt Ltd",
      role: "AI/ML Intern",
      status: "Completed",
      link: "https://drive.google.com/file/d/1suRAhQLTn6e6PBMb-VPAEBu7b_lkXAFT/view?usp=sharing",
    },
    {
      company: "Cube AI Solutions Tech Pvt Ltd",
      role: "AI/ML Intern",
      status: "Ongoing",
      link: "https://drive.google.com/file/d/1CIMAIL4-kKIeAbwcEJgRBJKs1qH6ciSn/view?usp=sharing",
    },
  ]

  return (
    <section id="certifications" className={`py-20 ${sectionBg} theme-transition section-bg-1`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block ${textColor}`}>
          Certifications & Internships
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#DA0C81]"></span>
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Certifications Section */}
          <motion.div
            className={`${cardBg} rounded-lg p-8 shadow-lg theme-transition`}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex justify-center"
            >
              <FaCertificate className={`${accentColor} text-5xl mx-auto mb-6`} />
            </motion.div>
            <h3 className={`text-xl font-bold mb-4 text-center ${textColor}`}>Certifications</h3>

            <ul className="space-y-3 mb-6">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <span className={accentColor + " mr-2"}>•</span>
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${textColor} hover:${accentColor} transition-colors duration-300`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {cert.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Internships Section */}
          <motion.div
            className={`${cardBg} rounded-lg p-8 shadow-lg theme-transition`}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex justify-center"
            >
              <FaLaptopCode className={`${accentColor} text-5xl mx-auto mb-6`} />
            </motion.div>
            <h3 className={`text-xl font-bold mb-4 text-center ${textColor}`}>Internships</h3>

            <div className="space-y-4 mb-6">
              {internships.map((internship, index) => (
                <motion.div
                  key={index}
                  className={`border-l-2 border-${accentColor.replace("text-", "")} pl-4`}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <h4 className={`font-semibold ${textColor}`}>{internship.role}</h4>
                  <p className={`text-sm ${textColor}`}>{internship.company}</p>
                  <p className={`text-xs ${accentColor}`}>{internship.status}</p>
                  <motion.a
                    href={internship.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs hover:${accentColor} transition-colors duration-300 inline-flex items-center mt-1 ${textColor}`}
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="mr-1" size={10} /> View Certificate
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
