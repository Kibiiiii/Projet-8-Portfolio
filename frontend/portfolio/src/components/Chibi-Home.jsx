import React from 'react';

function ChibisKibi({ image }) {
    return (
        <div className="chibi-kibi">
            <img 
                src={image} 
                alt="Kibi" 
                width="140" 
                height="175" 
                loading="lazy"  // Ajout du lazy loading
            />
        </div>
    );
}

export default ChibisKibi;

