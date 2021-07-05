import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { getProfile } from '../lib/profile'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData()
  const profileData = await getProfile()
  return {
    props: {
      allPostsData,
      profileData,
    },
  }
}

type Props = {
  allPostsData: {
    id: string
    title: string
    date: string
  }[]
  profileData: {
    contentHtml: string
  }
}

export default function Home({ allPostsData, profileData }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2 className={utilStyles.headingLg}>Profile</h2>
        <div dangerouslySetInnerHTML={{ __html: profileData.contentHtml }} />
      </section>
      {/* <section>
        <h2 className={utilStyles.headingLg}>Profile</h2>
        <div dangerouslySetInnerHTML={{ __html: profileData.contentHtml }} />
      </section> */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <a href="https://forms.gle/vnQKqjfDH5FExHP17">お問い合わせ</a>
      </section>
    </Layout>
  )
}
