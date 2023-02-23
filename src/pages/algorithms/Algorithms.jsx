import { VisContainer } from 'components';
import './styles.css';

import Visualizations from 'data/algorithms.json';

const Algorithms = () => {
  return (
    <div className="algorithms-wrapper">
      {Visualizations.map(vis => {
        return(
          <VisContainer key={vis.id} vis={ vis } />
        );
      })}
    </div>
  );
}
 
export default Algorithms;