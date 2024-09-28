import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <>
      <nav class="block fixed top-0 z-40 w-full w-screen-lg px-4 py-2 mx-auto text-white bg-slate-900 shadow-md  lg:px-8 lg:py-3 ">
  <div class="container flex flex-wrap items-center justify-between mx-auto text-gray-100">
    <Link href="#"
      class="mr-4 block cursor-pointer py-1.5 text-base text-gray-200 font-semibold">
      Portfolio
    </Link>
    <div class="hidden lg:block">
      <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li class="flex items-center p-1 text-sm gap-x-2 text-gray-200">
          <Link href="/" class="flex items-center">
            Home
          </Link>
        </li>
        <li class="flex items-center p-1 text-sm gap-x-2 text-gray-200">
          <Link href="/about-me" class="flex items-center">
            About Me
          </Link>
        </li>
        <li class="flex items-center p-1 text-sm gap-x-2 text-gray-200">
          <Link href="#" class="flex items-center">
            Projects
          </Link>
        </li>
        <li class="flex items-center p-1 text-sm gap-x-2 text-gray-200">
          <Link href="/contact-me" class="flex items-center">
            Contact Me
          </Link>
        </li>
      </ul>
    </div>
    <button
      class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
      type="button">
      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </span>
    </button>
  </div>
</nav>
    </>
  )
}
