import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
       <img src={Logo} alt="LOGO_HENRY"  id="logoHenry"/>
       <p className="text-light">Henry - Weather APP</p>
       <SearchBar onSearch={onSearch} onClose />
    </nav>
  );
};

export default Nav;
