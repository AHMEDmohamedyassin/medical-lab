'use client'
import React, { useEffect, useState } from 'react'
import InputCollectionComp from '../../components/InputCollectionComp'
import InputComp from '../../components/InputComp'
import PageContainerComp from '../../components/PageContainerComp'
import ImageInputs from '../../components/ImageInputs'

const page = () => {
  const [data , setData] = useState(null)
  useEffect(() => {
    console.log(data)
  } , [data])

  return (
      <PageContainerComp title={'معلومات عنا'}>
        <InputCollectionComp >
          <ImageInputs setImgs={setData} number={1} title={'إضافة صورة'} />
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