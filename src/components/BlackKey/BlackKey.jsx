import React from 'react';

function Key(props) {
  return(
    <div
      className={`key-black key ${props.id === 3 ? 'm-left-3' : props.id === 1 ? 'm-left' : ''}`}
      onClick={() => props.keyPress(props.note)}
    >
    {props.note}
    </div>
  );
};

export default Key;