import React from "react";

export default function About () {
    const frontendSkills = ["React", "Typescript", "BootstrapCSS", "TailwindCSS"];
    const BackendSkills = ["Express.js", "Node.js", "Python", "PHP", "Java", "Mysql", "MongoDB"];
    const programmingLanguages = ["JavaScript", "Python", "PHP", "Java", "Typescript", "C#"];
    const frameworks = ["React", "Laravel", "Next.js", "Node.js", "React-native"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
            {/* Motion Background Layer */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 animate-pulse"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
            </div>

            <div className="max-w-3xl mx-auto px-4 relative z-10">

                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight text-center">
                        About Me
                    </h2>
             

                
                    <div className="glass rounded-xl p-6 sm:p-8 border border-white/10 backdrop-blur-lg hover:-translate-y-1 transition-all duration-300 shadow-lg">
                        <p className="text-gray-300 mb-6 text-center">
                            Passionate developer with expertise in building scalable web applications and creating innovative solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-xl font-bold mb-4 text-center">Frontend</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-xl font-bold mb-4 text-center">Backend</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {BackendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
                            <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-xl font-bold mb-4 text-center">Programming Languages</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {programmingLanguages.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-xl font-bold mb-4 text-center">Frameworks</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {frameworks.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
                            <div className="p-4 sm:p-6 rounded-xl border border-white/10 backdrop-blur-lg hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-xl font-bold mb-4 text-center">Education</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                                    <li>
                                        <strong>B.S. in Information Technology</strong> - Institute of Finance Management (2023 - 2026)
                                    </li>
                                    <li>Open University: Data Structures, Web Development, Cloud Computing...</li>
                                </ul>
                            </div>

                            <div className="p-4 sm:p-6 rounded-xl border border-white/10 backdrop-blur-lg hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-xl font-bold mb-4 text-center">Work Experience</h3>
                                <div className="space-y-4 text-gray-300 text-sm">
                                    <div>
                                        <h4 className="font-semibold">Backend Developer at Tanzania Posts Corporation (2025 - Present)</h4>
                                        <p>Developed and maintained backends.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Online Freelancer (2023 - 2024)</h4>
                                        <p>Developing websites for various companies, organizations, and business holders.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
            </div>
        </section>
    );
};