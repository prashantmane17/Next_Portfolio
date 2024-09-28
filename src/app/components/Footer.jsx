import React from 'react'

export default function Footer() {
  return (
    <>
      <footer class="flex flex-row flex-wrap items-center justify-center w-full  text-center border-t gap-y-6 gap-x-12 text-white bg-slate-900 shadow-md md:justify-between px-4 py-4 ">
  <p class="block text-slate-100 font-semibold text-sm">
      Material Tailwind
  </p>
  <ul class="flex flex-wrap items-center gap-y-2 gap-x-8">
    <li>
      <a href="#" class="text-slate-200 hover:text-slate-500 focus:text-slate-500 text-sm">
        About Us
      </a>
    </li>
    <li>
      <a href="#" class="text-slate-200 hover:text-slate-500 focus:text-slate-500 text-sm">
        License
      </a>
    </li>
    <li>
      <a href="#" class="text-slate-200 hover:text-slate-500 focus:text-slate-500 text-sm">
        Contribute
      </a>
    </li>
    <li>
      <a href="#" class="text-slate-200 hover:text-slate-500 focus:text-slate-500 text-sm">
        Contact Us
      </a>
    </li>
  </ul>
</footer> 
    </>
  )
}
