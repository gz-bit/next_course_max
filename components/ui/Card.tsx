import { ReactNode } from 'react'
import css from './CardStyles.module.css'

interface Props {
  children: ReactNode
}
const Card = ({children}: Props ) => {
  return (
    <div className={css.card}>
      {children}
    </div>
  )
}
export default Card