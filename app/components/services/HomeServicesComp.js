import React from 'react'
import ServicesCardComp from './ServicesCardComp'

const HomeServicesComp = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='w-[1170px] py-10 flex justify-between items-start gap-x-6'>

            <ServicesCardComp/>

        </div>
    </div>
  )
}

export default HomeServicesComp