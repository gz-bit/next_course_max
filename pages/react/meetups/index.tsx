import MainNavigation from '../../../components/layout/MainNavigation'
import Footer from "../../../components/layout/Footer"
import MeetupList from '../../../components/meetups/MeetupList'
import Layout from '../../../components/layout/Layout'

const Meetups = () => {
  const crumbs = [
    {link: '/', caption: 'Home'},
    {link: '/react', caption: 'React'},    
    {link: '/react/meetups', caption: 'Meetups'}
  ]
  const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ]

  return (
    <div>
      <Layout> 
     
              
          <h1>All Meetups</h1>
          <MeetupList meetups ={DUMMY_DATA} />
          <Footer crumbs={crumbs} />
         
      </Layout>  
  
    </div>
    
  )
}
export default Meetups