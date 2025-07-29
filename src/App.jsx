import {useState} from "react";
import './App.css';
import './index.css';
import {About} from "./Components/sections/About.jsx";
import {Navbar} from "./Components/Navbar.jsx";
import {MobileMenu} from "./Components/MobileMenu.jsx";
import {Home} from "./Components/sections/Home.jsx";
import {LoadingScreen} from "./Components/LoadingScreen.jsx";
import {Projects} from "./Components/sections/Projects.jsx";
import {Contact} from "./Components/sections/Contact.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>} {" "}

            <div className={`min-h-screen transition-opacity duration-700
       ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>

                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

                <Home/>

                <About />

                <Projects />

                <Contact/>

                <Footer/>


            </div>

        </>
    )
}

export default App
