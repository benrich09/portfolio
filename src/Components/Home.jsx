import React from "react";

export default function Home () {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Motion Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(7,37,112,0.6),transparent_50%)] animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.4),transparent_50%)] animate-pulse delay-1000"></div>
                {/* Floating Particles */}
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

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                .animate-float {
                    animation: float linear infinite;
                }
            `}</style>

            <div className="text-center z-10 px-4 relative">
          
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                        Hi, I am Ben Rich
                    </h1>
        
                    <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                        I'm a full-stack developer who loves crafting clean scalable web applications. My goal is to build solutions that offer both exceptional performance and a delightful user experience.
                    </p>
  
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href="#projects"
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] inline-block"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/10 inline-block"
                        >
                            Contact me
                        </a>
                    </div>
              
            </div>
        </section>
    );
};