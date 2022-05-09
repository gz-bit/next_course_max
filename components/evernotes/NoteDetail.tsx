import css from './noteStyles.module.scss'
import { Note } from './firebaseNotes'

interface Props {
  note: Note
  editNote: (note: Note) => void
  deleteNote: (note: Note) => void
  
}


const NoteDetail = ({ note, editNote, deleteNote }: Props) => {

  const handleEdit = () => {
    console.log('edit requested')
    editNote(note)
    return undefined
  } 
  
  const handleDelete = () => {
    console.log('delete requested')
    deleteNote(note)
  } 

  return ( 
    <>
      <h2>{note.noteTitle}</h2>
      <div dangerouslySetInnerHTML={{ __html: note.noteText}}></div> 
    
    <div>
    <button 
      className={css.editBtn} 
      onClick={() => editNote(note)}
    >
      Edit
    </button>
    <button 
      className={css.deleteBtn} 
      onClick={() => deleteNote(note)}
    >
      Delete
    </button>
  </div>
  </>
  )

}
export default NoteDetail