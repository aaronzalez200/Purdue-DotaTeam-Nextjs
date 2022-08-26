import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Body from '../components/body'
import Achievements from '../components/achievements'

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Purdue Dota 2 Club</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
        <meta name="description" content="Official Website for the Purdue Dota 2 Club. A community for students who enjoy playing, watching, and competing in Dota 2." />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Navbar />
      <Body />
      <Achievements />
    </main>
  )
}
