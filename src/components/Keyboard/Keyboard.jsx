import BlackKey from './../BlackKey';
import React from 'react';
import WhiteKey from './../WhiteKey';
import blackKeys from './../../blackKeys.json';
import whiteKeys from './../../whiteKeys.json';

function Keyboard(props) {
  return(
    <div className="keyboard">
      <div className="black-keys">
        {blackKeys.map(note => (
          <BlackKey
          id={note.id}
          key={`${note.id}-${note.note}`}
          keyPress={props.keyPress}
          note={note.note}
          />
        ))}
      </div>
      <div className="white-keys">
        {whiteKeys.map(note => (
          <WhiteKey 
          key={`${note.id}-${note.note}`}
          keyPress={props.keyPress}
          note={note.note}
          />
        ))}
      </div>
    </div>
  );
};

export default Keyboard;