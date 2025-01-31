import React from 'react';
import '../styles/inserts.scss'
import insertsImage from '../assets/images/inserts.webp';

function InsertsHome({ title }) {
    return (
        <div className="inserts-home">
            <img src={insertsImage} alt="Encart rose pastel avec fleur de cerisier" className="inserts-home" />
            {title && <h1 className="insert-title">{title}</h1>}
        </div>
    );
}

export default InsertsHome;