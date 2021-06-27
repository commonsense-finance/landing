import Head from 'next/head'
import Layout, { title } from './layout'

import UserProfile from '../components/userProfile/userProfile'




export default function Profile() {
  return (
    <Layout >
      <Head>
        <title>{title}</title>
      </Head>
      <UserProfile />
      
      
    </Layout>
  )
}