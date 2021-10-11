import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';


const Footer = () => (
    <footer>
        <p>&copy; CHAVEL 2021 All Rights Reserved</p>
        <p>Privacy Policy</p>
        <p>info@chavel.com.au</p>
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faLinkedin} />
    </footer>
)

export default Footer;
