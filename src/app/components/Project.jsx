'use client'

import React, { createContext, useContext } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Linkedin, Instagram, Sun, Moon } from 'lucide-react'

const projects = [
  { name: 'Portfolio', link: '#', github: '#' },
  { name: 'Weather App', link: '#', github: '#' },
  { name: 'Task Management', link: '#', github: '#' },
  { name: 'E-commerce', link: '#', github: '#' },
  { name: 'Blog Website', link: '#', github: '#' },
  { name: 'Chat App', link: '#', github: '#' },
]

const ProjectCard = ({ project }) => {


  return (
    <motion.div
      className="card relative w-full h-[300px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-300 to-pink-300 dark:from-blue-500 dark:to-pink-500"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <motion.div
        className="absolute inset-[2px] z-10 rounded-lg overflow-hidden bg-white dark:bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      />
      <motion.div
        className="content absolute inset-0 z-20 flex flex-col items-center justify-end p-6 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <h3 className="text-xl font-bold mb-4">{project.name}</h3>
        <ul className="sci flex space-x-4">
          <li>
            <a href={project.github} className="social-icon" aria-label="GitHub">
              <Github size={20} />
            </a>
          </li>
          <li>
            <a href={project.link} className="social-icon" aria-label="Live Demo">
              <ExternalLink size={20} />
            </a>
          </li>
          <li>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </li>
          <li>
            <a href="#" className="social-icon" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  )
}



const AnimatedPortfolio = () => {


  return (
    <section className=" w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      
      <motion.h2
        className="font-bold text-4xl sm:text-5xl lg:text-6xl text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default function App() {
  return <AnimatedPortfolio />
}
