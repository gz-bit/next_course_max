import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/layout/Footer'

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>Next.js & React - The Complete Guide</h1>
      <ul>
        <li>
          <Link href="/react">
            React Refresher
          </Link>
        </li>
      </ul>
      <Footer crumbs={[]} />
    </div>
  )
}
export default Home
