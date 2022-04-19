import Footer from "../../../components/layout/Footer"
import Layout from "../../../components/layout/Layout"

interface Props {
  children: JSXElement
}

const Favourites = ({children}: Props) => {
  const crumbs = [
    {link: '/', caption: 'Home'},
    {link: '/react', caption: 'React'},   
    {link: '/react/meetups', caption: 'Meetups'}, 
    {link: '/react/meetups/favourites', caption: 'Favourites'},
  ]
  return (
    <Layout>
      <h1>Favoutite Meetups</h1>
      <main>
        {children}
      </main>
      <Footer crumbs={crumbs}/>
    </Layout>
  )
}
export default Favourites