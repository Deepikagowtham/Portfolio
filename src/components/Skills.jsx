"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiTensorflow,
  SiScikitlearn,
} from "react-icons/si"
import { FaJava } from "react-icons/fa6"
import { TbBrandOpenai } from "react-icons/tb"
import { useTheme } from "../context/ThemeContext"

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { isDarkMode } = useTheme()
  const sectionBg = isDarkMode ? "bg-[#610C9F]" : "bg-[#f8f9fa]"
  const cardBg = isDarkMode ? "bg-[#940B92]" : "bg-[#e9ecef]"
  const textColor = isDarkMode ? "text-white" : "text-gray-800"
  const accentColor = isDarkMode ? "text-[#E95793]" : "text-[#9D4EDD]"

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <SiC size={40} /> },
        { name: "C++", icon: <SiCplusplus size={40} /> },
        { name: "Java", icon: <FaJava size={40} /> },
        { name: "Python", icon: <SiPython size={40} /> },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <SiHtml5 size={40} /> },
        { name: "CSS", icon: <SiCss3 size={40} /> },
        { name: "Bootstrap", icon: <SiBootstrap size={40} /> },
        { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
        { name: "React", icon: <SiReact size={40} /> },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs size={40} /> },
        { name: "Express.js", icon: <SiExpress size={40} /> },
        { name: "Django", icon: <SiDjango size={40} /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb size={40} /> },
        { name: "MySQL", icon: <SiMysql size={40} /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <SiGit size={40} /> },
        { name: "GitHub", icon: <SiGithub size={40} /> },
        { name: "Postman", icon: <SiPostman size={40} /> },
        { name: "Figma", icon: <SiFigma size={40} /> },
      ],
    },
    {
      title: "AI/ML",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow size={40} /> },
        { name: "Scikit-learn", icon: <SiScikitlearn size={40} /> },
        { name: "Transformers", icon: <TbBrandOpenai size={40} /> },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className={`py-20 ${sectionBg} theme-transition section-bg-1`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block ${textColor}`}>
          Technical Skills
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#DA0C81]"></span>
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className={`${cardBg} rounded-lg p-6 shadow-lg theme-transition`}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <h3 className={`text-xl font-bold mb-4 text-center ${accentColor}`}>{category.title}</h3>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center">
                    <motion.div
                      className={`mb-2 ${textColor} hover:${accentColor} transition-colors duration-300`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <span className={`text-sm text-center ${textColor}`}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
