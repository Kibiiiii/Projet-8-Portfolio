import React from 'react';
import { Link } from 'react-router-dom';
import Banner from "../components/Banner-Home.jsx";
import Inserts from "../components/Inserts-Home.jsx";
import ChibisKibi from '../components/Chibi-Home.jsx';
import chibiKibi from '../assets/images/chibi-kibi.png';
import chibiKibiHearts from '../assets/images/chibi-kibi-hearts.png';
import chibiKibiHey from '../assets/images/chibi-kibi-hey.png';
import FooterLink from '../components/Footer.jsx';
import footerLinkInstagram from '../assets/images/instagram.png';
import footerLinkLinkedin from '../assets/images/linkedin.png';
import footerLinkGithub from '../assets/images/github.png';
import footerLinkCv from '../assets/images/cv.png';
import footerLinkContact from '../assets/images/contact.png';

function Home() {
    return (
        <>
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
            <div className="footer-links">
                <div className="link-item">
                    <FooterLink 
                        image={footerLinkCv} 
                        link="/cv.pdf"
                    />
                </div>
                <div className="link-item">
                    <FooterLink 
                        image={footerLinkContact} 
                        link="/contact"
                    />
                </div>
                <div className="link-item">
                    <FooterLink 
                        image={footerLinkInstagram} 
                        link="https://www.instagram.com/kibishiii_/?hl=fr" 
                    />
                </div>
                <div className="link-item">
                    <FooterLink 
                        image={footerLinkLinkedin} 
                        link="https://www.linkedin.com/in/neary-nc-9bb7a5297/" 
                    />
                </div>
                <div className="link-item">
                    <FooterLink 
                        image={footerLinkGithub} 
                        link="https://github.com/Kibiiiii" 
                    />
                </div>
            </div>
        </>
    );
}

export default Home;






