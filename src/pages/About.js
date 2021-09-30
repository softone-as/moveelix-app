import React from "react";
import "./about.css";

function About() {
  return (
    <section className="about">
      <div className="image-about">
        <img src="./assets/img/hero-image.jpg" alt="hero-img" />
      </div>
      <div className="title-about">
        <h1>
          Get in deep <br /> with me
        </h1>
        <p>
          Hi, my name is Shofwan, currently i'm is a student of colleague in
          Bandung. I hope from this bootcamp, i've got a self-development for
          development an apps.
        </p>
      </div>
    </section>
  );
}

export default About;
