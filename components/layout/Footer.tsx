import Image from 'next/image'
import Link from 'next/link'
import { createBrotliCompress } from 'zlib'
import logo from '../../public/z-round-transparent.png'

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
    <div className="footer">
      <div  className='logo'>
      <Image 
        src={logo} alt="logo" 
        height="20em" width="20em"
      />
      </div>

      <div className='container'>
        <i>z-bit</i>
      </div>
      
      {crumbs.map((crumb, index) => 
        <div key={index}>
          <Link href={crumb.link}>
            {'>' + crumb.caption}
          </Link>
        </div>
      )}
      
      
    </div>
  )
}
export default Footer