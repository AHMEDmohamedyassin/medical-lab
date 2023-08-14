'use client'
import React, { useEffect, useState } from 'react'
import InputComp from '../../components/InputComp'
import InputCollectionComp from '../../components/InputCollectionComp'

const page = () => {
  const [socialMedia , setSocialMedia] = useState(null)
  useEffect(() => {
    console.log(socialMedia)
  } , [socialMedia])
  return (
    <div className='flex flex-col items-start justify-start'>
        <div className='w-full text-sky-500 text-xl my-4'>الخدمات</div>

        <InputCollectionComp setData={setSocialMedia} title={'روابط وسائل التواصل الإجتماعي'}>
          <InputComp  name={'facebook'} label={<img className='w-6 h-6' src='/icon/facebook.svg' />} placeholder={'ادخل الرابط'} type={'text'} />
          <InputComp  name={'instegram'} label={<img className='w-6 h-6' src='/icon/instegram.svg' />} placeholder={'ادخل الرابط'} type={'text'} />
          <InputComp  name={'youtube'} label={<img className='w-6 h-6' src='/icon/youtube.svg' />} placeholder={'ادخل الرابط'} type={'text'} />
        </InputCollectionComp>

        <InputCollectionComp title={'معلومات التواصل'} >
          <InputComp name={'location'} label={'العنوان'} />
          <InputComp name={'phone'} label={'رقم الهاتف'} addable={true} />
          <InputComp name={'email'} label={'البريد الإليكتروني'} />
        </InputCollectionComp>
    </div>
  )
}

export default page