
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import "./styles/globals.css"
//import "./App.css"
import "./Components/Home/styles/Navbar.css"
//import "./Components/Home/styles/Navbar.scss"
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/ContactUs/Contact";
import Journey from "./Components/Journey/Journey";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Career from "./Components/Careers/Career"
import Infrastructure from "./Components/Infrastructre/Infrastructure";
import Navbar from "./Components/Navbar/Navbar"

function App() {

    return (
        <Router>
            {/* Navbar on all pages */}
            <Navbar/>
            <div> {/* push content below sticky navbar */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/journey" element={<Journey />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/careers" element={<Career/>} />

                    {/* Services routes */}
                    <Route path="/services/*" element={<Services />} />
                    <Route path="/infrastructure" element={<Infrastructure/>} />

                </Routes>
            </div>
            
        </Router>
    );

  
}

export default App;