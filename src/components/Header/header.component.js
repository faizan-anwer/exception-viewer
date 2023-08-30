import React from 'react'
import './HeaderComponent.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <img 
        src={process.env.PUBLIC_URL + '/rbclogo.png'} //"/src/assets/images/rbclogo.png" 
        alt="Header Image" 
        className="header-image" 
        /> 
        <h2 className='header-title'>DQ Exceptions Viewer</h2>
        <NavLink to={'/logout'}>Logout</NavLink>
    </header>
  )
}
