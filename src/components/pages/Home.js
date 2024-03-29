import React from 'react';
import Navigation from '../Navigation';

const Home = (props) => {
    return (
        <div className='home'>
            <Navigation />
            <div className='homeContent'>
                <div className='content'>
                    <h1>El Hadj Scratch</h1>
                    <h2>Développeur Front-end</h2>
                    <div className='pdf'>
                        <a href="./media/CV.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;