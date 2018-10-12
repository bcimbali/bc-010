import React from 'react';

function OscillatorBtn({abbr, oscillator, toggleOscillator, type}) {
  return(
      <div 
        className={`btn-toggle ${type === oscillator ? 'btn-selected' : ''}`}
        onClick={() => toggleOscillator(type)}
      >
        <p className="btn-text">
          {abbr}
        </p>
      </div>
  );
};

export default OscillatorBtn;