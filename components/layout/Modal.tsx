interface Props{
  cancel: () => void
  confirm: (todo: string) => void
}

const Modal = ({cancel, confirm}: Props) => {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancel}>Cancel</button>
      <button className="btn" onClick={confirm}>Confirm</button>
    </div>
  )
}
export default Modal