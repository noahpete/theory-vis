import { Vis } from '../../components/index';
import './Algorithms.css';

import Visualizations from './visuals.json';

const Algorithms = () => {
  return (
    <div className="algorithms-wrapper">
      {Visualizations.map(vis => {
        return(
          <Vis key={vis.id} vis={ vis } />
        );
      })}
    </div>
  );
}
 
export default Algorithms;