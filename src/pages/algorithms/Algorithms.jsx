import { VisContainer } from "components";
import "./styles.css";

import Visualizations from "data/algorithms.json";

const Algorithms = () => {
  return (
    <div className="algorithms-wrapper">
      {Visualizations.map((vis) => {
        if (vis.status === "hidden") return null;
        else return <VisContainer key={vis.id} vis={vis} />;
      })}
    </div>
  );
};

export default Algorithms;
