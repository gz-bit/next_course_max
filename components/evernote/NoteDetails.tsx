import { 
  getSingleNote, updateSingleNote, deleteSingleNote, Note 
} from './firebaseNotes'
import { useEffect, useState } from 'react'
import Router from 'next/router'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import css from './NoteStyles.module.scss'

interface Props {
  noteId: string
}

const NoteDetails = ({noteId}: Props) => {
  
  useEffect(() => {
    getNote()
  }, [noteId])

  const emptyNote = {
    noteId: '',
    noteTitle: '',
    noteText: '<p></p>'
  }
  
  const [note, setNote] = useState<Note>(emptyNote) // dispay
  
  const [isEdit, setIsEdit] = useState(false)
  const [noteTitle, setNoteTitle] = useState('')            // edit
  const [noteText, setNoteText] = useState('')              // edit
  
  const getEditData = () => {
    setNoteTitle(note.noteTitle)
    setNoteText(note.noteText)
    setIsEdit(true)
  }

  const getNote = () => {
    if (noteId !== '') {
      getSingleNote(noteId).then((note) => {
        if (note.noteId === '') {
          console.log(`ERROR: Note not found for ID: ${note.noteId}`)
        } else {
          setNote(note)
        }
      })
    }
  }

  const deleteNote = (id: string) => {
    deleteSingleNote(id).then(() => {
    
      console.log(`${noteTitle} deleted`)
      setNote(emptyNote)
      // reload page
    })
  }

  const updateNote = () => {
    console.log('udadeNote clicked')
    const editedNote = { noteId, noteTitle, noteText }
    
    updateSingleNote(editedNote).then(
      //() => window.location.reload()
      () => {
        setNoteTitle('')
        setNoteText('')
        setIsEdit(false)
        // reload page
      }
    )
  }
  
  return ( 
    <>
      <div>
        <button className={css.editBtn} onClick={getEditData}>
          Edit
        </button>
        <button 
          className={css.deleteBtn} 
          onClick={()=>deleteNote(note.noteId)}
        >
          Delete
        </button>
      </div>
      <h2>{note.noteTitle}</h2>
      <div dangerouslySetInnerHTML={{ __html: note.noteText}}></div> 
      {isEdit &&
        <div className={css.inputcontainer}>
          <input 
            className={css.input} 
            placeholder="Enter the Title ..." 
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <div className={css.ReactQuill}>
            <ReactQuill 
              value={noteText} 
              onChange={setNoteText}
            />
          </div>
          <button className={css.saveBtn} onClick={updateNote}>
            Update Note
          </button>
        </div>
      }
    </>
  )
} 
export default NoteDetails
