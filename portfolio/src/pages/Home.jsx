import React from 'react';
import { Link } from 'react-router-dom';
import Banner from "../components/Banner-Home.jsx";
import Inserts from "../components/Inserts-Home.jsx";
import ChibisKibi from "../components/Chibi-Home.jsx";
import chibiKibi from "../assets/images/chibi-kibi.webp";
import chibiKibiHearts from "../assets/images/chibi-kibi-hearts.webp";
import chibiKibiHey from "../assets/images/chibi-kibi-hey.webp";

function Home() {
    return (
        <>
            {/* Vidéo en arrière-plan */}
            <div className="video-background">
                <video
                    autoPlay
                    loop
                    muted
                    className="background-video"
                >
                    <source src="/videos/background-video.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Contenu principal */}
            <div>
                <Banner title="Neary Casolari" />
            </div>
            <div className="inserts-container">
                <div className="insert-item">
                    <Link to="/aboutme" className="about-me-link">
                        <Inserts title="À propos" />
                    </Link>
                    <ChibisKibi image={chibiKibi} />
                </div>
                <div className="insert-item">
                    <Link to="/projets/:id" className="projets-link">
                        <Inserts title="Mes Projets" />
                    </Link>
                    <ChibisKibi image={chibiKibiHearts} />
                </div>
                <div className="insert-item">
                    <Link to="/skills" className="skills-link">
                        <Inserts title="Mes Compétences" />
                    </Link>
                    <ChibisKibi image={chibiKibiHey} />
                </div>
            </div>
        </>
    );
}

export default Home;








