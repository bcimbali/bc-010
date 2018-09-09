import Key from './../Key';
import React from 'react';
import notes from './../../notes.json';

function Keyboard(props) {
  return(
    <div className="keyboard">
      {notes.map(note => (
        <Key 
        keyPress={props.keyPress}
        note={note.note}
        />
      ))}
    </div>
  );
};

export default Keyboard;