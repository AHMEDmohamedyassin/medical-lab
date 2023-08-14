'use client'
import React, { useState } from 'react'
import InputComp from '../../components/InputComp'
import InputCollectionComp from '../../components/InputCollectionComp'
import PageContainerComp from '../../components/PageContainerComp'

const page = () => {
  const [socialMedia , setSocialMedia] = useState(null)
  const [contact , setContact] = useState(null)

  return (
      <PageContainerComp title={'تواصل معنا'}>
        <InputCollectionComp setData={setSocialMedia} title={'روابط وسائل التواصل الإجتماعي'}>
          <InputComp  name={'facebook'} label={<img className='w-6 h-6' src='/icon/facebook.svg' />} placeholder={'ادخل الرابط'} type={'text'} />
          <InputComp  name={'instegram'} label={<img className='w-6 h-6' src='/icon/instegram.svg' />} placeholder={'ادخل الرابط'} type={'text'} />
          <InputComp  name={'youtube'} label={<img className='w-6 h-6' src='/icon/youtube.svg' />} placeholder={'ادخل الرابط'} type={'text'} />
        </InputCollectionComp>

        <InputCollectionComp setData={setContact} title={'معلومات التواصل'} >
          <InputComp name={'location_array'} label={'العنوان'} />
          <InputComp name={'phone_array'} label={'رقم الهاتف'} />
          <InputComp name={'email'} label={'البريد الإليكتروني'} />
          <InputComp name={'workHours'} label={'مواعيد العمل'} />
        </InputCollectionComp>
      </PageContainerComp>

  )
}

export default page