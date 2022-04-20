import React, { useEffect } from "react";
import "./style.css";

function Menu({ isOpen, onSelect }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      return;
    }
    document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <div className={`menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <a href="#about-us" onClick={onSelect}>
            About Us
          </a>
        </li>
        <li>
          <a href="#" onClick={onSelect}>
            Gallery
          </a>
        </li>
        <li>
          <a href="#crew" onClick={onSelect}>
            Crew
          </a>
        </li>
        <li>
          <a href="#" onClick={onSelect}>
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
