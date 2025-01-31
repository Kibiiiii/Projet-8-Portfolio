import React from "react";
import Datas from "../datas/aboutme.json";
import Frame from "../assets/images/frame-photo.webp";
import Me from "../assets/images/me.webp";
import BackHome from "../components/Back-Home";

const AboutMe = () => {
    const data = Datas.length > 0 ? Datas[0] : { title: "Titre par défaut", me: "Description par défaut" };

    return (
        <>
            <BackHome />
            <div>
                <h1 className="about-me-title">{data.title}</h1>
                <div className="about-me-container">
                    <div className="me-frame">
                        <img className="me" src={Me} alt="Moi" />
                        <img className="about-me-frame" src={Frame} alt="Cadre" />
                    </div>
                    <p className="about-me-text">{data.me}</p>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
