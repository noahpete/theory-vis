import React, { useState } from "react";
import { Button } from "components";
import Channel from "./Channel";
import Bucket from "./Bucket";
import "./styles.css";

import Animation from "data/dh-animation.json";

const DiffieHellman = () => {
  const FIRST_FRAME = 0;
  const LAST_FRAME = Animation.length - 1;

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
        <Channel opacity={Animation[frame].channel.opacity} />
        <Bucket
          opacity={Animation[frame].bucketG.opacity}
          x={Animation[frame].bucketG.x}
          y={Animation[frame].bucketG.y}
          color={Animation[frame].bucketG.color}
          liqLevel={Animation[frame].bucketG.liqLevel}
        />

        {/* alice and bob's buckets */}
        <Bucket
          opacity={Animation[frame].bucketA.opacity}
          x={Animation[frame].bucketA.x}
          y={Animation[frame].bucketA.y}
          color={Animation[frame].bucketA.color}
          liqLevel={Animation[frame].bucketA.liqLevel}
        />
        <Bucket
          opacity={Animation[frame].bucketB.opacity}
          x={Animation[frame].bucketB.x}
          y={Animation[frame].bucketB.y}
          color={Animation[frame].bucketB.color}
          liqLevel={Animation[frame].bucketB.liqLevel}
        />

        {/* temp buckets */}
        <Bucket
          opacity={Animation[frame].bucketGA.opacity}
          x={Animation[frame].bucketGA.x}
          y={Animation[frame].bucketGA.y}
          color={Animation[frame].bucketGA.color}
          liqLevel={Animation[frame].bucketGA.liqLevel}
        />
        <Bucket
          opacity={Animation[frame].bucketGB.opacity}
          x={Animation[frame].bucketGB.x}
          y={Animation[frame].bucketGB.y}
          color={Animation[frame].bucketGB.color}
          liqLevel={Animation[frame].bucketGB.liqLevel}
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
          <p style={{ fontSize: "80%" }}>
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
