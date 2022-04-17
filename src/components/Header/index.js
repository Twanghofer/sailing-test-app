import React from "react";
import Logo from "../../assets/logo.svg";
import "./style.css";

import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <header>
      <div className="header-nav">
        <GiHamburgerMenu className="icon" />
        <nav>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Crew</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
      <a href="#" className="logo">
        <img src={Logo} alt="Icon" />
      </a>
    </header>
  );
}

export default Header;
