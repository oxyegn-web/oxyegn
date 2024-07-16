// import Footer from '@/components/Footer'
import HomeContent1 from '@/components/HomeContent1'
import HomeContent2 from '@/components/HomeContent2'
// import HomeContent3 from '@/components/HomeContent3'
import Navbar from '@/components/Navbar'
import React from 'react'
import styles from '../page.module.scss';

const page = () => {
  return (
    <div>
        <Navbar/>
        <HomeContent1/>
        <HomeContent2/>
        {/* <HomeContent3/> */}
        {/* <Footer/> */}
    </div>

  //   <div>
  //   <Navbar />
  //   <div className={styles.contentWrapper}>
  //     <div className={styles.contentHalf}>
  //       <HomeContent1 />
  //     </div>
  //     <div className={styles.contentHalf}>
  //       <HomeContent2 />
  //     </div>
  //   </div>
  //   <HomeContent3 />
  //   <Footer />
  // </div>
  )
}

export default page
