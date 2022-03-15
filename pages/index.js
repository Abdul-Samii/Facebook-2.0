import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Home = () =>{
  return(
    <div className='h-screen bg-gray-100 overflow-hidden'>
    <Head>
      <title>Facebook</title>
    </Head>

    {/* Header */}
    <Header/>
    <main className='flex'>
        {/* Sidebar */}
        <Sidebar/>
        
        {/* Feed */}
        <Feed/>
        {/* Widgets */}
    </main>
    </div>
  )
}

export default  Home