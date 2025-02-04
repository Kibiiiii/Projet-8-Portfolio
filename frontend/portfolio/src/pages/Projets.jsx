import React, { useState } from "react";
import Datas from "../datas/projets.json";
import BackHome from "../components/Back-Home";
import "../styles/modale-projets.scss";


const GalleryProjets = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <BackHome />
            <div>
                <h1 className="projets-title">Mes Projets</h1>
                <div className="gallery">
                    {Datas.map((item) => (
                        <div
                            key={item.id}
                            className="gallery-item"
                            onClick={() => openModal(item)}
                        >
                            <p className="gallery-title">{item.title}</p>
                            <img
                                src={item.cover}
                                alt={item.title}
                                className="gallery-image"
                            />
                        </div>
                    ))}
                </div>

                {/* Modale */}
                {selectedProject && (
                    <div className="modal" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close" onClick={closeModal}>
                                &times;
                            </span>
                            <h2 className="modal-title">{selectedProject.title}</h2>
                            <p className="description">{selectedProject.description}</p>
                            <ul className="objectifs">
                {selectedProject.objectifs.split(", ").map((objectif, index) => (
                    <li key={index}>{objectif}</li>
                ))}
            </ul>
                        </div>
                    </div>
                )}
            </div>
            </>
    );
};

export default GalleryProjets;