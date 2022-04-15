import React from "react";
import Logo from "../../assets/logo.svg";
import "./style.css";

function Header() {
  return (
    <header>
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
      <a href="#" className="logo">
        <img src={Logo} alt="Icon" />
      </a>
    </header>
  );
}

export default Header;
