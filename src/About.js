import React from "react";
import "./About.css";

function About() {
  const aboutText = <p>
    Baseball Dynasty Simulator is designed for an in-depth, yet fun and casual experience.<br />
    <br />
    Many baseball simulators I've tried in the past fall into one of two camps: way too complicated or way too simple.<br />
    With this simulator, my goal is to bridge that gap, and appeal to players like myself, who like diving deep into statistics<br />
    and having a lot of control, but are tired of bad UIs and focusing too much on the numbers.<br />
    <br />
    We like sabermetrics, but realize the game is played on the field, not in a spreadsheet. By introducing new stats and features such as<br />
    "Cut of Jib Index", "Grit", "Malaise Watch", and "Baseball-y Plays",<br />
    and taking into account a player's origin story (hometown, school attended, draft history, etc.),<br />
    I think this simulator can provide a unique experience that most closely resembles how the game is played in real life.<br />
  </p>

  return (
    <div className="about-container">
      <p className="about-text">
        {aboutText}
      </p>
    </div>
  );
}

export default About;