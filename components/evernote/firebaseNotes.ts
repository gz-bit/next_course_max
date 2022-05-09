import { 
  getFirestore,  collection, 
  doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'
  import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDaMPihC6ZZn9CFvrHm84u6ZL7m4sAvgH0",
  authDomain: "zevernote-20db1.firebaseapp.com",
  projectId: "zevernote-20db1",
  storageBucket: "zevernote-20db1.appspot.com",
  messagingSenderId: "896742339476",
  appId: "1:896742339476:web:b98291e4432a4657b45581",
  measurementId: "G-KFTVF1XY44"
}

export const db = getFirestore(initializeApp(firebaseConfig))
const dbNotes = collection(db, 'notes')

export interface Note {
  noteId: string,
  noteTitle: string,
  noteText: string
}

export const postNote = async (noteTitle: string, noteText: string) => {
  await addDoc(dbNotes, { noteTitle, noteText })  
  //return 'OK'  
}

export const updateSingleNote = async (note: Note) => {
  const id = note.noteId
  const {noteTitle, noteText} = note
  const docRef = doc(db, 'notes', id)
  await updateDoc(docRef, { noteTitle, noteText })
}

export const deleteSingleNote = async (id: string) => {
  const docRef = doc(db, 'notes', id)
  await deleteDoc(docRef)
}

// getAllNotes returns a Promise that has to be resolved like this:
// getAllNotes().then((notes) => setNotesArray(notes))
export const getAllNotes = async () => {
  const notes: Note[] = []
  let note: Note
  await getDocs(dbNotes)
    .then((data) => {
      data.docs.map((item) => {
        const noteId = item.id // comes from Firestore
        const noteTitle = item.data().noteTitle // is required
        const noteText = item.data().noteText || '<p></p>'
        notes.push({ noteId, noteTitle, noteText })
      })
    })
  ;
  return notes
}

export const getSingleNote = async (id: string) => {
  let note: Note
  const docRef = doc(db, 'notes', id)
  const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      note = { ...docSnap.data(), noteId: id }
    } else {
      const error = (`No notes found with id: ${id}`)
      console.log(error)
      note = {
        noteId: '',
        noteTitle: '',
        noteText: '<p></p>'
      }
    }
    return note 
}