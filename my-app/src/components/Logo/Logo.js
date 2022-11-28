import './Logo.scss'
import logo from '../../img/logo.svg';
import React from 'react';

function Logo () {
    return (
        <div className='logo'>
            <img src={logo} alt='logo'/>
            <h1>Learny</h1>
        </div>
    )
}

export default Logo;
