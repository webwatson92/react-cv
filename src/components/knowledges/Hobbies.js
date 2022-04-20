import React from 'react';

const Hobbies = (props) => {
    return (
        <div className="hobbies">
            <h3>Intérêt</h3>
            <ul>
                    <li className="hobby"><i className="fas fa-running"></i><span>Course à pied</span></li>
                    <li className="hobby"><i className="fas fa-hiking"></i>Randonnées<span></span></li>
                    <li className="hobby"><i className="fas fa-seedling"></i>Permaculture<span></span></li>
                    <li className="hobby"><i className="fas fa-bitcoin"></i>Crypto-monnaie<span></span></li>
                    <li className="hobby"><i className="fas fa-rocket"></i>Espace<span></span></li>
            </ul>
        </div>
    );
};

export default Hobbies;