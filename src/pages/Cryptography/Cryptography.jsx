import { VisContainer } from 'components';
import './styles.css';

import Visualizations from 'data/cryptography.json';


const Cryptography = () => {
  return (
    <div className="crypto-wrapper">
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

export default Cryptography;