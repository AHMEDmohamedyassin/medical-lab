'use client'
import React, { useState } from 'react'
import InputComp from '../../components/InputComp'
import InputCollectionComp from '../../components/InputCollectionComp'
import PageContainerComp from '../../components/PageContainerComp'
import ImageInputs from '../../components/ImageInputs'
import ImageForm from '../../components/ImageForm'

const page = () => {

  return (
      <PageContainerComp title={'تواصل معنا'}>

        <ImageForm title={'صورة الصفحة'} path={'/contact/contact_page_image.jpg'} />
        <ImageForm title={'الصورة الرئيسية'} path={'/contact/image_1.jpg'}  />
        <ImageForm title={'الصورة الفرعية'} path={'/contact/image_2.jpg'}  />

        <InputCollectionComp path={'/contact/social_url.json'} title={'روابط وسائل التواصل الإجتماعي'}>
          <InputComp  name={'facebook'} label={<img className='w-6 h-6' src='/icon/facebook.svg' />} placeholder={'ادخل الرابط'} type={'text'} />
          <InputComp  name={'instegram'} label={<img className='w-6 h-6' src='/icon/instegram.svg' />} placeholder={'ادخل الرابط'} type={'text'} />
          <InputComp  name={'youtube'} label={<img className='w-6 h-6' src='/icon/youtube.svg' />} placeholder={'ادخل الرابط'} type={'text'} />
        </InputCollectionComp>

        <InputCollectionComp path={'/contact/info.json'} title={'معلومات التواصل'} >
          <InputComp name={'email'} label={'البريد الإليكتروني'} />
          <InputComp name={'phone'} label={'رقم الهاتف'} />
          <InputComp name={'workingHours'} label={'مواعيد العمل'} />
        </InputCollectionComp>

      </PageContainerComp>

  )
}

export default page