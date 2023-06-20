import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts: { edges }, preview }) {
return (
    <Layout preview={preview}>
      <Head>
        <title>{`${CMS_NAME}`}</title>
      </Head>
      <Intro />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
