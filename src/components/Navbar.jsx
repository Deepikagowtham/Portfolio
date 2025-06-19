"use client"

import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"
import ThemeToggle from "./ThemeToggle"
import { useTheme } from "../context/ThemeContext"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isDarkMode } = useTheme()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Education", to: "education" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Achievements", to: "achievements" },
    { name: "Publications", to: "publications" },
    { name: "Contact", to: "contact" },
  ]

  const navbarBg = scrolled
    ? isDarkMode
      ? "bg-[#610C9F]/90 backdrop-blur-sm shadow-lg"
      : "bg-white/90 backdrop-blur-sm shadow-lg"
    : "bg-transparent"

  const textColor = isDarkMode ? "text-white" : "text-gray-800"
  const hoverColor = "hover:text-[#E95793]"

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`flex-shrink-0 font-bold text-xl ${textColor}`}
          >
            <span className="text-[#E95793]">Deepiga</span> Prabhu
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium ${textColor} ${hoverColor} transition-colors duration-300 hover-glow`}
                  activeClass="text-[#E95793]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className={`ml-2 inline-flex items-center justify-center p-2 rounded-md ${textColor} ${hoverColor} focus:outline-none`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden ${isDarkMode ? "bg-[#610C9F]" : "bg-white"} shadow-lg`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`cursor-pointer block px-3 py-2 rounded-md text-base font-medium ${textColor} ${hoverColor} transition-colors duration-300`}
                activeClass="text-[#E95793]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
