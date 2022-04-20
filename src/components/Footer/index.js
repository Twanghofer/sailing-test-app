import React from "react";
import "./style.css";

import { FaTwitter, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="copyright">
        <p>© 2021. Segel-Team.</p>
        <p>Alle Rechte vorbehalten</p>
      </div>
      <div className="logos">
        <FaTwitter />
        <FaFacebookF />
      </div>
      <div className="links">
        <div className="column">
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
        </div>
        <div className="column">
          <a href="#">Rechtliches</a>
          <a href="#">Copyright</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
