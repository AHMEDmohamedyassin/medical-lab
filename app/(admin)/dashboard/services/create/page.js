'use client'
import ImageInputs from '@/app/(admin)/components/ImageInputs'
import InputCollectionComp from '@/app/(admin)/components/InputCollectionComp'
import InputComp from '@/app/(admin)/components/InputComp'
import PageContainerComp from '@/app/(admin)/components/PageContainerComp'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [data , setData] = useState(null)
  useEffect( () => {
    console.log(data)
  } , [data])
  return (
    <PageContainerComp title={'إنشاء خدمة'}>
      <InputCollectionComp setData={setData}>
        <ImageInputs setImgs={setData} title={'إضافة صورة'} number={1} />
        <InputComp name={'title'} label={'العنوان'} />
        <InputComp name={'description'} label={'الوصف'} />
      </InputCollectionComp>
    </PageContainerComp>
  )
}

export default page