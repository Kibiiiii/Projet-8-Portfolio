import React from "react";
import Back from "../assets/images/cherry-back.png";
import "../styles/back-home.scss";

const BackHome = () => {
    return (
        <div className="back-home">
            <a href="/" className="back-to-home">
                <img 
                    className="cherry-back" 
                    src={Back} 
                    alt="Fleur" 
                    width="100" 
                    height="74" 
                    loading="lazy"
                />
            </a>
        </div>
    );
};

export default BackHome;
