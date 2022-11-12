import './Navigation.scss';
import HomeIcon from '@mui/icons-material/Home';

function Navigation () {
    return (
        <nav>
            <ul>
                <li><a href="/">{HomeIcon} Home</a></li>
                <li><a href="/">Progress</a></li>
                <li><a href="/">Messages</a></li>
                <li><a href="/">Settings</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;
