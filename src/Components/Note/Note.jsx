import React from 'react';
import { MdDelete } from "react-icons/md";
import "./Note.css";

export default function Note(props) {
    
    const handleChange = (e) => {
        props.updateNote(props.note.id, e.target.value); 
    };

  
    const formatDate = (time) => {
        if (!time) return 'No time available'; 

        return time; 
    }

    return (
        <div className='note' style={{ backgroundColor: props.note.color }}>
            <textarea
                placeholder='What’s on your mind ?'
                className='note-textarea'
                value={props.note.text} 
                onChange={handleChange} 
            />
            <div className="bottom">
                <p>{formatDate(props.note.time)}</p>
                <span onClick={() => props.deleteNote(props.note.id)}>
                    <MdDelete />
                </span>
            </div>
        </div>
    );
}
