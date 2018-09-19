import React from 'react';

function Key(props) {
  return(
    <div
      className="key key-white" 
      onClick={() => props.keyPress(props.note)}
    >
    {props.note}
    </div>
  );
};

export default Key;