import React from "react";
import Datas from "../datas/aboutme.json";
import Frame from "../assets/images/frame-photo.png";
import Me from "../assets/images/me.JPG";

const AboutMe = () => {
    const data = Datas[0];

    return (
        <div>
            <h1 className="about-me-title">{data.title}</h1>
            <div className="about-me-container">
                <div className="me-frame">
                    <img className="me"src={Me} alt="Moi" />
                    <img className="about-me-frame"src={Frame} alt="Cadre" />
                </div>
            <p className="about-me-text">{data.me}</p>
            </div>
        </div>
    );
};

export default AboutMe;