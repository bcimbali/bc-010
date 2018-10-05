import React from 'react';

function OscillatorBtn({abbr, toggleOscillator, type}) {
  return(
      <div 
        className="btn-toggle" 
        onClick={() => toggleOscillator(type)}
      >
        <p className="btn-text">
          {abbr}
        </p>
      </div>
  );
};

export default OscillatorBtn;