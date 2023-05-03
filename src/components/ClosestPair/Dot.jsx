import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./styles.css";

const Dot = ({ x, y, visited, isBest, doi, animation }) => {
  return (
    <div
      className={`dot ${
        doi ? "dot-doi" : isBest ? "dot-best" : visited ? "dot-visited" : ""
      }`}
      style={{
        left: x,
        top: y,
      }}
    ></div>
  );
};

export default Dot;
