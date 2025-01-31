import React from "react";
import BackHome from "../components/Back-Home";
import logoHtmlCss from "../assets/images/competences/html-css.jpg";
import logoSass from "../assets/images/competences/sass.jpg";
import logoMongoDb from "../assets/images/competences/mongodb.jpg";
import logoJs from "../assets/images/competences/js.jpg";
import logoGit from "../assets/images/competences/git.jpg";
import logoGitHub from "../assets/images/competences/github.jpg";
import logoNode from "../assets/images/competences/node.jpg";
import logoExpress from "../assets/images/competences/express.jpg";
import logoReact from "../assets/images/competences/react.jpg";
import logoPhotoshop from "../assets/images/competences/photoshop.jpg";
import logoTrello from "../assets/images/competences/trello.jpg";
import logoGitHub2 from "../assets/images/competences/github2.jpg";

const logos = [
    logoHtmlCss, logoSass, logoMongoDb, logoJs, logoGit, 
    logoGitHub, logoNode, logoExpress, logoReact, logoPhotoshop, 
    logoTrello, logoGitHub2
];

const Skills = () => {
    return (
        <>
            <BackHome />
            <div className="skills">
                <div className="skills-track">
                    {logos.concat(logos).map((logo, index) => ( // Double le contenu pour un scroll fluide
                        <div className="skills-item" key={index}>
                            <img src={logo} alt="Skill logo" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Skills;
