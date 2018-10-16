import PropTypes from 'prop-types';
import React from 'react';

Key.propTypes = {
  displayOctave: PropTypes.number,
  highlightKey: PropTypes.number,
  keyCode: PropTypes.number,
  keyPress: PropTypes.func.isRequired,
  letter: PropTypes.string,
  note: PropTypes.string
};

function Key({highlightKey, keyCode, keyPress, note, letter, displayOctave, startingOctave}) {
  let octaveNote = note + displayOctave;
  return(
    <div
      className={`key key-white 
                  ${highlightKey === keyCode ? 'keyboard-click' : ''}`} 
      onClick={() => keyPress(octaveNote)}
    >
      <div className="key-display">
        <div>
          {note}{displayOctave}
        </div>
        <div className="letter-name">
          <p>{letter}</p>
        </div>
      </div>
      {console.log('displayOctave: ', displayOctave)}
    </div>
  );
};



export default Key;