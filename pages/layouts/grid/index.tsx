import Footer from "../../../components/layout/Footer"

const Cssgrid = () => {
  const crumbs = [
    {link: '/', caption: 'Home'},
    {link: '/layouts', caption: 'Layouts'},
    {link: '/layouts/grid',caption: 'Grid'}    
  ]
  return (
    <>
      <h2>CSS Grid</h2>
      <h4>Since the layout for Evernotes worked so well with flexbox, I did not bother.</h4>
      <p>- but leave the structure for forther exploratio -</p>
      <Footer crumbs={crumbs} />
    </>
  )
}
export default Cssgrid