import React from 'react';
import bannerImage from '../assets/images/banner-accueil.jpg';

function BannerHome({ title }) {
    return (
        <div className="banner-accueil">
            <img src={bannerImage} alt="Kibi et Maeve pique nique" className="banner-image" />
            {title && <h1 className="banner-title">{title}</h1>}
        </div>
    );
}

export default BannerHome;