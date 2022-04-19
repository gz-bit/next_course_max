import css from './LayoutStyles.module.css'
import MainNavigation from './MainNavigation'
import Footer from './Footer'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout = ({children}: Props) => {
  return(
    <div>
      <MainNavigation />
      <main className={css.main}>  
        {children}
      </main>
    </div>
  )
}
export default Layout