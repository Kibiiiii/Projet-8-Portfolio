import React from "react";
import { Link } from "react-router-dom";
import Datas from "../datas/projets.json";

const GalleryProjets = () => {
    return (
        <div className="gallery">
            {Datas.map((item) => (
                <div key={item.id} className="gallery-item">
                    <p className="gallery-title">{item.title}</p>
                    <Link to={`/projets/:id/${item.id}`}>
                        <img
                            src={item.cover}
                            alt={item.title}
                            className="gallery-image"
                            onClick={() => console.log("Image clicked!")}
                        />
                </Link>
                </div>
            ))}
        </div>
    );
};

export default GalleryProjets;