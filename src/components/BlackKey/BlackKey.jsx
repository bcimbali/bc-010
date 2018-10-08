import React from 'react';

function Key({highlightKey, id, keyCode, keyPress, letter, note, displayOctave, startingOctave}) {
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

export default Key;