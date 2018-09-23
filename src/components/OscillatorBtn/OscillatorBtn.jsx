import React from 'react';

function OscillatorBtn(props) {
  return(
      <div 
        className="btn-toggle" 
        onClick={() => props.toggleOscillator(props.type)}
      >
        <p className="vertical-middle">
          {props.type}
        </p>
      </div>
  );
};

export default OscillatorBtn;