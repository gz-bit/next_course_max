interface Props {
  onClick: () => void
}
const Backdrop = ({onClick}: Props) => {
  return (
    <div className="backdrop" onClick={onClick} />
  )
}
export default Backdrop