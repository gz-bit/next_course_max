import { useRef, FormEvent } from 'react'
import Card from "../ui/Card"
import css from './NewMeetupFormStyles.module.css'

export interface MeetupData {
  title?: string 
  imageUrl?: string
  address?: string
  description?: string
}

interface Props {
  onNewData: (meetup: MeetupData) => void
}

const NewMeetupForm = ({onNewData}: Props) => {

  const titleRef = useRef<HTMLInputElement>(null)
  const imageUrlRef = useRef<HTMLInputElement>(null)
  const addressRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()

    const title = titleRef.current?.value 
    const imageUrl = imageUrlRef.current?.value
    const address = addressRef.current?.value
    const description = descriptionRef.current?.value

    const meetupNew: MeetupData = { 
      title, 
      imageUrl, 
      address, 
      description 
    }
    onNewData(meetupNew)
  }

  return(
    <Card>
     <form className={css.form} onSubmit={submitHandler}>
      <div className={css.control}>
        <label htmlFor="title">Meetup Title</label>
        <input id="title" type="text" required ref={titleRef} /> 
      </div>
      <div className={css.control}>
        <label htmlFor="imageUrl">Meetup Image URL</label>
        <input id="imageUrl" type="url" required ref={imageUrlRef} /> 
      </div>
      <div className={css.control}>
        <label htmlFor="address">Address</label>
        <input id="address" type="text" required ref={addressRef} /> 
      </div>
      <div className={css.control}>
        <label htmlFor="description">Meetup Title</label>
        <textarea id="description" rows={5} required ref={descriptionRef} /> 
      </div>
      <div className={css.actions}>
        <button>Add Meetup</button>
      </div>
     </form>
    </Card>
  )
}
export default NewMeetupForm