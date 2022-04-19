import { useState } from "react"

import Modal from '../layout/Modal'
import Backdrop from '../layout/Backdrop'

interface Props {
  title: string
}

const Todo = ({title}: Props) => {

  const [modal, setModal] = useState(false)

  const showModal = () => setModal(true)
  const closeModal = () => setModal(false)

  const confirmHandler = () => {
    console.log('deleted: ', title)
    closeModal()
  }

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={showModal}>Delete</button>
      </div>
      {modal && <>
        <Modal cancel={closeModal} confirm={confirmHandler} />
        <Backdrop onClick={closeModal} />
      </>}
    </div>
  )
}
export default Todo