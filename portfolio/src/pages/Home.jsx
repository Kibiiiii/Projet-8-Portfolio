import React from 'react';
import Banner from "../components/Banner-Home.jsx";
import Inserts from "../components/Inserts-Home.jsx"

function Home() {
    return (
        <div>
            <Banner title="Neary Casolari" />
            <Inserts title="À propos"/>
            <Inserts title="Mes Projets"/>
            <Inserts title="Mes Compétences"/>
        </div>
    );
}

export default Home;