import React from 'react';

function OscillatorBtn(props) {
  return(
      <div 
        className="btn-toggle" 
        onClick={() => props.toggleOscillator(props.type)}
      >
        {props.type}
      </div>
  );
};

export default OscillatorBtn;