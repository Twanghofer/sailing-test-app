import React from "react";
import "./style.css";

import SailingShip from "../../assets/ship.jpg";

function Landing() {
  return (
    <section className="landing">
      <div className="text">
        <h1>Lorem Ipsum Proin gravi</h1>
        <h2>
          Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
          sollicitudin, lorem
        </h2>
      </div>
      <img src={SailingShip} alt="Sailing Ship" />
    </section>
  );
}

export default Landing;