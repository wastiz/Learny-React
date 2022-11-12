import './Logo.scss'
import logo from '../../img/logo.svg';

function Logo () {
    return (
        <div>
            <img src={logo} alt='logo'/>
            <h1>Learny</h1>
        </div>
    )
}

export default Logo;
