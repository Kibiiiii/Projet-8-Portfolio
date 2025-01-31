import React from "react";
import BackHome from "../components/Back-Home";
import logoHtmlCss from "../assets/images/competences/html-css.png";
import logoSass from "../assets/images/competences/sass.png";
import logoMongoDb from "../assets/images/competences/mongodb.png";
import logoJs from "../assets/images/competences/js.png";
import logoGit from "../assets/images/competences/git.png";
import logoGitHub from "../assets/images/competences/github.png";
import logoNode from "../assets/images/competences/node.png";
import logoExpress from "../assets/images/competences/express.png";
import logoReact from "../assets/images/competences/react.png";
import logoPhotoshop from "../assets/images/competences/photoshop.png";
import logoTrello from "../assets/images/competences/trello.png";
import logoGitCat from "../assets/images/competences/gitcat.png";

const logos = [
    logoHtmlCss, logoSass, logoMongoDb, logoJs, logoGit, 
    logoGitHub, logoNode, logoExpress, logoReact, logoPhotoshop, 
    logoTrello, logoGitCat
];

const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos,...logos, ...logos, ...logos,...logos, ...logos, ...logos,...logos, ...logos, ...logos,...logos, ...logos, ...logos,...logos, ...logos, ...logos];

const Skills = () => {
    return (
        <>
            <BackHome />
            <div className="skills">
            <h1 className="skills-title">Mes Compétences</h1>
                <div className="skills-track">
                    {repeatedLogos.map((logo, index) => (
                        <div className="skills-item" key={`line1-${index}`}>
                            <img src={logo} alt="Skill logo" />
                        </div>
                    ))}
                </div>

                <div className="skills-track-reverse">
                    {repeatedLogos.map((logo, index) => (
                        <div className="skills-item" key={`line2-${index}`}>
                            <img src={logo} alt="Skill logo" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Skills;
