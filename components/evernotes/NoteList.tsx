import css from './noteStyles.module.scss'
import { useState, useEffect } from 'react'
import { Note } from './firebaseNotes'

interface Props {
  notes: Note[]
  selectNote: (note: Note) => void
  addNote: () => void
}

const NoteList = ({notes, selectNote, addNote}: Props) => {

  const [notesArray, setNotesArray] = useState<Notes[]>([])

  useEffect(() => {
    setNotesArray(notes)
  }, [notes])
 
  let addButtonDisabled = false
  //const onSelectNote = (note: Note) => selectNote(note)
  const onAddNote = () => {
    addButtonDisabled = true
    addNote()
  }

  return(
    <div className={css.container}>
      <div className={css.btnContainer}>
        <button 
          className={css.button}
          onClick={onAddNote}
          disabled={addButtonDisabled}
        >
          Add a New Note
        </button>
      </div>
    
      <div className={css.notesDisplay}>
        {notesArray.map((note: Note) => {
          const el = document.createElement('div')
          return (
            <div 
              key={note.id} 
              className={css.notesInner}
              onClick={() => selectNote(note)}
            >
              <h4>{note.noteTitle}</h4>
              {/* <div dangerouslySetInnerHTML={{__html: note.noteText}}></div> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default NoteList