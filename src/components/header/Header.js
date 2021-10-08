import logo from '../../images/logo-chavel.png';
import './Header.css';

const Header = () => (
    <header>
        <img className="logo" src={logo} alt={logo} />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Occupation Profile</li>
        </ul>
    </header>
)

export default Header;