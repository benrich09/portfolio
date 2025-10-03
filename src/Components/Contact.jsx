import React from "react";

export default function Contact (){
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center px-4 py-10 sm:py-20 relative overflow-hidden"
        >
            {/* Motion Background Layer */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 animate-pulse"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
            </div>

            <div className="w-full max-w-md mx-auto relative z-10">
               \
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight text-center">
                        Get In Touch
                    </h2>
                
                    <form className="space-y-6 glass rounded-xl p-6 border border-white/10 backdrop-blur-lg shadow-lg">
                        <div className="w-full">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name..."
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 resize-none"
                                placeholder="Your Message..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                        >
                            Send Message
                        </button>
                    </form>
            </div>
        </section>
    );
};