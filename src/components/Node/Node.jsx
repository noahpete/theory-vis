import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const Node = ({ active, defColor = "white", popColor, symbol, x, y }) => {
  const ANIMATION_SPEED = 400;
  const [isAnimating, setIsAnimating] = useState(false);
  const [isColored, setIsColored] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    if (active) {
      setIsAnimating(true);
      setIsColored(true);
      setTimeout(() => {
        setIsAnimating(false);
        setIsColored(false);
      }, ANIMATION_SPEED);
    }
  }, [active]);

  return (
    <div
      ref={nodeRef}
      className={`node ${isAnimating ? "pop" : ""}`}
      style={{
        backgroundColor: isColored ? popColor : defColor,
        transition: `all 0.${ANIMATION_SPEED}s ease`,
        width: "32px",
        height: "32px",
        position: "absolute",
        left: x,
        top: y,
      }}
    >
      <p>
        {symbol && (
          <div className="symbol">
            <i>{symbol}</i>
          </div>
        )}
      </p>
    </div>
  );
};

export default Node;
