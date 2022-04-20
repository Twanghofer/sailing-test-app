import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import "./style.css";

import { IoMdMenu } from "react-icons/io";
import Menu from "../Menu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-nav">
        <IoMdMenu onClick={() => setMenuOpen(!menuOpen)} className="icon" />
        <nav>
          <ul>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#crew">Crew</a>
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
      <Menu isOpen={menuOpen} onSelect={() => setMenuOpen(false)} />
    </header>
  );
}

export default Header;
