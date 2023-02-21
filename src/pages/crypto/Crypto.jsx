import { Vis } from '../../components/index';
import './Crypto.css';

import Visualizations from './visuals.json';


const Crypto = () => {
  return (
    <div className="crypto-wrapper">
      {Visualizations.map(vis => {
        return(
          <Vis
            key={vis.id}
            vis={ vis }
          />
        );
      })}
    </div>
  );
}

export default Crypto;