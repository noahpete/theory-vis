import React, { useState } from "react";
import { Node } from "components";
import { motion } from "framer-motion";
import "./styles.css";

const Clique = ({}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 1000); // set timeout to match desired trigger
  };

  return (
    <div className="clique">
      <div className="clique-canvas-wrapper">
        <div className="clique-canvas">
          <div className="clique-equation">
            <p>
              <i>
                (x &or; y &or; z) &and; (&not;x &or; &not;y &or; &not;z) &and;
                (x &or; &not;y &or; z)
              </i>
            </p>
          </div>
          <Node active={isActive} symbol="x" popColor="red"></Node>
          <Node active={isActive} symbol="y" popColor="green"></Node>
          <Node active={isActive} symbol="z" popColor="green"></Node>
        </div>
      </div>
      <div className="clique-controls-wrapper">
        <button onClick={handleClick}>Button!</button>
      </div>
    </div>
  );
};

export default Clique;
