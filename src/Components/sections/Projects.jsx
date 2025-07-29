import {RevealOnScroll} from "../RevealOnScroll.jsx";

export const Projects = () => {
    return(
        <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>

            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-2xl sm:text-3xlfont-bold mb-8 bg-gradient-to-r from-blue-500
                         to-purple-600 bg-clip-text text-transparent leading-right">
                    {" "}Featured projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                  hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2"> Senotrams</h3>
                        <p className="text-gray-400 mb-4">
                            Web Application for the company dealing with Technology related to
                            arts that enable people to interact and support each other in art
                            in the terms of technology
                        </p>
                        <div>
                            {["React", "Node.js", "MongoDB", "Docker"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                           hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                >
                                {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-center items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                {" "} View Project {" "}
                            </a>
                        </div>

                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                  hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">E-Gadgets</h3>
                        <p className="text-gray-400 mb-4">
                           This is an E-commerce website used for making orders for Electronic devices
                            Such as Phones, Computers and other daily usable devices
                        </p>
                        <div>
                            {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                           hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                >
                                {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-center items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                {" "} View Project {" "}
                            </a>
                        </div>

                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                  hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Mike 360</h3>
                        <p className="text-gray-400 mb-4">
                            This is a company dealing with the media issues and also graphics and design issues that
                            reach people world wide. It is a Web application which it do all the activites both media and
                            graphic issues.
                        </p>
                        <div>
                            {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                           hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                >
                                {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-center items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                {" "} View Project {" "}
                            </a>
                        </div>

                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                  hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2"> Avionics</h3>
                        <p className="text-gray-300 mb-4">
                            Web Application that deals most with the provision of Technological services such as
                            Websites, Web-Application and Mobile Application
                        </p>
                        <div>
                            {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                           hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                >
                                {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-center items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                {" "} View Project {" "}
                            </a>
                        </div>

                    </div>

                </div>

            </div>

        </RevealOnScroll>
        </section>
    );
};