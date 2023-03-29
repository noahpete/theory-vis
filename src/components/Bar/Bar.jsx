import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

const Bar = ({
  id,
  width,
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
        width: `${width}px`,
        height: `${value}px`,
        margin: "0 1px",
      }}
    >
      <div className="bar-value" style={{ marginTop: `${value + 4}px` }}>
        {valueVar === "" ? "" : `${valueVar} = `}
        {showValue ? value : ""}
      </div>
      <div className="bar-val-controls"></div>
    </motion.div>
  );
};

export default Bar;
