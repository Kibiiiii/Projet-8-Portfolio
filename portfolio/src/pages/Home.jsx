import React from 'react';
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


function Home() {
    return (
        <>
            <div>
                <Banner title="Neary Casolari" />
            </div>
            <div className="inserts-container">
                <div className="insert-item">
                    <Inserts title="À propos" />
                    <ChibisKibi image={chibiKibi} />
                </div>
                <div className="insert-item">
                    <Inserts title="Mes Projets" />
                    <ChibisKibi image={chibiKibiHearts} />
                </div>
                <div className="insert-item">
                    <Inserts title="Mes Compétences" />
                    <ChibisKibi image={chibiKibiHey} /> 
                </div>
            </div>
            <div className="footer-links">
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




