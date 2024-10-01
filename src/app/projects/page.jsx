"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Code2, Palette, Cpu, Rocket, Globe, Search } from "lucide-react";

const skills = [
    { name: "HTML", icon: Code2, color: "bg-orange-500", description: "Structuring web content" },
    { name: "CSS", icon: Palette, color: "bg-blue-500", description: "Styling and layout" },
    { name: "JavaScript", icon: Cpu, color: "bg-yellow-500", description: "Dynamic functionality" },
    { name: "React.js", icon: Rocket, color: "bg-cyan-500", description: "Building user interfaces" },
    { name: "Next.js", icon: Globe, color: "bg-black", description: "Server-side rendering" },
    { name: "SEO", icon: Search, color: "bg-green-500", description: "Search engine optimization" },
];

export default function Home() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

    // Prevent hydration issues with useTheme in Next.js
    useEffect(() => setMounted(true), []);

    if (!mounted) return null; // Avoid rendering until mounted

    return (
        <>
            {/* Dark Mode Toggle Button */}
            <div className="absolute top-4 right-4">
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md text-sm"
                >
                    {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
            </div>

            <div className="home_bg w-full h-screen flex items-center justify-center">
                <motion.div
                    className="profile_animate w-[180px] md:w-[300px] h-[180px] md:h-[300px] border-2 border-cyan-300 rounded-full flex justify-center items-center"
                    style={{ boxShadow: "0 0 60px -15px rgba(6, 182, 212, 0.5)" }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <Image
                        src="/images/profile.png"
                        alt="Profile Image"
                        width={300}
                        height={300}
                        className="rounded-full"
                    />
                </motion.div>
            </div>

            {/* ------------------About Section------------------- */}
            <section className="py-24 px-4 md:px-8 h-screen lg:px-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white dark:from-gray-700 dark:to-gray-600">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-center mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        About Me
                    </motion.h2>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                        <motion.div
                            className="lg:w-1/3"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="relative w-64 h-64 mx-auto">
                                <Image
                                    src="/images/profile.png"
                                    width={300}
                                    height={300}
                                    alt="Profile"
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <p className="text-gray-300 text-center font-semibold mt-6">Front-end Developer</p>
                        </motion.div>
                        <div className="lg:w-2/3">
                            <motion.p
                                className="text-lg text-gray-300 mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                I'm a passionate front-end developer with a keen eye for design and a love for
                                creating seamless user experiences.
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
                                        className={`relative p-4 rounded-lg ${skill.color} cursor-pointer transition-all duration-300 ease-in-out ${selectedSkill === index ? "scale-105 shadow-lg" : "hover:scale-105"
                                            }`}
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
                                                animate={{ opacity: 1, height: "auto" }}
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
