import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = (props) => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src="./media/elhadj.jpg" alt="image de profile" />
                    <h3>El Hadj Scratch</h3>      
                </div>
            </div>

            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className='fas fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li> 
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className='fas fa-address-book'></i>
                            <span>Compétence</span>
                        </NavLink>
                    </li>  
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className='fas fa-images'></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>  
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className='fas fa-home'></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>     
                </ul>  
            </div>

            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href="https://linkedin.com/in/ouattaraelhadjy" target="_blank" rel="noopener noreferrer"><i className='fab fa-linkedin'></i></a>
                    </li> 
                    <li>
                        <a href="https://twitter.com/ouattaraelhadjy" target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter'></i></a>
                    </li>  
                    <li>
                        <a href="https://github.com/webwatson92" target="_blank" rel="noopener noreferrer"><i className='fab fa-github'></i></a>
                    </li>  
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <i className='fab fa-codepen'></i>
                        </a>
                    </li>     
                </ul>  
                <div className='signature'>
                    <p>webwatson92 @ Copyright </p>  
                </div>
            </div>

        </div>
    );
};

export default Navigation;