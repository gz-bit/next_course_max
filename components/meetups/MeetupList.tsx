import css from './MeetupListStyles.module.css'
import MeetupItem, { Meetup } from './MeetupItem'

interface Props {
  meetups: Meetup[]
}

const MeetupList = ({meetups}: Props) => {
 
  return (
    <ul className={css.list}>
      {meetups.map(m => <MeetupItem meetup={m} key={m.id} />)}
    </ul>
  )
}
export default MeetupList