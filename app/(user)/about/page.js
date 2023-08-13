import React from 'react'
import HeaderComp from '../components/header/HeaderComp'
import Footer from '../components/footer/Footer'
import FixedEleComp from '../components/public/FixedEleComp'
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