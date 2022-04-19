import Footer from "../../../components/layout/Footer"
import Layout from "../../../components/layout/Layout"
import NewMeetupForm, {MeetupData} 
  from "../../../components/meetups/NewMeetupForm"

const NewMeetup = () => {

  const URL = 'https://zreactmeetups-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'

  const crumbs = [
    {link: '/', caption: 'Home'},
    {link: '/react', caption: 'React'},   
    {link: '/react/meetups', caption: 'Meetups'}, 
    {link: '/react/meetups/newMeetup', caption: 'New'},
  ]

  const addMeetup = (meetupNew: MeetupData) => {
    fetch(
      URL,
      {
        method: 'POST',
        body: JSON.stringify(meetupNew),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }


  return (
    <Layout>
      <h1>New Meetup</h1>
      <NewMeetupForm onNewData={addMeetup} />
      <Footer crumbs={crumbs}/>
    </Layout>
  )
}
export default NewMeetup