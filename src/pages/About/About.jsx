import React from "react";
import "./styles.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-section">
        <p>
          Theory Vis is a collection of Visualizations that help depict
          fundamental concepts explored in computer science. The structure of
          this website and the visualizations themselves take significant
          influence from EECS 376: Foundations of Computer Science at the
          University of Michigan, specifically the{" "}
          <a
            href="https://eecs376.github.io/notes/"
            target="_blank"
            rel="noreferrer"
          >
            notes written by Dr. Amir Kamil
          </a>
          . Visualizations' code, design, and assets created by Noah Peters.
        </p>
      </div>
    </div>
  );
};

export default About;
