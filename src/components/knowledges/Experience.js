import React from 'react';

const Experience = (props) => {
    return (
        <div className='experience'>
           <h2>Expérience</h2>
           <div className="exp-1">
                <h5>Directeur Technique - Apple</h5>
                <span>2010-2015</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                </p>
           </div>
           <div className="exp-2">
                <h5>Conseiller stratégique - Microsoft</h5>
                <span>2010-2015</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                </p>
           </div>
        </div>
    );
};

export default Experience;