import React from "react";
import Button from "react-bootstrap/Button";
import "./about.css";

const About = () => {
  return (
    <div className="row about">
      <div className="col-md-6 about-section">
        <div className="row about-container">
          <div className="col-md-10 about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button className="about-button">About me</Button>
          </div>
        </div>
      </div>
      <div className="col-md-6 about-image">
        <p>Carousel of projects</p>
      </div>
    </div>
  );
};

export default About;
