import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navigation from "./components/Navigation.jsx";
// import Footer from "./components/Footer.jsx";
// import Error404 from "./pages/Error404.jsx";
import Home from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
// import House from "./pages/House.jsx";
import "./styles/app.scss";
import "./styles/home.scss";
import './styles/inserts.scss';
// import "./styles/about.scss";

const App = () => {
    return (
        <Router>
            <div>
                <div className="main-content">
                {/* <Navigation /> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/about" element={<About />} /> */}
                        {/* <Route path="/house/:id" element={<House />} /> */}
                        {/* <Route path="*" element={<Error404 />} /> */}
                    </Routes>
                </div>
                {/* <Footer /> */}
            </div>
        </Router>
    );
};

export default App;
