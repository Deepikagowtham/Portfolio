"use client"

import { FaHeart, FaArrowUp } from "react-icons/fa"
import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"

const Footer = () => {
  const { isDarkMode } = useTheme()
  const footerBg = isDarkMode ? "bg-[#940B92]" : "bg-[#e9ecef]"
  const textColor = isDarkMode ? "text-white" : "text-gray-800"

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className={`${footerBg} py-6 theme-transition`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className={`text-center md:text-left ${textColor}`}>
              © {new Date().getFullYear()} Deppiga Prabhu. All rights reserved.
            </p>
          </div>

          <div className="flex items-center">
            <p className={textColor + " mr-2"}>Made with</p>
            <FaHeart className="text-[#E95793] mx-1" />
            <p className={textColor + " ml-1"}>by Deepiga Prabhu</p>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-[#E95793] p-2 rounded-full shadow-lg hover:bg-[#DA0C81] transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
