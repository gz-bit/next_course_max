import css from './noteStyles.module.scss'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Note } from './firebaseNotes'
import { useState } from 'react'
import Module from 'module'

type Mode = 'update' | 'create'

interface Props {
  note: Note
  updateNote: (note: Note) => void
  createNote: (note: Note) => void
  mode: Mode
}

const NoteEdit = ({
  note, updateNote, createNote, mode
}: Props) => {
  
  const [id, setId] = useState(note.id)
  const [noteTitle, setTitle] = useState(note.noteTitle)
  const [noteText, setText] = useState(note.noteText)
  
  console.log({mode})

  const handleUpdate = () => {
    switch (mode) {
      case 'update': {
        updateNote({ id, noteTitle, noteText })
        break
      }
      case 'create': {
        createNote({ id, noteTitle, noteText })
        break
      }
      default: {
        console.log('kind in NoteEdit is neither update nor create.')
      }
    }
  }
  return (
    <div className={css.inputcontainer}>
    <input 
      className={css.input} 
      placeholder="Enter the Title ..." 
      value={noteTitle}
      onChange={(e) => setTitle(e.target.value)}
    />
    <div className={css.ReactQuill}>
      <ReactQuill 
        theme="snow"
        value={noteText} 
        onChange={setText}
      />
    </div>
    <button className={css.saveBtn} onClick={handleUpdate}>
      {mode === 'update' 
        ? <p>Update Note</p> 
        : <p>Create Note</p>
      }
    </button>
  </div>
  )
}
export default NoteEdit