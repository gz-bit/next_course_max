import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/layout/Footer'

const Home: NextPage = () => {
  return (
    <div className="container">
      <h2>Next.js & React - The Complete Guide</h2>
      <ul>
        <li>
          <Link href="/react">
            React Refresher
          </Link>
        </li>
        <li>
          <Link href="/evernote">
            Evernote (understanding Firebase)
          </Link>
        </li>
        <li>
          <Link href="/layouts">
            Layouts (Flexbox & CSS Grid) (dev)
          </Link>
        </li>
        <li>
          <Link href="/evernotes">
            Evernotes (Firebase, Layout, Optimised Components)
          </Link>
        </li>
      </ul>
      <Footer crumbs={[]} />
    </div>
  )
}
export default Home
