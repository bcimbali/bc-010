import React from 'react';

function OscillatorBtn(props) {
  return(
      <div 
        className="btn-toggle" 
        onClick={() => props.toggleOscillator(props.type)}
      >
        <p className="btn-text">
          {props.abbr}
        </p>
      </div>
  );
};

export default OscillatorBtn;