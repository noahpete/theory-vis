import { VisContainer } from "components";
import "./styles.css";

import Visualizations from "data/complexity.json";

const Complexity = () => {
  return (
    <div className="complexity-wrapper">
      {Visualizations.map((vis) => {
        if (vis.status === "hidden") return null;
        else return <VisContainer key={vis.id} vis={vis} />;
      })}
    </div>
  );
};

export default Complexity;
