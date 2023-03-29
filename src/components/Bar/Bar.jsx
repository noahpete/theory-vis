import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

const Bar = ({
  id,
  width = 50,
  value,
  valueVar = "",
  showValue = true,
  showValControls = false,
  color = "#00274C",
}) => {
  return (
    <motion.div
      className="bar"
      id={`bar-${id}`}
      style={{
        backgroundColor: color,
        width: `${width}px`,
        height: `${value}px`,
        margin: "0 4px",
      }}
    >
      <div className="bar-value" style={{ marginTop: `${value + 4}px` }}>
        {valueVar === "" ? "" : showValue ? `${valueVar} = ` : ""}
        {showValue ? value : ""}
      </div>
      <div className="bar-val-controls"></div>
    </motion.div>
  );
};

export default Bar;
