import { PotentialMethod, DiffieHellman, FiniteAutomata } from 'components';
import './styles.css';

const VisContainer = ({ vis }) => {
  const ComponentMapper = (componentID) => {
    console.log(componentID);
    switch (componentID) {
      case "PotentialMethod":
        return <PotentialMethod />;
      case "DiffieHellman":
        return <DiffieHellman />;
      case "FiniteAutomata":
        return <FiniteAutomata />;
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

export default VisContainer;