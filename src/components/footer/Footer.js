import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';


const Footer = () => (
    <footer>
        <ul>
            <li><p>&copy; CHAVEL 2021 All Rights Reserved</p></li>
            <li><p>Privacy Policy</p></li>
            <li><p>info@chavel.com.au</p></li>
            <li><FontAwesomeIcon icon={faTwitter} /></li>
            <li><FontAwesomeIcon icon={faFacebook} /></li>
            <li><FontAwesomeIcon icon={faLinkedin} /></li>
        </ul>
    </footer>
)

export default Footer;
