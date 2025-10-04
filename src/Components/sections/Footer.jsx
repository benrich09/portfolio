// Footer.jsx
import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center text-sm text-gray-400 py-8 px-4 md:px-0 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg relative z-10 overflow-hidden">
            {/* Subtle Background Overlay from Home */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(7,37,112,0.6),transparent_50%)] animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.4),transparent_50%)] animate-pulse delay-1000"></div>
                
                {/* Floating Particles (scaled down for footer) */}
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

            <div className="max-w-5xl mx-auto relative z-10">
                <p>&copy; {currentYear} Ben Rich. All rights reserved.</p>
                <p className="mt-2 text-gray-500 text-xs">Crafted with Ben Rich using React & Tailwind</p>
            </div>
        </footer>
    );
}