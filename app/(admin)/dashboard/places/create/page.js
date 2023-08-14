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
    <PageContainerComp title={'إنشاء فرع'}>
        <InputCollectionComp setData={setData}>
          <InputComp name={'location'} label={'الاسم'} />
          <InputComp name={'location'} label={'العنوان'} />
          <InputComp name={'phone_array'} label={'رقم الهاتف'} />
        </InputCollectionComp>
    </PageContainerComp>
  )
}

export default page