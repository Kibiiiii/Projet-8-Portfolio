import React from 'react';
import '../styles/home.scss';
import bannerAvif from '../assets/images/banner-accueil.avif';
import bannerWebp from '../assets/images/banner-accueil.webp';
import bannerPng from '../assets/images/banner-accueil.png';

function BannerHome({ title }) {
    return (
        <div className="banner-accueil">
            <picture>
                <source srcSet={bannerAvif} type="image/avif" />
                <source srcSet={bannerWebp} type="image/webp" />
                <img 
                    src={bannerPng} 
                    alt="Kibi et Maeve pique-nique" 
                    className="banner-image" 
                    width="1512" 
                    height="400" 
                />
            </picture>
            {title && <h1 className="banner-title">{title}</h1>}
        </div>
    );
}

export default BannerHome;

