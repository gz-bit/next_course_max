import Image from "next/image"
import css from './MeetupItemStyles.module.css'
import Card from "../ui/Card"

export interface Meetup {
  id: string
  imageUrl: string
  title: string
  address: string
  description: string
}

interface Props {
  meetup: Meetup
}

const MeetupItem = ({meetup}: Props) => {
  const {id, imageUrl, title, address, description} = meetup
  return (
    <li className={css.item}>
      <Card>
        <div className={css.image}>
          <Image 
            src={imageUrl} 
            alt={title}  
            layout="responsive"
            width="100%"  
            height="100%"
          />    
        </div>
        <div className={css.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={css.actions}>
          <button>Add as Favourite</button>
        </div>
      </Card>
    </li>
  )
}
export default MeetupItem