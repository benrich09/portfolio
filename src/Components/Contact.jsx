// Contact.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <section
            id="contact"
            className="h-screen flex items-center justify-center px-2 lg:px-4 xl:px-8 relative overflow-hidden"
        >
            {/* Background from Home.jsx */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(7,37,112,0.6),transparent_50%)] animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.4),transparent_50%)] animate-pulse delay-1000"></div>
                
                {/* Floating Particles from Home */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-40 animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 10}s`,
                                animationDuration: `${5 + Math.random() * 10}s`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <motion.div 
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight text-center">
                    Get In Touch
                </h2>

                <motion.form 
                    className="space-y-4 md:space-y-6 rounded-xl p-4 md:p-6 lg:p-8 border border-white/10 backdrop-blur-lg shadow-lg bg-white/5"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.div 
                        className="w-full"
                        variants={containerVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 md:py-3 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-gradient-to-r focus:from-blue-500/10 focus:to-purple-500/10 hover:bg-white/15 text-sm md:text-base"
                            placeholder="Your Name"
                        />
                    </motion.div>

                    <motion.div 
                        className="relative"
                        variants={containerVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 md:py-3 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-gradient-to-r focus:from-blue-500/10 focus:to-purple-500/10 hover:bg-white/15 text-sm md:text-base"
                            placeholder="Email"
                        />
                    </motion.div>

                    <motion.div 
                        className="relative"
                        variants={containerVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 md:py-3 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-gradient-to-r focus:from-blue-500/10 focus:to-purple-500/10 hover:bg-white/15 resize-none text-sm md:text-base"
                            placeholder="Message..."
                        />
                    </motion.div>

                    <motion.button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:to-white before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20 before:content-[''] before:pointer-events-none text-sm md:text-base"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </motion.div>
        </section>
    );
}