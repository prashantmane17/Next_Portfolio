"use client"
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import { useTheme } from "next-themes";
import { Sun, Moon } from 'lucide-react'
import { motion } from "framer-motion";

export default function Nav() {
  const [toggleNav, setToggleNav] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>

      {/* Overlay when toggleNav is true */}
      {toggleNav && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setToggleNav(false)}></div>
      )}

      {/* Navbar with a higher z-index */}
      <nav className="block fixed top-0 z-50 w-full mx-auto text-black dark:text-white shadow-md bg-white dark:bg-black">
        <div className="container relative z-50 flex flex-wrap items-center justify-between mx-auto text-black dark:text-white px-4 py-2 lg:px-8 lg:py-3">
          <Link href="#"
            className="mr-4 block cursor-pointer py-1.5 text-base text-black dark:text-white font-semibold">
            Portfolio
          </Link>
          <div className="hidden lg:block">
            <ul className="flex flex-col font-semibold gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black dark:text-white">
              <li className="flex items-center p-1 text-sm gap-x-2 ">
                <Link href="/" className="flex items-center relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:content-[''] after:bg-yellow-400">
                  Home
                </Link>
              </li>

              <li className="flex items-center p-1 text-sm gap-x-2 ">
                <Link href="#about-me" className="flex items-center relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:content-[''] after:bg-yellow-400">
                  About 
                </Link>
              </li>


              <li className="flex items-center p-1 text-sm gap-x-2 ">
                <Link href="#" className="flex items-center relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:content-[''] after:bg-yellow-400">
                  Projects
                </Link>
              </li>
              <li className="flex items-center p-1 text-sm gap-x-2 ">
                <Link href="/contact-me" className="flex items-center relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:content-[''] after:bg-yellow-400">
                  Contact Me
                </Link>
              </li>
              <li>
                <motion.button
                  onClick={toggleTheme}
                  className="relative w-14 h-7 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute left-1 top-[2px] outline-none w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
                    animate={{
                      x: theme === 'dark' ? '100%' : '0%',
                      rotate: theme === 'dark' ? 360 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    {theme === 'dark' ? (
                      <Moon className="w-4 h-4 text-gray-800" />
                    ) : (
                      <Sun className="w-4 h-4 text-yellow-500" />
                    )}
                  </motion.div>
                  <span className="sr-only">{theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}</span>
                </motion.button>
              </li>
            </ul>
          </div>

          {/* Cross button */}
          <button className={`absolute ${toggleNav === true ? "right-[40%] opacity-100" : "right-[-10%] opacity-0"} ease-in duration-300 ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden`}
            onClick={() => setToggleNav(!toggleNav)}>
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>

          {/* Menu button */}
          <button className={`relative ${toggleNav === false ? "right-[0] opacity-100" : "right-[-20%] opacity-0"} ease-in duration-300 ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden`}
            onClick={() => setToggleNav(!toggleNav)}>
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </span>
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className={`lg:hidden absolute top-[50px] ${toggleNav === true ? "right-0" : "right-[-50%]"} h-screen transition-all ease-in duration-300 z-40 shadow-lg justify-center bg-white dark:bg-black w-1/2`}>
          <ul className="flex flex-col gap-5 text-left mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black dark:text-white pl-10 ">
            <li className="flex items-center p-1 text-lg gap-x-2 ">
              <Link href="/" className="flex items-center" onClick={() => setToggleNav(!toggleNav)}>
                Home
              </Link>
            </li>
            <li className="flex items-center p-1 text-lg gap-x-2 " onClick={() => setToggleNav(!toggleNav)}>
              <Link href="#" className="flex items-center">
                Projects
              </Link>
            </li>
            <li className="flex items-center p-1 text-lg gap-x-2 " onClick={() => setToggleNav(!toggleNav)}>
              <Link href="/contact-me" className="flex items-center">
                Contact Me
              </Link>
            </li>
            <li>
                <motion.button
                  onClick={toggleTheme}
                  className="relative w-14 h-7 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute left-1 top-[2px] outline-none w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
                    animate={{
                      x: theme === 'dark' ? '100%' : '0%',
                      rotate: theme === 'dark' ? 360 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    {theme === 'dark' ? (
                      <Moon className="w-4 h-4 text-gray-800" />
                    ) : (
                      <Sun className="w-4 h-4 text-yellow-500" />
                    )}
                  </motion.div>
                  <span className="sr-only">{theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}</span>
                </motion.button>
              </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
