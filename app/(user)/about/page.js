import React from 'react'
import PageTitleComp from '../components/public/PageTitleComp'
import HomeAboutComp from '../components/About/HomeAboutComp'
import WhyUsAboutPageComp from '../components/About/WhyUsAboutPageComp'

const page = () => {
  return (
    <>
        <PageTitleComp text={'معلومات عنا'} path={'about/about_page_image.jpg'}/>
        <HomeAboutComp/>
        <WhyUsAboutPageComp/>
    </>
  )
}

export default page