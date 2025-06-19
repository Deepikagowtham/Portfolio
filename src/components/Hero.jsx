"use client"

import { motion } from "framer-motion"
import { FaGithub, FaDownload, FaLinkedin, FaEnvelope } from "react-icons/fa"
import ParticleBackground from "./ParticleBackground"
import { useTheme } from "../context/ThemeContext"

const Hero = () => {
  const { isDarkMode } = useTheme()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden theme-transition"
    >
      <ParticleBackground />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="profile-image-container">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-24%20at%2016.13.14_0580b0ac.jpg-zIQN9WNk56BjaQS1DoYwWD6JctFeng.jpeg"
                alt="Deepiga Prabhu"
                className="w-48 h-48 rounded-full border-4 border-[#DA0C81] shadow-lg object-cover profile-image"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-2 theme-text"
          >
            Deepiga Prabhu
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl font-light mb-2 theme-text">
              <span className="text-[#E95793]">AI/ML Enthusiast</span> &{" "}
              <span className="text-[#E95793]">Full Stack Developer</span>
            </h2>
            <div className="flex justify-center mt-4">
              <motion.a
                href="https://github.com/Deepikagowtham"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-2xl hover:text-[#E95793] transition-colors duration-300 social-icon"
                aria-label="GitHub"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://tinyurl.com/DeepigaPrabhu"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-2xl hover:text-[#E95793] transition-colors duration-300 social-icon"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:deepikagowtham24@gmail.com"
                className="mx-2 text-2xl hover:text-[#E95793] transition-colors duration-300 social-icon"
                aria-label="Email"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://drive.google.com/file/d/1pSmAm2mA2JTu45ncv4rhlppMgTlp6yTy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#E95793] hover:bg-[#DA0C81] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg glow-button"
            >
              <FaDownload className="mr-2" /> Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <svg
            className="w-6 h-6 theme-text"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
