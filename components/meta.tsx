import React from "react";
import Head from 'next/head'

import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'
import Link from "next/link";

export default function Meta() {
  return (
    <Head>
      <Link
        rel="apple-touch-icon"        
        href="/favicon/apple-touch-icon.png"
      />
      <Link
        rel="icon"
        type="image/png"        
        href="/favicon/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"        
        href="/favicon/favicon-16x16.png"
      />
      <Link rel="manifest" href="/favicon/site.webmanifest" />
      <Link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <Link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
