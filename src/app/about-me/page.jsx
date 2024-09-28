"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Page = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1. This could be a web app, mobile app, or any other significant project you've worked on.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com"
    },
    {
      title: "Project 2",
      description: "Description of Project 2. Highlight the key features and technologies used in this project.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2.com"
    },
    {
      title: "Project 3",
      description: "Project 3 details. Explain what problem this project solves and why it's significant.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Angular", "Firebase", "TypeScript"],
      github: "https://github.com/yourusername/project3",
      live: "https://project3.com"
    },
    {
      title: "Project 4",
      description: "Information about Project 4. Discuss any challenges you overcame or unique aspects of this project.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Next.js", "GraphQL", "Tailwind CSS"],
      github: "https://github.com/yourusername/project4",
      live: "https://project4.com"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="h-full flex flex-col">
                <div className="relative flex-grow">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out"
                    style={{
                      transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-white text-center">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="mb-4">{project.description}</p>
                      <div className="flex justify-center space-x-4">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300"
                        >
                          GitHub
                        </a>
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="flex flex-wrap gap-2 p-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
