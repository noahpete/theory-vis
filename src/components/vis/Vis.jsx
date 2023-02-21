import { Potential, GCD } from '../../pages/algorithms';
import { DiffieHellman } from '../../pages/crypto';
import './vis.css';

const Vis = ({ vis }) => {
  const ComponentMapper = (componentID) => {
    console.log(componentID);
    switch (componentID) {
      case "Potential":
        return <Potential />;
      case "GCD":
        return <GCD />;
      case "DH":
        return <DiffieHellman />;
      default:
        return <div>Under construction!</div>;
    }
  }

  return (
    <div className="vis-wrapper">
      <div className="info-panel">
        <h2>{ vis.title }</h2>
        <p>{ vis.description }</p>
        <div className="info-panel-links-wrapper">
          <div className="info-panel-links">
            <a href={ vis.noteLink }>376 Notes</a>
            <a href={ vis.wikiLink }>Wikipedia</a>
          </div>
        </div>
      </div>
      <div className="visual">
        { ComponentMapper(vis.componentID) }
      </div>
    </div>
  );
}

export default Vis