import React, { useEffect } from "react";
import "./styles.css";

const Dot = ({ x, y, color, animation }) => {
  return (
    <div
      className="dot"
      style={{
        left: x,
        top: y,
        backgroundColor: color,
      }}
    ></div>
  );
};

export default Dot;

// from ClosestPair.jsx
// useEffect(() => {
//   generateRandomDots(20);
// }, []);

//
// CHANGE TO "for each pair of points, p1, p2 E P:"
//
//
// CHANGE TO "for each pair of points, p1, p2 E P:"
// in the latex part i mean
