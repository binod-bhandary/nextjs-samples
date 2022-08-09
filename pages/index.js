import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from "next/link"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Features of ReactJs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>        
        <h1 className={styles.title}>
          Features Of React
        </h1>

        <div className={styles.grid}>
            grid lists
        </div>
      </div>
    </div>
  )
}
