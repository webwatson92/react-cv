import React from 'react';
import Navigation from '../Navigation';
import Hobbies from '../knowledges/Hobbies';
import Languages from '../knowledges/Languages';
import Experience from '../knowledges/Experience';
import OtherSkills from '../knowledges/OtherSkills';

 
const Knowleadge = (props) => {
    return (
        <div className="knowledges">
           <Navigation />
           <div className="knowledgesContent">
                <Languages />  
                <Experience />  
                <OtherSkills />  
                <Hobbies />  
            </div>
        </div>
    );
};

export default Knowleadge;