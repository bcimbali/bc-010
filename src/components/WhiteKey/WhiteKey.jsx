import React from 'react';

function Key(props) {
  return(
    <div
      className={`key key-white 
                  ${props.highlightKey === props.keyCode ? 'keyboard-click' : ''}`} 
      onClick={() => props.keyPress(props.note)}
    >
      <div className="key-display">
        <div>
          {props.note}
        </div>
        <div className="letter-name">
          <p>{props.letter}</p>
        </div>
      </div>
    
    </div>
  );
};

export default Key;