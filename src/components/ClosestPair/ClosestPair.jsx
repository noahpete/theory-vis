import React, { useState, useEffect } from "react";
import { Pseudocode } from "components";
import Dot from "./Dot";
import "./styles.css";
import { NumberUtils } from "utils";

const ClosestPair = () => {
  const CANVAS_DIMEN = 400;
  const DOT_DIMEN = 10;
  const ANIMATION_DELAY = 50;

  const [dots, setDots] = useState([]);
  const [log, setLog] = useState([]);
  const [pair, setPair] = useState([]);

  const generateRandomDots = (n = 3) => {
    setDots([]);
    let newDots = [];

    for (let i = 0; i < n; ++i) {
      newDots[i] = {
        id: i,
        x: Math.random() * 0.75 * CANVAS_DIMEN,
        y: Math.random() * 0.75 * CANVAS_DIMEN,
        color: "darkgray",
      };
    }

    // set up delay between adding each dot
    let delay = 0;
    newDots.forEach((dot) => {
      setTimeout(() => {
        setDots((prevDots) => [...prevDots, dot]);
      }, delay);
      delay += ANIMATION_DELAY;
    });
  };

  const naiveClosestPair = (Points = []) => {
    let minDist = Infinity;
    let minPair = [];
    for (let i = 0; i < Points.length; ++i) {
      for (let j = i + 1; j < Points.length; ++j) {
        let dist = NumberUtils.dist(Points[i], Points[j]);
        if (dist < minDist) {
          minDist = dist;
          minPair = {
            p1: Points[i],
            p2: Points[j],
          };
          // [Points[i], Points[j]];
        }
      }
    }
    setPair(minPair);
    return [minDist, minPair];
  };

  const paintPair = ({ dist, pair }) => {
    let newDots = [];
  };

  return (
    <div className="closest-pair">
      <div className="cp-wrapper">
        <div className="cp-pseudocode">
          <Pseudocode />
        </div>
        <div className="cp-canvas">
          {dots.map((dot, index) => (
            <Dot
              key={index}
              s
              x={dot.x}
              y={dot.y}
              color={dot.color}
              animation={[]}
            />
          ))}
        </div>
      </div>
      <div className="cp-controls">
        <button onClick={() => generateRandomDots()}>Press</button>
        <button
          onClick={() => {
            naiveClosestPair(dots);
            let dist, pair;
            console.log(pair);
          }}
        >
          NaiveClosestPair
        </button>
      </div>
    </div>
  );
};

export default ClosestPair;
