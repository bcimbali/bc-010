import React from 'react';

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
    
    </div>
  );
};

export default Key;