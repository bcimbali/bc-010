import React from 'react';

function OctaveContainer({decreaseOctave ,increaseOctave, octave}) {
  return(
      <div className="octave-container">
        <div className="octave-header">
          Octave
        </div>
        <div className="octave-controls">
      
          <div 
              className="octave-btn"
              onClick={() => decreaseOctave()}  
          >
            -
          </div>
          <div className="octave-display">
            {octave}
          </div>
          <div 
            className="octave-btn"
            onClick={() => increaseOctave()}  
          >
          +
          </div>
        </div>
      </div>
  );
};

export default OctaveContainer;