import PropTypes from 'prop-types';
import React from 'react';

function Key({displayOctave, highlightKey, id, keyCode, keyPress, letter, note}) {
  let octaveNote = note + displayOctave;
  return(
    <div
      className={`key-black key 
                  ${highlightKey === keyCode ? 'keyboard-click' : 'black-ky-bg'} 
                  ${id === 7 ? 'm-left-3' : id === 2 ? 'm-left' : ''}`}
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
    </div>
  );
};

Key.propTypes = {
  displayOctave: PropTypes.number,
  highlightKey: PropTypes.number,
  id: PropTypes.number,
  keyCode: PropTypes.number,
  keyPress: PropTypes.func.isRequired,
  letter: PropTypes.string,
  note: PropTypes.string
};

export default Key;