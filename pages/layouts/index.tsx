import Link from 'next/link'
import { useState } from 'react'
import Footer from '../../components/layout/Footer'
import css from './indexStyles.module.css'

const Layouts = () => {

  const crumbs = [
    {link: '/', caption: 'Home'},
    {link: '/layouts', caption: 'Layouuts'},    
  ]

  const flex = `
    Flexbox was designed for layout in one dimension - 
    either a row or a column.
  `
  const grid = `
  Grid was designed for two-dimensional layout - rows, and columns at the same time. 
  `

  const [layout, setLayout] = useState(css.flex)
  const [title, setTitle] = useState('Flexbox')
  const [text, setText] = useState(flex)

  const setFlex = () => {
    setLayout(css.flex)
    setTitle('Flexbox')
    setText(flex)
  }

  const setGrid = () => {
    setLayout(css.grid)
    setTitle('CSS Grid')
    setText(grid)
  }

  return (
    <div className="container">
      <h2>Layouts</h2>
      <ul>
        <li>
          <Link href="/layouts/responsiveMobile">
            Responsive Mobile Layout (Flexbox)
          </Link>
        </li>
        <li>
          <Link href="/layouts/flex">
            Flex
          </Link>
        </li>
        <li>
          <Link href="/layouts/grid">
            Grid
          </Link>
        </li>
      </ul>
      <h3 className={css.title}>See the Difference</h3>
      <button className='btn' onClick={setFlex}>FlexBox</button>  
      <button className='btn' onClick={setGrid}>css Grid</button>  

      <h4>{title}</h4>
      <div className={css.text}>{text}</div>
      <div className={layout}>
        <div className={css.div}>One</div>
        <div className={css.div}>Two</div>
        <div className={css.div}>Three</div>
        <div className={css.div}>Four</div>
        <div className={css.div}>Five</div>
      </div>


      <Footer crumbs={crumbs} />
    </div>
  )
}
export default Layouts