import React from 'react';

function FooterLink({ image, link }) {
    if (!image) {
        console.log("Aucune image fournie à FooterLink !");
        return null; // N'affiche rien si l'image est manquante
    }

    return (
        <div className="footer-link">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt="link" />
            </a>
        </div>
    );
}

export default FooterLink;
