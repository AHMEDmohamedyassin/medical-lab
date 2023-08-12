import React from 'react'
import ServicesCardComp from './ServicesCardComp'

const HomeServicesComp = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='w-[1170px] my-10 py-2 flex justify-start items-start gap-x-6 overflow-x-scroll'>

            <ServicesCardComp/>
            <ServicesCardComp/>
            <ServicesCardComp/>
            <ServicesCardComp/>
            <ServicesCardComp/>
            <ServicesCardComp/>
            <ServicesCardComp/>
            <ServicesCardComp/>
            <ServicesCardComp/>
            <ServicesCardComp/>
            <ServicesCardComp/>

        </div>
    </div>
  )
}

export default HomeServicesComp