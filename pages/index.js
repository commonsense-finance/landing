import Head from 'next/head'
import Layout, { title } from './layout'

import Hero from '../components/hero/hero'
import Feature01 from '../components/feature01/feature'
import Feature02 from '../components/feature02/feature'
import Indexs from '../components/indexs/indexs'
import Team from '../components/team/team'

import { TokenSetProvider } from '../contexts/TokenSetContext'

export default function Home() {
  return (
    <TokenSetProvider>
    <Layout home>
      <Head>
        <title>{title}</title>
      </Head>
      <Hero />
      <Feature01 />
      <Feature02 />
      <Indexs />
      <Team />
    </Layout>
    </TokenSetProvider>
  )
}