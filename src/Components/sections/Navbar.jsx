import { useEffect } from "react";
import React from "react";

export default function Navbar({ menuOpen, setMenuOpen })  {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <div className="fixed top-0 w-full z-50 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white hover:text-blue-400 transition-colors">
                        BEN <span className="text-blue-500">RICH</span>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <div
                        className="md:hidden flex flex-col justify-between w-8 h-6 cursor-pointer z-50"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        <span className={`block h-1 w-full bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block h-1 w-full bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block h-1 w-full bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
                            Projects
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden fixed top-16 left-0 w-full h-screen bg-[rgba(10, 10, 10, 0.95)] backdrop-blur-lg z-40 transform transition-transform duration-300 ${
                        menuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                        <a
                            href="#home"
                            className="text-gray-300 text-xl hover:text-white transition-colors duration-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-gray-300 text-xl hover:text-white transition-colors duration-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="text-gray-300 text-xl hover:text-white transition-colors duration-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-300 text-xl hover:text-white transition-colors duration-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};