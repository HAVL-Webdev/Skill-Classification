import logo from '../../images/CHAVL_Logo_V2.png';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <div class="container">
            <section id="blue_bar"></section>

            <Link to='/'>
                <img className="logo" src={logo} alt={logo} />
            </Link>
            
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li>About</li>
                <li>Occupation Profile</li>
            </ul>
        </div>
    </header>
)

export default Header;