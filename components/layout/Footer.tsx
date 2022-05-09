import Image from 'next/image'
import Link from 'next/link'
import { createBrotliCompress } from 'zlib'
import logo from '../../public/z-round-transparent.png'
import css from './LayoutStyles.module.css'

interface Crumb {
  link: string
  caption: string
}

interface Params {
  crumbs: Crumb[]
}

const Footer = (params: Params) => {
  const crumbs = params.crumbs
  const links: JSXElement[] = []
  
  return (
    <div className={css.footer}>
      <div  className='logo'>
      <Image 
        src={logo} alt="logo" 
        height="20em" width="20em"
      />
      </div>

      <div className={css.element}>
        <b><i>z-bit</i></b>
      </div>
      
      {crumbs.map((crumb, index) => 
        <div key={index} className={css.element} >
          <Link href={crumb.link}>
            {'>' + crumb.caption}
          </Link>
        </div>
      )}
      
      
    </div>
  )
}
export default Footer