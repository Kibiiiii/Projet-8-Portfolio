import React from 'react';
import Banner from "../components/Banner-Home.jsx";
import Inserts from "../components/Inserts-Home.jsx"

function Home() {
    return (
        <div>
            <Banner title="Neary Casolari" />
            <Inserts title="A Propos"/>
            <Inserts title="Mes Projets"/>
            <Inserts title="Mes Competences"/>
        </div>
    );
}

export default Home;