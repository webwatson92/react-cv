import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation';

const NotFound = (props) => {
    return (
        <div className='notFound'>
           
            <div className='notFoundContent'>
                <h3>Désolé cette page n'existe pas !!!</h3>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className='fas fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NotFound;