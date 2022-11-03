import React from 'react';

import './header.css'


const Header = () => {
    return (
        <header className='d-flex'>
   <h3>
       <a href="#">Star Wars</a>
   </h3>
            <ul className= 'd-flex'>
                <li><a href="#">People</a></li>
            <li><a href="#">Planets</a></li>
            <li><a href="#">Starships</a></li>
            </ul>
        </header>
    );
};

export default Header;