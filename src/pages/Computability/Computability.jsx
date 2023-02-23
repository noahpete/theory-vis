import { VisContainer } from 'components';
import './styles.css';

import Visualizations from 'data/computability.json';


const Computability = () => {
  return (
    <div className="computability-wrapper">
      {Visualizations.map(vis => {
        return(
          <VisContainer
            key={vis.id}
            vis={ vis }
          />
        );
      })}
    </div>
  );
}

export default Computability;