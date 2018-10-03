import React from 'react';

function Key(props) {
  return(
    <div
      className={`key-black key 
                  ${props.highlightKey === props.keyCode ? 'keyboard-click' : 'black-ky-bg'} 
                  ${props.id === 7 ? 'm-left-3' : props.id === 2 ? 'm-left' : ''}`}
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