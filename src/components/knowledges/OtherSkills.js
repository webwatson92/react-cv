import React from 'react';

const OtherSkills = (props) => {
    return (
        
        <div className="otherSkills">
           <h3>Autres compétences</h3>
           <div className='list'>
                <ul>
                    <li><i className="fas fa-check-square"></i>Anglais courant</li>
                    <li><i className="fas fa-check-square"></i>Github</li>
                    <li><i className="fas fa-check-square"></i>SEO/SEA</li>
                    <li><i className="fas fa-check-square"></i>Méthode aagiles</li>
                </ul>
                <ul>
                    <li><i className="fas fa-check-square"></i>Figma</li>
                    <li><i className="fas fa-check-square"></i>Design</li>
                    <li><i className="fas fa-check-square"></i>Photoshop</li>
                    <li><i className="fas fa-check-square"></i>Montage vidéo</li>
                </ul>
           </div>
        </div>
    );
};

export default OtherSkills;