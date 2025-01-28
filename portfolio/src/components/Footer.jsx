import React from 'react';

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

export default FooterLink;

