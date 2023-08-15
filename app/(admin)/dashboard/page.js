'use client'
import React, { useState } from 'react'
import PageContainerComp from '../components/PageContainerComp'
import ImageInputs from '../components/ImageInputs'
import InputCollectionComp from '../components/InputCollectionComp'
import InputComp from '../components/InputComp'
import dashboardMainHook from '../hooks/dashboardMainHook'
import ImageForm from '../components/ImageForm'

const page = () => {

  const {setSlide_imgs , clickEvent , setServicesImg , setContactImg , setAboutImg , imgUploadHandle , allSliders} = dashboardMainHook()

  return (
    <PageContainerComp title={'الصفحةالرئيسية'}>
        <InputCollectionComp clickEvent={clickEvent} title={'بيانات الشرائح'}>
          <ImageInputs title={'صورة'} number={1} setImgs={setSlide_imgs} />
          <InputComp name={'data_A'} label={'عنوان 1'} />
          <InputComp name={'data_B'} label={'عنوان 2'} />
          <InputComp name={'data_C'} label={'وصف'} />
        </InputCollectionComp>

        {
          allSliders.length ? (
            <div className='flex flex-col gap-4 w-full'>
              <div className='text-sky-500 text-lg'>الشرائح</div>
              
              {
                allSliders.map((e , index) => (
                  <div key={index} className='flex justify-between items-center border-[1px] hover:border-dsh hover:cursor-pointer p-4 w-full bg-white rounded text-dsh'>
                    <p className='text-lg'>{e.title}</p>
                    <span className="material-symbols-outlined hover:text-red-500 hover:cursor-pointer">delete_forever</span>
                  </div>
                ))
              }
              
            </div>
          ) : null
        }

      <div className='my-10'></div>
      
      <PageContainerComp title={'صور الموقع'}>
        <div className='flex flex-wrap justify-start items-center gap-6'>
            <ImageForm title={'صورة خدماتنا'} path={'/images/service_page_image.jpg'} />
            <ImageForm title={'صورة معلومات عنا'} path={'/images/about_page_image.jpg'} />
            <ImageForm title={'صورة تواصل معنا'} path={'/images/contact_page_image.jpg'} />
        </div>
      </PageContainerComp>

    </PageContainerComp>
  )
}

export default page