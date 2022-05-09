import { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import css from './NoteStyles.module.scss'

import { getAllNotes, postNote, Note } from './firebaseNotes'



interface Props {
  getSingleNote: (id: string) => void
}

const NoteOperations = ({getSingleNote}: Props) => {

  const [inputVisible, setInputVisible] = useState(false)
  const toggleInput = () => setInputVisible(!inputVisible) 
  const [noteTitle, setNoteTitle] = useState('')
  const [noteText, setNoteText] = useState('')
  const [notesArray, setNotesArray] = useState<Note[]>([])

  useEffect(() => {
    getAllNotes().then((notes) => setNotesArray(notes))
  }, [])

  const saveNote = () => {
    postNote(noteTitle, noteText)
    setNoteTitle('')
    setNoteText('')
    setInputVisible(false)
    getAllNotes().then((notes) => setNotesArray(notes))
  }

  const getText = (value: string) => setNoteText(value)

  return(
    <>
      <div className={css.btnContainer}>
        <button 
          className={css.button}
          onClick={toggleInput}
        >
          Add a New Note
        </button>
      </div>
      {inputVisible &&
        <div className={css.inputContainer}>
          <input 
            placeholder="Enter the Title ..." 
            className={css.input} 
            onChange={(e) => setNoteTitle(e.target.value)}
            value={noteTitle}
            required
          />
          <div className={css.ReactQuill}>
            <ReactQuill onChange={getText} value={noteText} />
          </div>
          <button 
            className={css.saveBtn}
            onClick={saveNote}
          >
            Save Note
          </button>
        </div>
      }
      <div className={css.notesDisplay}>
        {notesArray.map((note: Note) => {
          const el = document.createElement('div')
          return (
            <div 
              key={note.noteId} 
              className={css.notesInner}
              onClick={() => getSingleNote(note.noteId)}
            >
              <h4>{note.noteTitle}</h4>
              {/* <div dangerouslySetInnerHTML={{__html: note.noteText}}></div> */}
            </div>
          )
        })}
      </div>
    </>
  )
}
export default NoteOperations