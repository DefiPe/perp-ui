import Head from 'next/head'
// import { Inter } from 'next/font/google'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import Mac from '../components/mac'
import Features from '../components/features'
import Market from '../components/markets'
import Roadmap from '../components/roadmap'
import Newsletter from '../components/newsletter'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Raleway:wght@500&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Preahvihear&family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap" rel="stylesheet" />

    </Head>
      <Navigation></Navigation>
      <Hero></Hero>
      <Features></Features>
      <Market></Market>
      <Roadmap></Roadmap>
      {/* <Newsletter></Newsletter> */}
      {/* <Mac></Mac> */}
    </>
  )
}
