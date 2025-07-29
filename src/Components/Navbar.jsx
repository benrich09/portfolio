import {useEffect,} from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])

    return (
        <div className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        {" "} BEN <span className="text-blue-500"> RICH </span> {" "}
                    </a>

                    <div
                        className="md:hidden flex flex-col justify-between w-8 h-6 cursor-pointer z-50"
                        onClick={() => setMenuOpen(prev => !prev)}
                    >
                        <span className="block h-1 w-full bg-white rounded"></span>
                        <span className="block h-1 w-full bg-white rounded"></span>
                        <span className="block h-1 w-full bg-white rounded"></span>
                    </div>


                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hove:text-white transition-colors">
                            {" "} Home
                        </a>

                        <a href="#about" className="text-gray-300 hove:text-white transition-colors">
                            {" "} About {" "}
                        </a>

                        <a href="#projects" className="text-gray-300 hove:text-white transition-colors">
                            {" "} Project {" "}
                        </a>

                        <a href="#contact" className="text-gray-300 hove:text-white transition-colors">
                            {" "} Contact {" "}
                        </a>

                    </div>

                </div>
            </div>
        </div>
    );
};