import React from 'react';

function FooterLink({ image }) {
    if (!image) {
        console.log("Aucune image fournie à FooterLink !");
        return null; // N'affiche rien si l'image est manquante
    }

    return (
        <div className="footer-link">
            <img src={image} alt="link" />
        </div>
    );
}


export default FooterLink;