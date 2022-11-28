import './Navigation.scss';
import React from 'react';
//import HomeIcon from '../../img/home.svg';
//import HomeIcon from '@mui/icons-material/Home';


function Navigation () {
    return (
        <nav>
            <ul>
                <li><div class='home-icon'></div><a href="/">Home</a></li>
                <li><div class='graph-icon'></div><a href="/">Progress</a></li>
                <li><div class='chat-icon'></div><a href="/">Messages</a></li>
                <li><div class='settings-icon'></div><a href="/">Settings</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;
