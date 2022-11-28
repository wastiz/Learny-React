import './Aside.scss';
import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Slider from '../Slider/Slider'

function Aside () {
    return(
        <aside>
            <Logo></Logo>
            <Navigation className='navigation'></Navigation>
            <Slider></Slider>
        </aside>
    )
}

export default Aside;