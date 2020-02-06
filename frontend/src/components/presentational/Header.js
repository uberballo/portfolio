import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='navbar navbar-dark bg-dark shadow-sm navbar-expand-lg '>
        <a className='nav-item navbar-brand' href='/'>
          Portfolio
        </a>

          <ul class='navbar-nav mr-auto'>
            <li class='nav-item'>
              <NavLink to="/about" className="nav-link" activeStyle={{fontWeight: "bold"}}>About</NavLink>  
            </li>
          </ul>
      </div>
    </header>
  );
};

export default Header;
