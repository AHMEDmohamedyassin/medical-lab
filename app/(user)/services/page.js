import React from 'react'
import ServicesCardComp from '../components/services/ServicesCardComp'
import HeaderComp from '../components/header/HeaderComp'
import Footer from '../components/footer/Footer'
import FixedEleComp from '../components/public/FixedEleComp'

const page = () => {
  return (
    <>
        <div className='xl:w-[1170px] w-full px-10 mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-10'>
            <ServicesCardComp/>
            <ServicesCardComp/>
            <ServicesCardComp/>
            <ServicesCardComp/>
            <ServicesCardComp/>
            <ServicesCardComp/>
        </div>
    </>
  )
}

export default page