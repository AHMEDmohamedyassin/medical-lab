import React from 'react'
import ServicesCardComp from './ServicesCardComp'
import ButtonCustom from '../public/ButtonCustom'

const HomeServicesComp = () => {
  return (
    <div className='flex justify-center items-center flex-col my-12'>
        
        <div className='flex flex-col justify-center items-center'>
          <p className='text-main text-lg font-semibold'>خدماتنا</p>
          <h1 className='text-main2 text-2xl sm:text-3xl xl:text-4xl font-extrabold mt-2 mb-4'>اكتشف خدماتنا الرئيسية</h1>
          <p className='text-main2 text-md font-light'>فريقنا الممتاز جاهز ليكون جزءًا من فريقك للعمل في مجالات التشخيص المختلفة. العلماء يساعدون المجتمع من أجل حياة أفضل</p>
        </div>

        <div className='w-[1170px] my-10 py-2 flex justify-center items-start gap-x-6'>

            <ServicesCardComp/>
            <ServicesCardComp/>
            <ServicesCardComp/>

        </div>


        <ButtonCustom text={`حجز موعد`} textColor={'main'} hoverColor={'main'} />
    </div>
  )
}

export default HomeServicesComp