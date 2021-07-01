import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pouffer: Teach Your Kid to Code Together</title>
        <meta name="description" content="Pouffer: Teach Your Kid to Code Together" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello World
    </div>
  )
}
