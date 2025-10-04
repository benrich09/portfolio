import React from "react";
import { motion } from "framer-motion";

export default function About() {
    const frontendSkills = ["React", "Typescript", "BootstrapCSS", "TailwindCSS"];
    const BackendSkills = ["Express.js", "Node.js", "Python", "PHP", "Java", "Mysql", "MongoDB"];
    const programmingLanguages = ["JavaScript", "Python", "PHP", "Java", "Typescript", "C#"];
    const frameworks = ["React", "Laravel", "Next.js", "Node.js", "React-native"];

    return (
        <section id="about" className="h-screen flex items-center justify-center relative overflow-hidden">
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
                className="w-full max-w-6xl mx-auto px-2 lg:px-4 xl:px-8 relative z-10 overflow-y-auto h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight text-center">
                    About Me
                </h2>

                <motion.div 
                    className="glass rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10 backdrop-blur-lg hover:-translate-y-1 transition-all duration-300 shadow-lg max-h-full overflow-y-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.p 
                        className="text-gray-300 mb-6 text-center text-sm md:text-base lg:text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Passionate full-stack developer specializing in modern web technologies.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
                        <motion.div 
                            className="rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 hover:-translate-y-1 transition-all duration-300 bg-white/5 border border-white/10 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 text-center text-white text-sm md:text-base">Frontend</h3>
                            <div className="flex flex-wrap justify-center gap-1 lg:gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <motion.span
                                        key={key}
                                        className="bg-blue-500/20 text-blue-300 py-1 px-2 md:px-3 rounded-full text-xs md:text-sm lg:text-base hover:bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-pointer"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: key * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        viewport={{ once: true }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div 
                            className="rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 hover:-translate-y-1 transition-all duration-300 bg-white/5 border border-white/10 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 text-center text-white text-sm md:text-base">Backend</h3>
                            <div className="flex flex-wrap justify-center gap-1 lg:gap-2">
                                {BackendSkills.map((tech, key) => (
                                    <motion.span
                                        key={key}
                                        className="bg-purple-500/20 text-purple-300 py-1 px-2 md:px-3 rounded-full text-xs md:text-sm lg:text-base hover:bg-purple-500/30 hover:shadow-[0_2px_8px_rgba(147,51,234,0.3)] transition-all duration-300 cursor-pointer"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: key * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        viewport={{ once: true }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 mt-4 lg:mt-8">
                        <motion.div 
                            className="rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 hover:-translate-y-1 transition-all duration-300 bg-white/5 border border-white/10 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 text-center text-white text-sm md:text-base">Languages</h3>
                            <div className="flex flex-wrap justify-center gap-1 lg:gap-2">
                                {programmingLanguages.map((tech, key) => (
                                    <motion.span
                                        key={key}
                                        className="bg-green-500/20 text-green-300 py-1 px-2 md:px-3 rounded-full text-xs md:text-sm lg:text-base hover:bg-green-500/30 hover:shadow-[0_2px_8px_rgba(34,197,94,0.3)] transition-all duration-300 cursor-pointer"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: key * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        viewport={{ once: true }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div 
                            className="rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 hover:-translate-y-1 transition-all duration-300 bg-white/5 border border-white/10 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 text-center text-white text-sm md:text-base">Frameworks</h3>
                            <div className="flex flex-wrap justify-center gap-1 lg:gap-2">
                                {frameworks.map((tech, key) => (
                                    <motion.span
                                        key={key}
                                        className="bg-indigo-500/20 text-indigo-300 py-1 px-2 md:px-3 rounded-full text-xs md:text-sm lg:text-base hover:bg-indigo-500/30 hover:shadow-[0_2px_8px_rgba(99,102,241,0.3)] transition-all duration-300 cursor-pointer"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: key * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        viewport={{ once: true }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 mt-4 lg:mt-8">
                        <motion.div 
                            className="p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg border border-white/10 backdrop-blur-lg hover:-translate-y-1 transition-all duration-300 bg-white/5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 text-center text-white text-sm md:text-base">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 md:space-y-2 text-xs md:text-sm lg:text-base">
                                <li>
                                    <strong>B.S. IT</strong> - IFM (2023-2026)
                                </li>
                                <li>Open U: Data Structures, Web Dev, Cloud...</li>
                            </ul>
                        </motion.div>

                        <motion.div 
                            className="p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg border border-white/10 backdrop-blur-lg hover:-translate-y-1 transition-all duration-300 bg-white/5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 text-center text-white text-sm md:text-base">Experience</h3>
                            <div className="space-y-2 md:space-y-3 text-gray-300 text-xs md:text-sm lg:text-base">
                                <div>
                                    <h4 className="font-semibold text-white">Backend Dev, TPC (2025-Present)</h4>
                                    <p className="text-sm md:text-base">Built and maintained backends.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Freelancer (2023-2024)</h4>
                                    <p className="text-sm md:text-base">Web dev for companies and businesses.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}