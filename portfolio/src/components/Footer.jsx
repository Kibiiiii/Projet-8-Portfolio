import React from 'react';
import footerLinkInstagram from "../assets/images/instagram.webp";
import footerLinkLinkedin from "../assets/images/linkedin.webp";
import footerLinkGithub from "../assets/images/github.webp";
import footerLinkCv from "../assets/images/cv.webp";
import footerLinkContact from "../assets/images/contact.webp";

const FooterLink = ({ image, link }) => {
    if (!image) {
        console.log();
        return null;
    }

    return (
        <div className="footer-link">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt="footer link" />
            </a>
        </div>
    );
};

const Footer = () => {
    return (
        <div className="footer-links">
            <div className="link-item">
                <FooterLink image={footerLinkCv} link="/cv.pdf" />
            </div>
            <div className="link-item">
                <FooterLink image={footerLinkContact} link="#" />
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
    );
};

export default Footer;




