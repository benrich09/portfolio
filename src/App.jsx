import React from "react";
import './index.css';
import { Navbar } from "./Components/sections/Navbar.jsx";
import { Home } from "./Components/Home.jsx";
import { About } from "./Components/About.jsx";
import { Projects } from "./Components/Projects.jsx";
import { Contact } from "./Components/Contact.jsx";
import Footer from "./Components/sections/Footer.jsx";

function App() {
    
    return (
        <div className="relative">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;