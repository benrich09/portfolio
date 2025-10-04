import React from "react";
import { motion } from "framer-motion";

export default function Home() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
            {/* Enhanced Motion Background with Parallax */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
                <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(7,37,112,0.6),transparent_50%)] animate-pulse"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                ></motion.div>
                <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.4),transparent_50%)] animate-pulse delay-1000"
                    whileHover={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                ></motion.div>
                
                {/* Enhanced Floating Particles */}
                <div className="absolute inset-0">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full opacity-40 animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 10}s`,
                                animationDuration: `${5 + Math.random() * 10}s`,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 0.4, scale: 1 }}
                            transition={{ duration: 2, delay: i * 0.1 }}
                        >
                            <div className={`bg-${i % 2 === 0 ? 'blue-500' : 'purple-500'}`}></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div 
                className="text-center z-10 px-4 relative w-full lg:px-8 xl:px-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1 
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {Array.from("Hi, I'm Ben").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            className={char === " " ? "inline-block w-4 lg:w-6" : "inline-block"}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p 
                    className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-md mx-auto leading-relaxed px-2 lg:max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    Full-stack developer passionate about scalable web apps and exceptional UX.
                </motion.p>

                <motion.div 
                    className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3 px-2 lg:space-x-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <a
                        href="#projects"
                        className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 md:py-3 md:px-6 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] inline-block glass-effect before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:to-white before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20 before:content-[''] before:pointer-events-none text-sm md:text-base"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="relative overflow-hidden border border-blue-500/50 text-blue-500 py-2 px-4 md:py-3 md:px-6 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10 inline-block glass-effect before:absolute before:inset-0 before:bg-blue-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-10 before:content-[''] before:pointer-events-none text-sm md:text-base"
                    >
                        Contact
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}