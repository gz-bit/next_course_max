import Link from 'next/link'
import Footer from '../../components/layout/Footer'

const ReactRefresher = () => {
  const crumbs = [
    {link: '/', caption: 'Home'},
    {link: '/react', caption: 'React'},
  ]
  return (
    <div className="container">
      <h1>React Refresher</h1>
      <ul>
        <li>
          <Link href="/react/todos/myTodos">My Todos</Link>
        </li>
        <li>
          <Link href="/react/meetups">
              Meetups (to demonstrate React Routing)
          </Link>
        </li>
      </ul>
      <Footer crumbs={crumbs} />
    </div>
  )
}
export default ReactRefresher
