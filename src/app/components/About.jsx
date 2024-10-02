"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useState } from 'react';
import { Code2, Palette, Cpu, Rocket, Globe, Search } from 'lucide-react';
const skills = [
  { name: 'HTML', icon: Code2, color: 'bg-orange-500', description: 'Structuring web content' },
  { name: 'CSS', icon: Palette, color: 'bg-blue-500', description: 'Styling and layout' },
  { name: 'JavaScript', icon: Cpu, color: 'bg-yellow-500', description: 'Dynamic functionality' },
  { name: 'React.js', icon: Rocket, color: 'bg-cyan-500', description: 'Building user interfaces' },
  { name: 'Next.js', icon: Globe, color: 'bg-black', description: 'Server-side rendering' },
  { name: 'SEO', icon: Search, color: 'bg-green-500', description: 'Search engine optimization' },
];
export default function About() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  return (
    <>
      <section id="about-me" className="py-10 md:py-24 px-4 md:px-8 lg:h-screen lg:px-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-7 md:gap-12">
            <motion.div
              className=" w-full lg:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative justify-center flex items-center mx-auto">
                {/* <div className="absolute inset-0  rounded-full animate-pulse"></div> */}
                <Image
                  src="/images/profile.png"
                  width={300}
                  height={300}
                  alt="Profile"
                  className=" w-[180px] md:w-[230px] lg:w-[300px] h-[180px] md:h-[230px] lg:h-[300px] inset-2 rounded-full object-cover"
                />
              </div>
              {/* <h3 className="text-2xl font-semibold text-center mt-6">John Doe</h3> */}
              <p className="text-gray-300 text-center font-semibold mt-6">Front-end Developer</p>
            </motion.div>
            <div className="lg:w-2/3">
              <motion.p
                className="text-[16px] text-center md:text-left md:text-lg text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                I'm a passionate front-end developer with a keen eye for design and a love for creating seamless user experiences. My expertise lies in crafting responsive and intuitive web applications using the latest technologies and best practices in the field.
              </motion.p>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`relative p-2 md:p-4 rounded-lg ${skill.color} cursor-pointer transition-all duration-300 ease-in-out ${selectedSkill === index ? 'scale-105 shadow-lg' : 'hover:scale-105'}`}
                    onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center space-x-4">
                      <skill.icon className="w-8 h-8 text-white" />
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    {selectedSkill === index && (
                      <motion.p
                        className="mt-2 text-sm"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.description}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
