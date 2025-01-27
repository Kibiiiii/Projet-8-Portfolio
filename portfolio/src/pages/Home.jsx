import React from 'react';
import Banner from "../components/Banner-Home.jsx";
import Inserts from "../components/Inserts-Home.jsx";
import ChibisKibi from '../components/Chibi-Home.jsx';
import chibiKibi from '../assets/images/chibi-kibi.png';
import chibiKibiHearts from '../assets/images/chibi-kibi-hearts.png';
import chibiKibiHey from '../assets/images/chibi-kibi-hey.png';

function Home() {
    return (
        <>
            <div>
                <Banner title="Neary Casolari" />
            </div>
            <div className="inserts-container">
                <div className="insert-item">
                    <Inserts title="À propos" />
                    <ChibisKibi image={chibiKibi} /> {/* Passer l'image chibiKibi */}
                </div>
                <div className="insert-item">
                    <Inserts title="Mes Projets" />
                    <ChibisKibi image={chibiKibiHearts} /> {/* Passer l'image chibiKibiHearts */}
                </div>
                <div className="insert-item">
                    <Inserts title="Mes Compétences" />
                    <ChibisKibi image={chibiKibiHey} /> {/* Passer l'image chibiKibiHey */}
                </div>
            </div>
        </>
    );
}

export default Home;



