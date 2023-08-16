'use client'
import React, { useEffect, useState } from 'react'
import InputCollectionComp from '../../components/InputCollectionComp'
import InputComp from '../../components/InputComp'
import PageContainerComp from '../../components/PageContainerComp'
import ImageInputs from '../../components/ImageInputs'
import ImageForm from '../../components/ImageForm'

const page = () => {

  return (
      <PageContainerComp title={'معلومات عنا'}>
        <ImageForm title={'صورة الصفحة'} path={'/about/about_page_image.jpg'} />
        <ImageForm title={'صورة رئيسية'} path={'/about/image_1.jpg'} />
        <ImageForm title={'صورة فرعية'} path={'/about/image_2.jpg'} />

        <InputCollectionComp title={'البيانات'} path={'/about/file.json'} >
          <InputComp name={'data_A'} label={'العنوان الرئيسي'} />
          <InputComp name={'data_B'} label={'الوصف'} />
          <InputComp name={'data_C'} label={'عنوان فرعي'} />
          <InputComp name={'data_D'} label={'الوصف فرعي'} />
          <InputComp name={'data_E'} label={'وصف نهائي'} />
          <InputComp name={'data_F'} label={'وصف المميزات'} />
          <InputComp name={'data_G'} label={'عدد ساعات العمل'} />
        </InputCollectionComp>

      </PageContainerComp>
  )
}

export default page