import React from 'react';
import '../styles/chibi.scss';
import chibiKibi from '../assets/images/chibi-kibi.png';
import chibiKibiHearts from '../assets/images/chibi-kibi-hearts.png';
import chibiKibiHey from '../assets/images/chibi-kibi-hey.png';

function ChibisKibi() {
    return (
        <div className="chibis-container">
            <div className="chibi-kibi">
                <img src={chibiKibi} alt="Kibi" className="chibi-kibi-image" />
            </div>
            <div className="chibi-kibi-hearts">
                <img src={chibiKibiHearts} alt="Kibi Hearts" className="chibi-kibi-hearts-image" />
            </div>
            <div className="chibi-kibi-hey">
                <img src={chibiKibiHey} alt="Kibi Hey" className="chibi-kibi-hey-image" />
            </div>
        </div>
    );
}

export default ChibisKibi;
