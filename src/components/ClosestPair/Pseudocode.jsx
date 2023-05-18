import React from "react";

const Pseudocode = (props) => {
  if (props.algo === "naive")
    return (
      <div className="cp-pseudocode">
        <div className="cp-pseudo-line">
          <p>NaiveClosestPair(points):</p>
        </div>
        <div id="minequalsinf" className="cp-pseudo-line">
          <p>&emsp;min := &infin;</p>
        </div>
        <div id="forp1" className="cp-pseudo-line">
          <p>&emsp;for each point, p1, in points:</p>
        </div>
        <div id="forp2" className="cp-pseudo-line">
          <p>&emsp;&emsp;for each other point, p2, in points:</p>
        </div>
        <div id="compare" className="cp-pseudo-line">
          <p>&emsp;&emsp;&emsp;if distance between p1 and p2 &lt; min:</p>
        </div>
        <div id="best" className="cp-pseudo-line">
          <p>&emsp;&emsp;&emsp;&emsp;min = distance between p1 and p2</p>
        </div>
        <div id="best" className="cp-pseudo-line">
          <p>&emsp;&emsp;&emsp;&emsp;bestPair = (p1, p2)</p>
        </div>
        <div id="end" className="cp-pseudo-line">
          <p>&emsp;return bestPair</p>
        </div>
      </div>
    );
  else if (props.algo === "dc") {
    return (
      <div className="cp-pseudocode">
        <div className="cp-pseudo-line">
          <p>ClosestPair(points):</p>
        </div>
        <div id="letm" className="cp-pseudo-line">
          <p>&emsp;m := median x-coord of points</p>
        </div>
        <div id="letL" className="cp-pseudo-line">
          <p>&emsp;L := points whose x-coord &le; m</p>
        </div>
        <div id="letR" className="cp-pseudo-line">
          <p>&emsp;R := points whose x-coord &gt; m</p>
        </div>
        <div id="l1l2" className="cp-pseudo-line">
          <p>
            &emsp;(l<sub>1</sub>, l<sub>2</sub>) := ClosestPair(L)
          </p>
        </div>
        <div id="r1r2" className="cp-pseudo-line">
          <p>
            &emsp;(r<sub>1</sub>, r<sub>2</sub>) := ClosestPair(R)
          </p>
        </div>
        <div className="cp-pseudo-line">
          <p>
            &emsp;&delta;<sub>L</sub> := |l<sub>1</sub> - l<sub>2</sub>|
          </p>
        </div>
        <div className="cp-pseudo-line">
          <p>
            &emsp;&delta;<sub>R</sub> := |r<sub>1</sub> - r<sub>2</sub>|
          </p>
        </div>
        <div className="cp-pseudo-line">
          <p>
            &emsp;&delta; := min(&delta;<sub>L</sub>, &delta;<sub>R</sub>)
          </p>
        </div>
        <div className="cp-pseudo-line">
          <p>&emsp;D := all points within &delta;-strip, sorted by y-coords</p>
        </div>
        <div id="minStrip" className="cp-pseudo-line">
          <p>&emsp;for each point in D, pair with 7 points below in D</p>
        </div>
        <div id="best" className="cp-pseudo-line">
          <p>
            &emsp;return closest pair among (l<sub>1</sub>, l<sub>2</sub>), (r
            <sub>1</sub>, r<sub>2</sub>), and D
          </p>
        </div>
      </div>
    );
  }
};

export default Pseudocode;
