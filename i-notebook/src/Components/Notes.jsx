import React, { useContext } from 'react'
import noteContext from '../context/NoteContext';
import NoteItem from './NoteItem';

const Notes = () => {

  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className='my-4 row'>
      <h2 >Your Notes</h2>
        {notes.map((note) => {
          return <NoteItem note={note}/>
        })}
    </div>
  )
}

export default Notes
