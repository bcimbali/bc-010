import React from 'react';

function Key(props) {
  return(
    <div
      className={`key key-white 
                  ${props.highlightKey === props.keyCode ? 'keyboard-click' : ''}`} 
      onClick={() => props.keyPress(props.note)}
    >
    {props.note}
    </div>
  );
};

export default Key;