import React, { useState } from "react";
import { Button } from "components";
import Lock from "./Lock";
import Paper from "./Paper";
import "./styles.css";

import Animation from "data/dh-animation.json";

const DiffieHellman = () => {
  const FIRST_FRAME = 0;
  const LAST_FRAME = 8;

  const [frame, setFrame] = useState(FIRST_FRAME);
  const [showControls, setShowControls] = useState(false);

  const prevFrame = () => {
    if (frame - 1 > FIRST_FRAME) {
      setFrame(frame - 1);
    }
  };

  const nextFrame = () => {
    if (frame < LAST_FRAME) {
      setFrame(frame + 1);
    }
  };

  const handleBeginClick = () => {
    setShowControls(true);
    nextFrame();
  };

  return (
    <div className="dh-wrapper">
      <div className="dh-canvas">
        <Paper
          opacity={Animation[frame].paper.opacity}
          x={Animation[frame].paper.x}
          y={Animation[frame].paper.y}
          textHidden={Animation[frame].paper.hiddenText}
        />
        <Lock
          letter="A"
          opacity={Animation[frame].lockA.opacity}
          x={Animation[frame].lockA.x}
          y={Animation[frame].lockA.y}
          isLocked={Animation[frame].lockA.isLocked}
        />
        <Lock
          letter="B"
          opacity={Animation[frame].lockB.opacity}
          x={Animation[frame].lockB.x}
          y={Animation[frame].lockB.y}
          isLocked={Animation[frame].lockB.isLocked}
        />
        <div className="game-object alice">
          <p>Alice</p>
        </div>
        <div className="game-object bob">
          <p>Bob</p>
        </div>
      </div>
      <div className="dh-controls-wrapper">
        <div className={`dh-controls-splash ${showControls ? "hide" : ""}`}>
          <div className="dh-button-wrapper">
            <Button onClick={handleBeginClick}>Begin</Button>
          </div>
        </div>
        <div className="dh-frame-desc">
          <p>
            {frame ? frame : 1}: {Animation[frame].frameDesc}
          </p>
        </div>
        <div className="dh-controls">
          <div className="dh-button-wrapper">
            <Button
              onClick={prevFrame}
              style={{
                width: "40px",
                backgroundColor:
                  frame === FIRST_FRAME || frame === 1 ? "gainsboro" : "",
                color: frame === FIRST_FRAME || frame === 1 ? "white" : "",
              }}
            >
              &lt;
            </Button>
            <Button
              onClick={nextFrame}
              style={{
                width: "40px",
                backgroundColor: frame === LAST_FRAME ? "gainsboro" : "",
                color: frame === LAST_FRAME ? "white" : "",
              }}
            >
              &gt;
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiffieHellman;
