import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "Senotrams",
            description: "Art-tech web app for interaction and support.",
            tech: ["React", "Node.js", "MongoDB", "Docker"],
            link: "#",
        },
        {
            title: "E-Gadgets",
            description: "E-commerce site for electronic devices.",
            tech: ["React", "Node.js", "AWS", "Docker"],
            link: "#",
        },
        {
            title: "Mike 360",
            description: "Media and graphics web application.",
            tech: ["React", "Node.js", "AWS", "Docker"],
            link: "https://mikemedia.vercel.app/",
        },
        {
            title: "Avionics",
            description: "Tech services for web and mobile apps.",
            tech: ["React", "Node.js", "AWS", "Docker"],
            link: "#",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <section id="projects" className="h-screen flex items-center justify-center relative overflow-hidden">
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
                className="w-full max-w-4xl mx-auto px-2 relative z-10 overflow-y-auto h-full"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight text-center">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="p-4 rounded-lg border border-white/10 backdrop-blur-lg bg-white/5 hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-bold mb-2 text-white text-sm">{project.title}</h3>
                            <p className="text-gray-400 mb-3 text-xs leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-1 mb-3">
                                {project.tech.map((tech, key) => (
                                    <motion.span
                                        key={key}
                                        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 py-1 px-2 rounded-full text-xs hover:bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-pointer"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: key * 0.05 }}
                                        whileHover={{ scale: 1.05 }}
                                        viewport={{ once: true }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="flex justify-center items-center">
                                <a
                                    href={project.link}
                                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-xs underline hover:shadow-[0_0_10px_rgba(59,130,246,0.4)]"
                                    target={project.link !== "#" ? "_blank" : "_self"}
                                    rel={project.link !== "#" ? "noopener noreferrer" : ""}
                                >
                                    View Project
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}