import Footer from "../../../components/layout/Footer"
import css from './indexStyles.module.css'

const Flex = () => {
  const crumbs = [
    {link: '/', caption: 'Home'},
    {link: '/layouts', caption: 'Layouts'},
    {link: '/layouts/flex',caption: 'Flex'}    
  ]
  return (
    <>
      

      <div className={css.flex}>
        <div className={css.header}>
          One <h2>Flex</h2> Header
        </div>
        <div className={css.content}>
          <div className={css.left}>
            <div className={css.box2}>
              Two 
              <h2>Left</h2>
            </div>
          </div>
          <div className={css.right}>        
            <div className={css.box3}>
              Three 
              <h2>Right</h2>
              <h3>top</h3>
            </div>
            <div className={css.box4}>
              Four
              <h2>Right</h2>
              <h3>bottom</h3>
            </div>
          </div>
        </div>
        <div className={css.footer}>
          Five <Footer crumbs={crumbs} />
        </div>
      </div>
    </>
  )
}
export default Flex