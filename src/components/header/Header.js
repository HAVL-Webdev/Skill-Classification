import logo from '../../images/CHAVL_Logo_V2.png';
import './Header.css';

const Header = () => (
    <header>
        <div class="container">
            <section id="blue_bar"></section>

            <img className="logo" src={logo} alt={logo} />
            
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Occupation Profile</li>
            </ul>
        </div>
    </header>
)

export default Header;