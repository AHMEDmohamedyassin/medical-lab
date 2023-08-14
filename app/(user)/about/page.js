import React from 'react'
import PageTitleComp from '../components/public/PageTitleComp'
import HomeAboutComp from '../components/About/HomeAboutComp'
import WhyUsAboutPageComp from '../components/About/WhyUsAboutPageComp'

const page = () => {
  return (
    <>
        <PageTitleComp text={'معلومات عنا'} img={'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1600'}/>
        <HomeAboutComp/>
        <WhyUsAboutPageComp/>
    </>
  )
}

export default page