import { VisContainer } from "components";
import "./styles.css";

import Visualizations from "data/computability.json";

const Computability = () => {
  return (
    <div className="computability-wrapper">
      {Visualizations.map((vis) => {
        if (vis.status === "hidden") return null;
        else return <VisContainer key={vis.id} vis={vis} />;
      })}
    </div>
  );
};

export default Computability;
