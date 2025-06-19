"use client"

import { motion } from "framer-motion"
import { FaSun, FaMoon } from "react-icons/fa"
import { useTheme } from "../context/ThemeContext"

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-opacity-20 backdrop-blur-sm theme-toggle-btn"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 0 : 180 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {isDarkMode ? (
          <FaSun className="text-yellow-300 text-xl glow-effect" />
        ) : (
          <FaMoon className="text-indigo-300 text-xl glow-effect" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
