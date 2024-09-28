import React from "react";


export default function Home() {
  return (
    <>
      <div className="w-full md:flex  h-screen bg-black">
        <div className="md:w-1/2 pl-12 h-full flex text-white items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi I'm <span className="text-yellow-400">Prashant</span>
            </h1>
            <p className="text-2xl font-semibold text-white">
              A passionate web developer crafting beautiful digital experiences
            </p>
            <button className=" md:w-[14vw] rounded-full text-black font-bold my-6 p-2 bg-white">View Project</button>
          </div>
        </div>
        <div className=" md:w-1/2 pr-12 h-full flex text-white justify-center items-center">

          <p className="border-2 border-cyan-300 w-[300px] rounded-full h-[300px] text-white" style={{ boxShadow: '0 0 60px -15px rgba(6, 182, 212, 0.5)' }}> </p>
        </div>
      </div>
    </>
  );
}
