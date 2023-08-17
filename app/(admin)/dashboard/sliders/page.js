'use client'
import React, { useState } from 'react'
import slidersHook from '../../hooks/slidersHook'
import PageContainerComp from '../../components/PageContainerComp'
import ImageInputs from '../../components/ImageInputs'
import InputCollectionComp from '../../components/InputCollectionComp'
import InputComp from '../../components/InputComp'
import Loading from '../../loading'

const page = () => {

  const {setSlide_imgs , clickEvent , allSliders , delete_slider , loading_state} = slidersHook()

  return (
    <PageContainerComp title={'الصفحةالرئيسية'}>

        <ImageInputs title={'صورة الشرائح'} number={1} setImgs={setSlide_imgs} />

        <InputCollectionComp clickHandling={clickEvent} title={'بيانات الشرائح'}>
          <InputComp name={'data_A'} label={'عنوان 1'} />
          <InputComp name={'data_B'} label={'عنوان 2'} />
          <InputComp name={'data_C'} label={'وصف'} />
        </InputCollectionComp>

        {
          allSliders.length ? (
            <div className='flex flex-col gap-4 w-full mb-10'>
              <div className='text-sky-500 text-lg'>الشرائح</div>
              
              {
                allSliders.map((e , index) => (
                  <div key={index} className='flex justify-between items-center border-[1px] hover:border-dsh hover:cursor-pointer p-4 w-full bg-white rounded text-dsh'>
                    <p className='text-lg'>{e.title}</p>
                    <span onClick={(ele) => delete_slider(e , ele)} className="material-symbols-outlined hover:text-red-500 hover:cursor-pointer">delete_forever</span>
                  </div>
                ))
              }
              
            </div>
          ) : null
        }

        {
          loading_state ? <Loading/> :null
        }

    </PageContainerComp>
  )
}

export default page