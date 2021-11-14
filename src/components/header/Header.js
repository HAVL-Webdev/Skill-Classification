import logo from '../../images/CHAVL_Logo_V2.png'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <div class="container">
      <section id="blue_bar"></section>

      <NavLink to="/">
        <img className="logo" src={logo} alt={logo} />
      </NavLink>

      <ul>
        <li>
          <NavLink to="/" activeClassName="selected" exact={true}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="selected">
            About
          </NavLink>
        </li>
        <li>Occupation Profile</li>
      </ul>
    </div>
  </header>
)

export default Header
