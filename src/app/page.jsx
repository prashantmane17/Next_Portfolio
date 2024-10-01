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
export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  return (
    <>
      <div className="home_bg w-full md:flex  h-screen bg-black" >
        <div className="md:w-1/2 pl-12 pt-[90px] md:pt-0 h-1/2 md:h-full flex text-white items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}>
              <h1 className=" text-3xl  lg:text-6xl text-black font-bold mb-4 dark:text-white">
                Hi I'm <span className="text-orange-500">Prashant</span>
              </h1>
              <motion.p
                className="text-[16px] md:text-3xl font-semibold text-black dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                A passionate web developer crafting beautiful digital experiences

              </motion.p>

              <button className=" lg:w-[14vw] group text-[14px] rounded-full text-white font-bold my-6 px-3 p-2 bg-black dark:bg-slate-50 dark:text-black"><span className="flex items-center justify-center"><span className="mr-3 group-hover:mr-6 transition-all duration-200 ease-linear group-hover:text-gray-200">View Project </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="arr-2" viewBox="0 0 24 24">
                  <path
                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                  ></path>
                </svg></span>
              </button>
            </motion.div>
          </div>
        </div>
        <div className="pt-10 lg:pt-0 md:w-1/2 md:pr-12 h-1/2 md:h-full flex text-white justify-center md:items-center">

          {/* <p className="border-2 border-cyan-300 w-[300px] rounded-full h-[300px] text-white" style={{ boxShadow: '0 0 60px -15px rgba(6, 182, 212, 0.5)' }}> </p> */}

          <motion.div
            className="profile_animate w-[180px] md:w-[230px] lg:w-[300px] md:h-[230px] h-[180px] lg:h-[300px] border-2 border-cyan-300 rounded-full flex justify-center nter"
            style={{ boxShadow: '0 0 60px -15px rgba(6, 182, 212, 0.5)' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            {/* Add content or an image inside this motion div */}
            <p className=" absolute z-10 text-white text-xl">
              <Image
                src="/images/profile.png"
                alt="Profile Image"
                width={300}
                height={300}
                className="rounded-full w-[180] md:w-[300]"
              />
            </p>
          </motion.div>
        </div>
      </div>

      {/* ------------------About section------------------- */}
      <section className="py-10 md:py-24 px-4 md:px-8 lg:h-screen lg:px-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
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
      {/* -------------------Projects------------------- */}
      <section className="h-screen w-full">
        <h2 className="font-bold text-[4vw] text-center pt-20 tracking-wide">Projects</h2>


      </section>
    </>
  );
}
