import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { Bar } from "components";

const Action = {
  type: "",
  value1: 0,
  value2: 0,
  isLast: false,
};

const defBar1 = {
  var: "x",
  value: 320,
};

const defBar2 = {
  var: "y",
  value: 40,
};

function Euclid() {
  const CANVAS_DIMEN = 360;
  const SORT_DELAY = 50;

  const COMPARING_COL = "#498bc4";
  const VALID_COL = "#94c965";
  const NOT_VALID_COL = "#cc6464";

  const [bars, setBars] = useState([defBar1, defBar2]);
  const [animation, setAnimation] = useState([]);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (animation.length > 0 && !isAnimating.current) {
      isAnimating.current = true;
      animate();
    }
  });

  const euclid = (m, n) => {
    let actions = [];

    // compare
    actions.push({
      type: "compare",
      value1: bars[0].value,
      value2: bars[1].value,
    });

    if (m < n) {
      // swap
      actions.push({
        type: "swap",
        value1: bars[0].value,
        value2: bars[1].value,
      });

      let temp = m;
      m = n;
      n = temp;
    }

    while (n !== 0) {
      // show r
      actions.push({
        type: "make r",
        value1: bars[0].value,
        value2: bars[1].value,
      });

      let r = m % n;

      // set m
      actions.push({
        type: "set m",
        value1: bars[0].value,
        value2: bars[1].value,
      });

      m = n;

      // set n
      actions.push({
        type: "set n",
        value1: bars[0].value,
        value2: bars[1].value,
      });

      n = r;
    }

    // show answer
    actions.push({
      type: "answer",
      value1: bars[0].value,
      value2: bars[1].value,
    });

    setAnimation(actions);
    console.log(m);
  };

  const animate = () => {
    let delay = 0;
    animation.forEach((action, index) => {
      setTimeout(() => {
        let newBars = [...bars];

        switch (action.type) {
          case "compare": {
            newBars[0].color = COMPARING_COL;
            newBars[1].color = COMPARING_COL;
            if (newBars[0].value < newBars[1].value) {
              newBars[0].color = VALID_COL;
              newBars[1].color = VALID_COL;
            } else {
              newBars[0].color = NOT_VALID_COL;
              newBars[1].color = NOT_VALID_COL;
            }
            break;
          }

          default:
            break;
        }

        setBars(newBars);

        if (action.isLast) isAnimating.current = false;
      }, delay);
      delay += SORT_DELAY;
    });
  };

  return (
    <div className="euclid">
      <div className="euc-wrapper">
        <div
          className="euc-canvas"
          style={{
            width: `${CANVAS_DIMEN}px`,
            height: `${CANVAS_DIMEN}px`,
          }}
        >
          <div className="euc-bars-wrapper">
            <Bar value={bars[0].value} valueVar={"x"} color={bars[0].color} />
            <Bar value={bars[1].value} valueVar={"y"} color={bars[1].color} />
          </div>
        </div>
      </div>
      <div className="euc-controls">
        <button onClick={() => euclid(bars[0].value, bars[1].value)}>
          Euclid
        </button>
      </div>
    </div>
  );
}

export default Euclid;
