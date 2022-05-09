import { useState, useEffect } from "react"
import Footer from "../../components/layout/Footer"
import NoteOperations from "../../components/evernote/NoteOperations"
import NoteDetails from "../../components/evernote/NoteDetails"
import css from './indexStyles.module.scss'

import { collection, addDoc, getDocs } from 'firebase/firestore'

const Evernote = () => {
  const crumbs = [
    {link: '/', caption: 'Home'},
    {link: '/evernote', caption: 'Evernote'},    
  ]

  const [noteId, setNoteId] = useState('')

  const getSingleNote = (id: string) => {
    setNoteId(id)
  }

  useEffect(() => {
    getSingleNote(noteId)
  }, [noteId])

  return (
    <>
      <h2>Evernote (understanding Firebase)</h2>
      <div className={css.container}>
        <div className={css.left}>
          <NoteOperations getSingleNote={getSingleNote} />
        </div>
        <div className={css.right}>
          <NoteDetails noteId={noteId} />
        </div>
      </div>

      <Footer crumbs={crumbs} />
    </>
  )
}
export default Evernote