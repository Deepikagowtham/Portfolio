"use client"

import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark")
    }
  }, [])

  // Update body class and localStorage when theme changes
  useEffect(() => {
    const root = document.documentElement
    if (isDarkMode) {
      root.classList.add("dark-mode")
      root.classList.remove("light-mode")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.add("light-mode")
      root.classList.remove("dark-mode")
      localStorage.setItem("theme", "light")
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
