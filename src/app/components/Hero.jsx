"use client";
import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";

export default function Hero() {
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

        </>
    )
}
