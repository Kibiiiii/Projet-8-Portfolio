import React, { useState } from "react";
import footerLinkInstagram from "../assets/images/instagram.webp";
import footerLinkLinkedin from "../assets/images/linkedin.webp";
import footerLinkGithub from "../assets/images/github.webp";
import footerLinkCv from "../assets/images/cv.webp";
import footerLinkContact from "../assets/images/contact.webp";
import Form from "../pages/Form";


const FooterLink = ({ image, link, onClick }) => {
    if (!image) {
        return null;
    }

    return (
        <div className="footer-link">
            <a href={link} onClick={onClick} target="_blank" rel="noopener noreferrer">
                <img 
                    src={image} 
                    alt="footer link" 
                    width="140" 
                    height="104" 
                    loading="lazy"  // Ajout du lazy loading
                />
            </a>
        </div>
    );
};

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (e) => {
        e.preventDefault();
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="footer-links">
            <div className="link-item">
                <FooterLink image={footerLinkCv} link="/cv.pdf" />
            </div>
            <div className="link-item">
                <FooterLink image={footerLinkContact} link="#" onClick={toggleModal} />
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

            {isModalOpen && <Form onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default Footer;
