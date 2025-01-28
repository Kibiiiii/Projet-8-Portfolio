import React from 'react';
import "../styles/404.scss";
import cherryBlossomIcon from "../assets/images/cherry-blossom.png";

const Error404 = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-text">Oupsy! La page que vous cherchez n'existe pas ^_^</p>
            <a href="/" className="not-found-link">
                <span>Retourner à la page d'accueil</span>
                <img 
                    src={cherryBlossomIcon} 
                    alt="Retourner à la page d'accueil" 
                    className="cherry-blossom-icon"
                />
            </a>
        </div>
    );
};

export default Error404;
