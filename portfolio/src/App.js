import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import ContactForm from './components/Contact-Form.jsx';
import Error404 from "./pages/Error404.jsx";
import Home from "./pages/Home.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Projets from "./pages/Projets.jsx";
import Skills from "./pages/Skills.jsx";
import "./styles/app.scss";
import "./styles/home.scss";
import './styles/inserts.scss';
import "./styles/aboutme.scss";
import "./styles/projets.scss";
import "./styles/skills.scss";
import "./styles/404.scss";

const App = () => {
    return (
        <Router>
            <div>
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/aboutme" element={<AboutMe />} />
                        <Route path="/projets/:id" element={<Projets />} />
                        <Route path="/skills" element={<Skills />} /> 
                        <Route path="/contact" element={<ContactForm />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
