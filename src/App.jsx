import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer"
import Contact from "./Components/Contact/Contact";
import Resume from "./Components/Resume/Resume";
import './App.css'


const App = () => {
    
    return (
        <div className="nrp-portfolio">
            <Navbar />
            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
            <Footer/>
        </div>

    )
}


export default App