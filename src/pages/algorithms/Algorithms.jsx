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

// ,
//   {
//     "id": 3,
//     "title": "Greatest Common Divisor Problem",
//     "description": "",
//     "componentID": "GCD",
//     "noteLink": "https://eecs376.github.io/notes/algorithms.html#the-first-algorithm",
//     "wikiLink": "https://en.wikipedia.org/wiki/Euclidean_algorithm"
//   },
//   {
//     "id": 4,
//     "title": "Minimum Spanning Tree Problem",
//     "description": "",
//     "componentID": "MST",
//     "noteLink": "https://en.wikipedia.org/wiki/Minimum_spanning_tree",
//     "wikiLink": "https://eecs376.github.io/notes/algorithms.html#greedy-algorithms"
//   }
