import { VisContainer } from "components";
import "./styles.css";

import Visualizations from "data/cryptography.json";

const Cryptography = () => {
  return (
    <div className="crypto-wrapper">
      {Visualizations.map((vis) => {
        if (vis.status === "hidden") return null;
        else return <VisContainer key={vis.id} vis={vis} />;
      })}
    </div>
  );
};

export default Cryptography;
