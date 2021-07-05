import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Makoto Katayori'
export const siteTitle = 'Yori Portfolio'

type Props = {
  children: React.ReactNode
  home?: boolean
}

export default function Layout({ children, home }: Props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Yori Portfolio" />
        <meta
          property="og:image"
          content="https://nextjs-blog-yoritin.vercel.app/twitter-card.jpg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerTitle}>Yori Portfolio</div>
        <ul className={styles.headerList}>
          <li>About</li>
          <li>Works</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </header>
      <div className={styles.container}>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
