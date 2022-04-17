import React from "react";
import "./style.css";

import { FaTwitter, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <p className="opacity-50">© 2021. Segel-Team. Alle Rechte vorbehalten</p>
      <div className="row">
        <div className="row logos">
          <FaTwitter />
          <FaFacebookF />
        </div>
        <div className="row">
          <a>Impressum</a>
          <a>Datenschutz</a>
          <a>Rechtliches</a>
          <a>Copyright</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
