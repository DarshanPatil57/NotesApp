import React, { useState, useEffect } from 'react';
import "../src/App.css";
import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  const getSavedNotes = () => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : []; 
  };


  const defaultNotes = [
    {
      id: "1",
      text: "Life is full of errors just like my code! But remember every bug is a feature waiting to be discovered. 😅",
      color: "#fd5050",
      time: "4:40 PM 2024",
    },
    {
      id: "2",
      text: "What’s on your mind ?",
      color: "#fd6050",
      time: "8:40 PM  2024",
    },
  ];

  const [notes, setNotes] = useState(() => {
    const savedNotes = getSavedNotes();
    return savedNotes.length > 0 ? savedNotes : defaultNotes; 
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes)); // Save notes to localStorage
  }, [notes]);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours() % 12 || 12; 
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    const day = now.getDate().toString().padStart(2, '0');
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();

    return `${hours}:${minutes} ${ampm} ${day} ${month} ${year}`;
  };

  const addNote = (color) => {
    const newNote = {
      id: Date.now() + "" + Math.floor(Math.random() * 70),
      text: "",
      time: getCurrentTime(),
      color,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  const updateNote = (id, newText) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, text: newText } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div className='App'>
      <Sidebar addNote={addNote} />
      <NoteContainer notes={notes} deleteNote={deleteNote} updateNote={updateNote} />
    </div>
  );
}

export default App;
