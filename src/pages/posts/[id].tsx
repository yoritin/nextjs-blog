import { GetStaticPaths,GetStaticProps } from 'next'
import Head from 'next/head'
import { VFC } from 'react'

import Date from '@/components/date'
import Layout from '@/components/layout'
import { getAllPostIds, getPostData } from '@/lib/posts'
import utilStyles from '@/styles/utils.module.css'

type Props = {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData,
    },
  }
}

const Post: VFC<Props> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export default Post
