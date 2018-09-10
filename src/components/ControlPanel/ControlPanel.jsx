import React from 'react';

function ControlPanel(props) {
  return(
    <div className="controlPanel">
      <div className="btn-toggle" onClick={props.toggleOscillator}>
        Toggle Oscillator
      </div>
    </div>
  );
};

export default ControlPanel;