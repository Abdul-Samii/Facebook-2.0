import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Home = () =>{
  return(
    <div>
    <Head>
      <title>Facebook</title>
    </Head>

    {/* Header */}
    <Header/>
    <main>
        {/* Sidebar */}
        <Sidebar/>
        {/* Feed */}
        {/* Widgets */}
    </main>
    </div>
  )
}

export default  Home