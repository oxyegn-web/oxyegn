import HomeContent1 from '@/components/HomeContent1'
import HomeContent2 from '@/components/HomeContent2'
import {Footer} from '@/components/Footer'
// import HomeContent3 from '@/components/HomeContent3'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
        <Navbar/>
        <HomeContent1/>
        <HomeContent2/>
        {/* <HomeContent3/> */}
        <Footer/>
    </>

  )
}

export default page
