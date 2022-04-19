import Link from 'next/link'
import classes from './MainNavigationStyles.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/react/meetups">All Meetups</Link>
          </li>
          <li>
            <Link href="/react/meetups/newMeetup">Add New Meetup</Link>
          </li>
          <li>
            <Link href="/react/meetups/favourites">My Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default MainNavigation