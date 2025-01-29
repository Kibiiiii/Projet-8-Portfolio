import React from "react";
import Datas from "../datas/aboutme.json";
import Frame from "../assets/images/frame-photo.png";

const AboutMe = () => {
    const data = Datas[0];

    return (
        <div>
            <h1>{data.title}</h1>
            <div>
                <img src={Frame} alt="Cadre" />
                <h2>{data.id}</h2>
            </div>
            <p>{data.me}</p>
        </div>
    );
};

export default AboutMe;