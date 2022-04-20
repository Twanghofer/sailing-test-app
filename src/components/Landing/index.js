import React from "react";
import "./style.css";

import SailingShip from "../../assets/ship.jpg";
import Compass from "../../assets/compass.svg";

function Landing() {
  return (
    <section className="landing">
      <div className="text">
        <h1>
          Lorem Ipsum
          <br />
          Proin gravi
        </h1>
        <h2>
          Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
          sollicitudin, lorem
        </h2>
      </div>
      <div
        className="landing-background"
        style={{
          backgroundImage: `url(${SailingShip})`,
        }}
      >
        <img className="compass" src={Compass} alt="Compass" />
      </div>
    </section>
  );
}

export default Landing;
