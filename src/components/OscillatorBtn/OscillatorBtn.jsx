import PropTypes from 'prop-types';
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

OscillatorBtn.propTypes = {
  abbr: PropTypes.string,
  oscillator: PropTypes.string,
  toggleOscillator: PropTypes.func,
  type: PropTypes.string
};

export default OscillatorBtn;