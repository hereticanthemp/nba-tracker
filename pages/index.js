import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Standing from './components/standing'
import Leaders from './components/daily_lead_player'

import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href='/game'>Go to Game detail</Link>
        <Standing></Standing>
        <Leaders></Leaders>
      </main>
    </div>
  )
}
