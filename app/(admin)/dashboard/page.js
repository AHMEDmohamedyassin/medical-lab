'use client'
import React, { useState } from 'react'
import PageContainerComp from '../components/PageContainerComp'
import ImageInputs from '../components/ImageInputs'
import InputCollectionComp from '../components/InputCollectionComp'
import InputComp from '../components/InputComp'
import dashboardMainHook from '../hooks/dashboardMainHook'

const page = () => {

  const {setImgs , setSlide_imgs , clickEvent , setServicesImg , setContactImg , setAboutImg , imgUploadHandle} = dashboardMainHook()

  return (
    <PageContainerComp title={'الصفحةالرئيسية'}>
        <InputCollectionComp clickEvent={clickEvent} title={'بيانات الشرائح'}>
          <ImageInputs title={'صورة'} number={1} setImgs={setSlide_imgs} />
          <InputComp name={'data_A'} label={'عنوان 1'} />
          <InputComp name={'data_B'} label={'عنوان 2'} />
          <InputComp name={'data_C'} label={'وصف'} />
        </InputCollectionComp>

        <div className='flex flex-col gap-4 w-full'>
          <div className='text-sky-500 text-lg'>الشرائح</div>
          
          <div href={'/dashboard'} className='flex justify-between items-center border-[1px] hover:border-dsh hover:cursor-pointer p-4 w-full bg-white rounded text-dsh'>
            <p className='text-lg'>العنوان</p>
            <span className="material-symbols-outlined hover:text-red-500 hover:cursor-pointer">delete_forever</span>
          </div>
          
          <div href={'/dashboard'} className='flex justify-between items-center border-[1px] hover:border-dsh hover:cursor-pointer p-4 w-full bg-white rounded text-dsh'>
            <p className='text-lg'>العنوان</p>
            <span className="material-symbols-outlined hover:text-red-500 hover:cursor-pointer">delete_forever</span>
          </div>
        </div>

      <div className='my-10'></div>
      
      <PageContainerComp title={'صور الموقع'}>
        <div className='flex flex-wrap justify-start items-center gap-6'>
            <div className='w-full flex justify-start items-center gap-x-4 gap-y-2 flex-wrap'>
              <div>
                <ImageInputs setImgs={setContactImg} title={'صورة تواصل معنا'} number={1} />
              </div>
                <button onClick={() => imgUploadHandle('contact') } className='py-1 px-4 bg-transparent text-dsh border-[1px] border-dsh hover:bg-dsh hover:text-white rounded'>إرسال</button>
            </div>
            <div className='w-full flex justify-start items-center gap-x-4 gap-y-2 flex-wrap'>
              <div>
                <ImageInputs setImgs={setAboutImg} title={'صورة معلومات عنا'} number={1} />
              </div>
                <button onClick={() => imgUploadHandle('about') } className='py-1 px-4 bg-transparent text-dsh border-[1px] border-dsh hover:bg-dsh hover:text-white rounded'>إرسال</button>
            </div>
            <div className='w-full flex justify-start items-center gap-x-4 gap-y-2 flex-wrap'>
              <div>
                <ImageInputs setImgs={setServicesImg} title={'صورة خدماتنا'} number={1} />
              </div>
                <button onClick={() => imgUploadHandle('service') } className='py-1 px-4 bg-transparent text-dsh border-[1px] border-dsh hover:bg-dsh hover:text-white rounded'>إرسال</button>
            </div>
        </div>
      </PageContainerComp>

    </PageContainerComp>
  )
}

export default page