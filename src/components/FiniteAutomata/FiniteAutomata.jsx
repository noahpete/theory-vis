import React, { useState } from "react";
import { Button } from "components";
import { ReactComponent as Arrow0 } from "assets/fa-arrow-1.svg";
import { ReactComponent as Arrowa } from "assets/fa-arrow-2.svg";
import { ReactComponent as Arrowab } from "assets/fa-arrow-3.svg";
import { ReactComponent as Arrowabb } from "assets/fa-arrow-4.svg";
import { ReactComponent as Arrowabba } from "assets/fa-arrow-5.svg";
import { ReactComponent as Arrowother } from "assets/fa-arrow-6.svg";

import "./styles.css";

const FiniteAutomata = () => {
  const XPOS = 90;
  const OFFSET = 120;
  const [states, setStates] = useState([
    { text: "0", x: XPOS, y: 280, on: false },
    { text: "a", x: XPOS + OFFSET * 1, y: 280, on: false },
    { text: "ab", x: XPOS + OFFSET * 2, y: 280, on: false },
    { text: "abb", x: XPOS + OFFSET * 3, y: 280, width: 65, on: false },
    { text: "abba", x: XPOS + OFFSET * 4, y: 280, width: 80, on: false },
    { text: "other", x: XPOS + OFFSET * 3.5, y: 100, width: 100, on: false },
  ]);

  const handleClick = () => {};

  return (
    <div className="fa-wrapper">
      <div className="fa-canvas">
        {/* TODO: learn css keyframe animations to make custom wipe animation */}
        <Arrow0 className="fa-arrow0" />
        {states.map((state, index) => (
          <div
            className="fa-state"
            key={index}
            style={{
              width: state.width,
              top: state.y,
              left: state.x,
            }}
          >
            <div className="fa-state-wrapper">
              <h2>q</h2>
              <p>{state.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="fa-controls-wrapper">
        <div className="fa-controls">
          <Button style={{ width: "40px" }}>&lt;</Button>
          <Button style={{ width: "40px" }} onClick={handleClick}>
            &gt;
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FiniteAutomata;
