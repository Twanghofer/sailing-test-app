import React from "react";
import "./style.css";

import { FaTwitter, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="opacity-50">
        <p>© 2021. Segel-Team. Alle Rechte vorbehalten</p>
      </div>
      <div className="logos">
        <FaTwitter />
        <FaFacebookF />
      </div>
      <div className="links">
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
        <a href="#">Rechtliches</a>
        <a href="#">Copyright</a>
      </div>
    </footer>
  );
}

export default Footer;
