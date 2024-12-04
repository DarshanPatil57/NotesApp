import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";

export default function NoteContainer(props) {
  const reverseNotes = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      array.push(arr[i]);
    }
    return array;
  };

  const notes = reverseNotes(props.notes);
  
  return (
    <div className="note-container">
      <h2>MY NOTES</h2>
      <div className="note-container-notes">
        {
          notes.map((item) => (
            <Note 
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateNote={props.updateNote} 
            />
          ))
        }
      </div>
    </div>
  );
}
