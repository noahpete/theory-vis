import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./styles.css";

const Dot = ({ x, y, color, animation }) => {
  return (
    <motion.div
      className="dot"
      style={{
        left: x,
        top: y,
        backgroundColor: color,
      }}
      initial={{ scale: 0 }}
      animate={{ rotate: 180, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    ></motion.div>
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
