import React from "react";
import "./hero.css";

function Hero() {
  return (
    <div className="hero position-relative">
      <p className="position-absolute" id="reignbegin">
        Let Your Reign <br />
        Begin !
      </p>
      <img
        src="src/assets/hero.png"
        className="hero d-md-block d-none"
        id="heroimg"
      />
      <img
        src="src/assets/small-hero.jpeg"
        className="d-md-none d-block"
        id="heroimg"
      />
    </div>
  );
}

export default Hero;
