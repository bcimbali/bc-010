import React from 'react';

function Key({highlightKey, keyCode, keyPress, note, letter}) {
  return(
    <div
      className={`key key-white 
                  ${highlightKey === keyCode ? 'keyboard-click' : ''}`} 
      onClick={() => keyPress(note)}
    >
      <div className="key-display">
        <div>
          {note}
        </div>
        <div className="letter-name">
          <p>{letter}</p>
        </div>
      </div>
    
    </div>
  );
};

export default Key;