import Head from 'next/head'
import Layout, { title } from './layout'

import Hero from '../components/hero/hero'
import Markets from '../components/markets/Index'
import Feature01 from '../components/feature01/feature'
import Feature02 from '../components/feature02/feature'
import Team from '../components/team/team'



export default function Home() {
  return (
    
    <Layout home>
      <Head>
        <title>{title}</title>
      </Head>
      <Hero />
      <Markets />
      <Feature01 />
      <Feature02 />
      
      <Team />
    </Layout>
   
  )
}