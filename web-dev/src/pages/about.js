import Head from 'next/head'

import AboutInfo from '../components/AboutInfo';

export default function About() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutInfo />
    </div>
  )
}