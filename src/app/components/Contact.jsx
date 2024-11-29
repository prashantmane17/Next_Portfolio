'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
    };

    return (
        <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <motion.h2
                className="font-bold text-4xl sm:text-5xl lg:text-6xl text-center mb-12"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Contact Me
            </motion.h2>

            <motion.div
                className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="space-y-6">
                    <motion.div
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Mail className="text-blue-500" size={24} />
                        <p>prashantmn@gmail.com</p>
                    </motion.div>
                    <motion.div
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Phone className="text-blue-500" size={24} />
                        <p>7624821789</p>
                    </motion.div>
                    <motion.div
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <MapPin className="text-blue-500" size={24} />
                        <p>Karnataka, India</p>
                    </motion.div>
                </div>

                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="w-full p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="w-full p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md"
                    />
                    <textarea
                        placeholder="Your Message"
                        required
                        className="w-full p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md"
                        rows={4}
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                    >
                        Send Message
                    </button>
                </motion.form>
            </motion.div>
        </section>
    );
};

export default Contact;
