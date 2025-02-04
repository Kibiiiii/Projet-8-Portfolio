import React from "react";
import Back from "../assets/images/cherry-back.png";
import "../styles/back-home.scss";

const BackHome = () => {
    return (
        <>
            <div className="back-home">
                <a href="/" className="back-to-home">
                <img className="cherry-back" src={Back} alt="Fleur" />
                </a>
            </div>
        </>
    );
};

export default BackHome;