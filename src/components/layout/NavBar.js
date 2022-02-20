import { Link } from "react-router-dom";

import navStyles from "./NavBar.module.css";
import logo from '../../content/logo-black.png';

function NavBar() {
  return (
    <header className={navStyles.header}>
      <img src={logo} className={navStyles.logo} />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
