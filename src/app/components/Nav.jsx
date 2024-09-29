"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

export default function Nav() {

  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      {/* Overlay when toggleNav is true */}
      {toggleNav && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setToggleNav(false)}></div>
      )}

      {/* Navbar with a higher z-index */}
      <nav className="block fixed top-0 z-50 w-full mx-auto text-black shadow-md bg-white">
        <div className="container relative z-50 flex flex-wrap items-center justify-between mx-auto text-black px-4 py-2 lg:px-8 lg:py-3">
          <Link href="#"
            className="mr-4 block cursor-pointer py-1.5 text-base text-black font-semibold">
            Portfolio
          </Link>
          <div className="hidden lg:block">
            <ul className="flex flex-col font-semibold gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black">
              <li className="flex items-center p-1 text-sm gap-x-2 ">
                <Link href="/" className="flex items-center relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:content-[''] after:bg-yellow-400">
                  Home
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
        <div className={`md:hidden absolute top-[50px] ${toggleNav === true ? "right-0" : "right-[-50%]"} h-screen transition-all ease-in duration-300 z-40 shadow-lg justify-center bg-white w-1/2`}>
          <ul className="flex flex-col gap-5 text-left mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black pl-10 ">
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
          </ul>
        </div>
      </nav>
    </>
  )
}
