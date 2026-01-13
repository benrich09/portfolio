import React, { useState, useEffect } from "react";
import './index.css';
import { FaGithub, FaLinkedin, FaInstagram, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { motion } from "framer-motion";
import { Sparkles } from "./Components/Sparkles.jsx";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrollProgress, setScrollProgress] = useState(0);
    const [formStatus, setFormStatus] = useState({ type: '', message: '' });

    // Scroll progress indicator
    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            setScrollProgress(progress);
        };

        // Active section detection
        const handleScroll = () => {
            updateScrollProgress();
            
            const sections = ['home', 'about', 'projects', 'contact'];
            const current = sections.find(section => {
            const element = document.getElementById(section);

                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            
            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ type: 'loading', message: 'Sending...' });
        
        // Simulate form submission
        setTimeout(() => {
            setFormStatus({ type: 'success', message: 'Message sent successfully!' });
            e.target.reset();
        }, 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true }
    };

    const staggerContainer = {
        whileInView: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const navItems = [
        { name: 'Home', path: '#home' },
        { name: 'About', path: '#about' },
        { name: 'Projects', path: '#projects' },
        { name: 'Contact', path: '#contact' },
    ];

    const Databases = ["Mysql", "PostgreSQL","MariaDB","MongoDB"];
    const Webframeworks = ["React.js", "Next.js", "Nest.js" ,"Express.js", "Laravel", "Expo", "Spring boot"];
    const programmingLanguages = ["JavaScript", "Typescript", "PHP",  "Java","Python",];
    const API= ["Rest API", "WEBSOCKETS"];

    const skillsWithLevel = [
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "PHP", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "Java", level: 65 },
        {name: "Python", level: 50 },

    ];

    const projects = [
        {
            title: "Senotrams",
            description: "Art-tech web app for Artists.",
            tech: ["React", "Tailwind", ],
            link: "https://senotrams.vercel.app/",
        },
        {
            title: "E-Gadgets",
            description: "E-commerce site for electronic devices.",
            tech: ["React", "Tailwind", ],
            link: "https://morden-commerce.vercel.app/",
        },
        {
            title: "Mike 360",
            description: "Media and graphics web application.",
            tech: ["React", "Tailwind",],
            link: "https://mikemedia.vercel.app/",
        },
        {
            title: "Avionics",
            description: "Company for tech services web and mobile apps.",
            tech: ["React", "Tailwind", ],
            link: "https://avionics-two.vercel.app/",
        },
        {
            title: "EMS",
            description: "Employees Management System.",
            tech: ["React", "Tailwind","Nest.js", "Prisma" ],
            link: "https://ems-red-xi.vercel.app/",
        },
          {
            title: "Logistics Management",
            description: "Logistics and delivery management system.",
            tech: ["React", "Tailwind","Nest.js", "PostgreSQL","Prisma" ],
            link: "https://logistic-inky.vercel.app/",
        },
        {
            title: "Level up Safari",
            description: "Tourist Services ",
            tech: ["React", "Tailwind"],
            link: "https://level-up-safari.vercel.app/",
        },
    ];

    const socials = [
        { name: 'Email', url: 'mailto:benrich205@gmail.com ', icon: <SiGmail /> },
        { name: 'GitHub', url: 'https://github.com/benrich09', icon: <FaGithub /> },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/benson-richard-9110ab307/', icon: <FaLinkedin /> },
        { name: 'Instagram', url: 'https://www.instagram.com/avionics_tz?igsh=Njd3NTE4eTN1MXc5&utm_source=qr', icon: <FaInstagram /> },
    ];

    const footerLinks = [
        { name: 'Home', path: '#home' },
        { name: 'About', path: '#about' },
        { name: 'Projects', path: '#projects' },
        { name: 'Contact', path: '#contact' },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <div className="relative min-h-screen">  
            <Sparkles />

            {/* Scroll Progress Indicator */}
            <div className="fixed top-0 left-0 w-full h-1 z-50">
                <motion.div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                    style={{ width: `${scrollProgress}%` }}
                    transition={{ duration: 0.1 }}
                />
            </div>

            {/* Unified Background */}
            <div className="fixed inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
                <motion.div 
                    className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(7,37,112,0.6),transparent_50%)] animate-pulse"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                ></motion.div>
                <motion.div 
                    className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.4),transparent_50%)] animate-pulse"
                    style={{ animationDelay: '1000ms' }}
                    whileHover={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                ></motion.div>
                
                {/* Enhanced Floating Particles */}
                <div className="absolute inset-0">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full opacity-40 animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 10}s`,
                                animationDuration: `${5 + Math.random() * 10}s`,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 0.4, scale: 1 }}
                            transition={{ duration: 2, delay: i * 0.02 }}
                        >
                            <div className={`bg-${i % 2 === 0 ? 'blue-500' : 'purple-500'}`}></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Enhanced Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <motion.a 
                            href="#home" 
                            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="mr-1"></span>
                            BEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">RICH</span>
                        </motion.a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.name}
                                    href={item.path}
                                    className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                                        activeSection === item.name.toLowerCase() 
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                                    }`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ y: 0 }}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>

                        {/* Mobile Toggle */}
                        <div className="md:hidden flex items-center">
                            <motion.button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-300 hover:text-white p-2 relative w-8 h-8"
                                whileTap={{ scale: 0.9 }}
                            >
                                <span className={`absolute inset-0 block w-full h-0.5 bg-current transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`} style={{ top: '50%' }}></span>
                                <span className={`absolute inset-0 block w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} style={{ top: '50%' }}></span>
                                <span className={`absolute inset-0 block w-full h-0.5 bg-current transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`} style={{ top: '50%' }}></span>
                            </motion.button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <motion.div 
                        className={`md:hidden overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="pb-4 space-y-2">
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.name}
                                    href={item.path}
                                    className={`flex items-center p-3 rounded-lg transition-colors block w-full ${
                                        activeSection === item.name.toLowerCase() 
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                    whileHover={{ x: 5 }}
                                >
                                    <span className="font-medium">{item.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </nav>

            {/* Home Section */}
            <section id="home" className="h-screen flex items-center justify-center relative pt-16">
                <motion.div 
                    className="text-center z-10 px-4 relative w-full lg:px-8 xl:px-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Profile Image */}
                    <motion.div
                        className="relative mb-8"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">BR</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.h1 
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {Array.from("Hi, I'm Ben Rich").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                className={char === " " ? "inline-block w-4 lg:w-6" : "inline-block"}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p 
                        className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-md mx-auto leading-relaxed px-2 lg:max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Full-stack developer passionate about scalable web apps and exceptional UX.
                    </motion.p>

                    <motion.div 
                        className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3 px-2 lg:space-x-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href="#projects"
                            className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 md:py-3 md:px-6 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] inline-block glass-effect before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:to-white before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20 before:content-[''] before:pointer-events-none text-sm md:text-base"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="relative overflow-hidden border border-blue-500/50 text-blue-500 py-2 px-4 md:py-3 md:px-6 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10 inline-block glass-effect before:absolute before:inset-0 before:bg-blue-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-10 before:content-[''] before:pointer-events-none text-sm md:text-base"
                        >
                            Contact
                        </a>
                    </motion.div>
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 relative flex flex-col items-center justify-start">
                <motion.div 
                    className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2 
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        About Me
                    </motion.h2>

                    <motion.p 
                        className="text-gray-300 mb-12 text-center text-sm md:text-base lg:text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Passionate full-stack developer specializing in modern web technologies.
                    </motion.p>

                    {/* Skills Progress Section */}
                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div 
                            className="rounded-xl p-6 lg:p-8 border border-white/10 backdrop-blur-lg bg-white/5"
                            variants={fadeInUp}
                        >
                            <h3 className="text-xl font-bold mb-6 text-center text-white">Technical Skills</h3>
                            <div className="space-y-4">
                                {skillsWithLevel.map((skill, index) => (
                                    <motion.div key={index} className="mb-4" variants={letterVariants}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-white text-sm">{skill.name}</span>
                                            <span className="text-gray-400 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div 
                            className="rounded-xl p-6 lg:p-8 border border-white/10 backdrop-blur-lg bg-white/5"
                            variants={fadeInUp}
                        >
                            <h3 className="text-xl font-bold mb-6 text-center text-white">Technologies</h3>
                            <div className="space-y-6">

                                <div>
                                    <h4 className="text-blue-400 mb-3">Programming Languages</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {programmingLanguages.map((tech, key) => (
                                            <motion.span
                                                key={key}
                                                className="bg-blue-500/20 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/30 transition-all duration-300 cursor-pointer"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-blue-400 mb-3">Web Frameworks</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {Webframeworks.map((tech, key) => (
                                            <motion.span
                                                key={key}
                                                className="bg-blue-500/20 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/30 transition-all duration-300 cursor-pointer"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>

                                

                                </div>

                                <div>
                                    <h4 className="text-purple-400 mb-3">Databases</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {Databases.map((tech, key) => (
                                            <motion.span
                                                key={key}
                                                className="bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full text-sm hover:bg-purple-500/30 transition-all duration-300 cursor-pointer"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-purple-400 mb-3">API</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {API.map((tech, key) => (
                                            <motion.span
                                                key={key}
                                                className="bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full text-sm hover:bg-purple-500/30 transition-all duration-300 cursor-pointer"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>


                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Education & Experience */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <motion.div 
                            className="rounded-xl p-6 lg:p-8 border border-white/10 backdrop-blur-lg hover:-translate-y-1 transition-all duration-300 bg-white/5"
                            variants={letterVariants}
                        >
                            <motion.h3 
                                className="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-center text-white"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                Education
                            </motion.h3>
                            <motion.ul 
                                className="list-disc list-inside text-gray-300 space-y-2 md:space-y-3 text-sm md:text-base lg:text-lg"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <motion.li variants={letterVariants}>
                                    <strong>B.S. IT</strong> - IFM (2023-2026)
                                </motion.li>
                                <motion.li variants={letterVariants}>Open U: Data Structures, Web Dev, Cloud...</motion.li>
                            </motion.ul>
                        </motion.div>

                        <motion.div 
                            className="rounded-xl p-6 lg:p-8 border border-white/10 backdrop-blur-lg hover:-translate-y-1 transition-all duration-300 bg-white/5"
                            variants={letterVariants}
                        >
                            <motion.h3 
                                className="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-center text-white"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                Experience
                            </motion.h3>
                            <motion.div 
                                className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base lg:text-lg"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <motion.div variants={letterVariants}>
                                    <motion.h4 className="font-semibold text-white" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
                                        Backend Dev, TPC (2025-Oct 202)
                                    </motion.h4>
                                    <p className="text-sm md:text-base">Built and maintained backends.</p>
                                </motion.div>
                                <motion.div variants={letterVariants}>
                                    <motion.h4 className="font-semibold text-white" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: true }}>
                                        Freelancer (2023-2024)
                                    </motion.h4>
                                    <p className="text-sm md:text-base">Web dev for companies and businesses.</p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 relative flex flex-col items-center justify-start">
                <motion.div 
                    className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2 
                        className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 lg:mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Featured Projects
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="group relative rounded-xl p-6 lg:p-8 border border-white/10 backdrop-blur-xl bg-white/3 hover:bg-white/5 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden h-full"
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                    y: -10, 
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                {/* Project Image Placeholder */}
                                <div className="relative mb-4 overflow-hidden rounded-lg">
                                    <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                                        <div className="text-4xl font-bold text-white/30">{project.title.charAt(0)}</div>
                                    </div>
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="text-white text-lg font-semibold">View Details</div>
                                    </div>
                                </div>

                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 0.5 }}
                                    whileHover={{ opacity: 1 }}
                                />
                                <div className="relative z-10">
                                    <motion.h3 
                                        className="text-xl lg:text-2xl font-bold mb-3 text-white relative"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <motion.p 
                                        className="text-gray-400 mb-4 text-sm lg:text-base leading-relaxed relative"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        {project.description}
                                    </motion.p>
                                    <motion.div 
                                        className="flex flex-wrap gap-2 mb-6 relative"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ staggerChildren: 0.05, delayChildren: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        {project.tech.map((tech, key) => (
                                            <motion.span
                                                key={key}
                                                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 py-1 px-3 rounded-full text-xs hover:bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-pointer"
                                                variants={letterVariants}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                    <div className="flex justify-center items-center relative">
                                        <motion.a
                                            href={project.link}
                                            className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] inline-block before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:to-white before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20 before:content-[''] before:pointer-events-none text-sm lg:text-base"
                                            target={project.link !== "#" ? "_blank" : "_self"}
                                            rel={project.link !== "#" ? "noopener noreferrer" : ""}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.4 }}
                                            whileHover={{ scale: 1.05 }}
                                            viewport={{ once: true }}
                                        >

                                            View Project →
                                        </motion.a>


                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="py-20 relative flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8"
            >
                <motion.div 
                    className="w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative z-10"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.8, staggerChildren: 0.2 }}
                    viewport={{ once: false }}
                >
                    <motion.h2 
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight text-center"
                        variants={fadeInUp}
                    >
                        Get In Touch
                    </motion.h2>

                    {/* Social Links with Icons */}
                    <motion.div 
                        className="flex justify-center space-x-4 md:space-x-6 mb-8"
                        variants={staggerContainer}
                    >
                        {socials.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                                variants={letterVariants}
                                whileHover={{ scale: 1.15, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={social.name}
                            >
                                <span className="text-lg md:text-xl">{social.icon}</span>
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.form 
                        className="space-y-4 md:space-y-6 rounded-xl p-4 md:p-6 lg:p-8 border border-white/10 backdrop-blur-lg shadow-lg bg-white/5"
                        variants={fadeInUp}
                        onSubmit={handleFormSubmit}
                    >
                        {/* Form Status */}
                        {formStatus.message && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-3 rounded-lg text-center ${
                                    formStatus.type === 'success' 
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                }`}
                            >
                                {formStatus.message}
                            </motion.div>
                        )}

                        <motion.div 
                            className="w-full"
                            variants={letterVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 md:py-3 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-gradient-to-r focus:from-blue-500/10 focus:to-purple-500/10 hover:bg-white/15 text-sm md:text-base"
                                placeholder="Your Name"
                            />
                        </motion.div>

                        <motion.div 
                            className="relative"
                            variants={letterVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 md:py-3 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-gradient-to-r focus:from-blue-500/10 focus:to-purple-500/10 hover:bg-white/15 text-sm md:text-base"
                                placeholder="Email"
                            />
                        </motion.div>

                        <motion.div 
                            className="relative"
                            variants={letterVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 md:py-3 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-gradient-to-r focus:from-blue-500/10 focus:to-purple-500/10 hover:bg-white/15 resize-none text-sm md:text-base"
                                placeholder="Message..."
                            />
                        </motion.div>

                        <motion.button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:to-white before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20 before:content-[''] before:pointer-events-none text-sm md:text-base"
                            variants={letterVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {formStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
                        </motion.button>
                    </motion.form>
                </motion.div>
            </section>

            {/* Enhanced Footer */}
            <footer className="relative z-10 bg-black/80 backdrop-blur-xl border-t border-white/10 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Brand Section */}
                        <div className="md:col-span-2">
                            <motion.a 
                                href="#home" 
                                className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent inline-block mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                BEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">RICH</span>
                            </motion.a>
                            <p className="text-gray-400 mb-4 max-w-md">
                                Full-stack developer passionate about creating scalable web applications and exceptional user experiences.
                            </p>
                            <div className="flex space-x-4">
                                {socials.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                        whileHover={{ scale: 1.2, y: -2 }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={social.name}
                                    >
                                        <span className="text-lg">{social.icon}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                {footerLinks.map((link) => (
                                    <li key={link.name}>
                                        <motion.a
                                            href={link.path}
                                            className="text-gray-400 hover:text-white transition-colors duration-300"
                                            whileHover={{ x: 5 }}
                                        >
                                            {link.name}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Contact</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><SiGmail /> benrich205@gmail.com </li>
                                <li><FaMapMarkerAlt color="blue" />Dar es Salaam </li>
                                <li><FaCheckCircle color="green" />Available for freelance</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            &copy; {currentYear} Ben Rich. All rights reserved.
                        </p>
        
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;