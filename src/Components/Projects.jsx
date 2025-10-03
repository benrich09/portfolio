import React from "react";

export default function Projects () {
    const projects = [
        {
            title: "Senotrams",
            description: "Web Application for the company dealing with Technology related to arts that enable people to interact and support each other in art in the terms of technology",
            tech: ["React", "Node.js", "MongoDB", "Docker"],
            link: "#",
        },
        {
            title: "E-Gadgets",
            description: "This is an E-commerce website used for making orders for Electronic devices such as Phones, Computers and other daily usable devices",
            tech: ["React", "Node.js", "AWS", "Docker"],
            link: "#",
        },
        {
            title: "Mike 360",
            description: "This is a company dealing with the media issues and also graphics and design issues that reach people world wide. It is a Web application which it do all the activites both media and graphic issues.",
            tech: ["React", "Node.js", "AWS", "Docker"],
            link: "https://mikemedia.vercel.app/",
        },
        {
            title: "Avionics",
            description: "Web Application that deals most with the provision of Technological services such as Websites, Web-Application and Mobile Application",
            tech: ["React", "Node.js", "AWS", "Docker"],
            link: "#",
        },
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
            {/* Motion Background Layer */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 relative z-10 w-full">
               
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight text-center">
                        Featured Projects
                    </h2>
              

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
        
                            <div className="p-6 rounded-xl border border-white/10 backdrop-blur-lg hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all duration-300 glass">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-center items-center">
                                    <a
                                        href={project.link}
                                        className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm"
                                        target={project.link !== "#" ? "_blank" : "_self"}
                                        rel={project.link !== "#" ? "noopener noreferrer" : ""}
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                    
                    ))}
                </div>
            </div>
        </section>
    );
};