import { useState, useEffect } from "react"

import Footer from "../../components/layout/Footer"
import css from './indexStyles.module.css'
import { 
  getAllNotes, getSingleNote, Note, emptyNote, 
  postNote, updateSingleNote, deleteSingleNote 
} from '../../components/evernotes/firebaseNotes'
import NoteList from '../../components/evernotes/NoteList'
import NoteDetail from "../../components/evernotes/NoteDetail"
import NoteEdit from "../../components/evernotes/NoteEdit"

const Flex = () => {
  const crumbs = [
    {link: '/', caption: 'Home'},
    {link: '/evernotes',caption: 'Evernotes'}    
  ]

  // 1. getAllNotes from Firebase
  const [allNotes, setAllNotes] = useState<Note[]>([])
  useEffect(() => {
    getAllNotes().then((notes) => setAllNotes(notes))
  }, [])
  // 2. display the notes in <NoteList/>
  //    in <NodeList />
  // 3. handle to add a note
 
  // 3. get back the selectedNoteId
  const [selectedNote, setSelectedNote] = useState(emptyNote)
  const [display, setDisplay] = useState(false)
  const [edit, setEdit] = useState(false)
  const [mode, setMode] = useState('update')

  const selectNote = (note: Note) => {
    console.log('Note selected: ', note.noteTitle)
    setSelectedNote(note)
    setDisplay(true)
  }

  const editNote = (note: Note) => {    // to open the editor
                                        // called from NoteDetail 
    setMode('update')
    setEdit(true)
  } 

  const addNote = () => {               // to open the editor
                                        // called from NoteList 
    setSelectedNote(emptyNote)
    setMode('create')
    setEdit(true)
  }

  // CRUD:

  const createNote = (note: Note) => {            // to save the edited note
                                        // called from NoteEdit
    console.log('Note add required')
    postNote(note.noteTitle, note.noteText)
      .then((id) => {
        console.log({id})
        getAllNotes().then(notes => setAllNotes(notes))
        getSingleNote(id).then(newNote => setSelectedNote(newNote))
      })
      .then(() => {
        setEdit(false)
        setDisplay(true)
      })
      
    ;
  

  }

  const updateNote = (note: Note) => {  // to save the edited note
                                        // called from NoteEdit
    console.log(`update note : ${note.noteTitle}`)
    updateSingleNote(note)
    getAllNotes()
      .then((notes) => setAllNotes(notes))
      .then(() => {
        setSelectedNote(note)
        setEdit(false)
      }
    )
  }
 
  const deleteNote = (note: Note) => {
    deleteSingleNote(note.id)
    getAllNotes().then((notes) => setAllNotes(notes))
    setDisplay(false)
  }

  return (
    <>
    
    <div className={css.flex}>
      <div className={css.header}><h2>Evernotes</h2></div>
      <div className={css.content}>
        <div className={css.left}>
            <div className={css.list}>
              <NoteList 
                notes={allNotes} 
                selectNote={selectNote}
                addNote={addNote}
              />  
            </div>
          </div>
          <div className={css.right}>        
            {display && !edit &&
              <div className={css.detail}>
                <NoteDetail 
                  note={selectedNote} 
                  editNote={editNote}
                  deleteNote={deleteNote} 
                />
              </div>
            }
            {edit &&
              <div className={css.edit}>
                <NoteEdit 
                  note={selectedNote}
                  updateNote={updateNote}
                  createNote={createNote}
                  mode={mode}
                />
              </div>
            }
            <div className={css.space}></div>
              <div className={css.todo}>
                <h2>Todo</h2>
                <ul>
                  <li>Make the outer frame fully responsive, 
                    so it fills always the full screen.</li>
                  <li>NoteList should have a constant, 
                    fully filling the left pannel</li>
                  <li>Hickups in NoteEdit with ReactQuill should be solved</li>
                </ul>
              </div>
            </div>
            
        </div>
        <div className={css.footer}>
          <Footer crumbs={crumbs} />
        </div>
      </div>
      </>
  )
}
export default Flex