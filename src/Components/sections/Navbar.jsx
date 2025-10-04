// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Keeping for potential, but using a for SPA

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '#home' },
        { name: 'About', path: '#about' },
        { name: 'Projects', path: '#projects' },
        { name: 'Contact', path: '#contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg relative overflow-hidden">
            {/* Subtle Background Overlay from Home */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(7,37,112,0.6),transparent_50%)] animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.4),transparent_50%)] animate-pulse delay-1000"></div>
                
                {/* Floating Particles (scaled down for navbar) */}
                <div className="absolute inset-0">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-0.5 h-0.5 bg-blue-500 rounded-full opacity-40 animate-float"
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
            
            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <div className="flex justify-between items-center h-16">
                    <a 
                        href="#home" 
                        className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-all duration-300"
                    >
                        BEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">RICH</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.path}
                                className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                            >
                                <span className="hidden sm:inline">{item.name}</span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2 relative w-6 h-6"
                        >
                            {/* Hamburger Icon */}
                            <span className={`absolute inset-0 block w-full h-0.5 bg-current transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-2'}`} style={{ top: '50%' }}></span>
                            <span className={`absolute inset-0 block w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`} style={{ top: '50%' }}></span>
                            <span className={`absolute inset-0 block w-full h-0.5 bg-current transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-2'}`} style={{ top: '50%' }}></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.path}
                                className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors block"
                                onClick={() => setIsOpen(false)}
                            >
                                <span>{item.name}</span>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}