import React from 'react';

function Key({highlightKey, id, keyCode, keyPress, letter, note}) {
  return(
    <div
      className={`key-black key 
                  ${highlightKey === keyCode ? 'keyboard-click' : 'black-ky-bg'} 
                  ${id === 7 ? 'm-left-3' : id === 2 ? 'm-left' : ''}`}
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