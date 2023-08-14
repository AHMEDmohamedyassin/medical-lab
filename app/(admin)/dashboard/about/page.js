'use client'
import React, { useEffect, useState } from 'react'
import InputCollectionComp from '../../components/InputCollectionComp'
import InputComp from '../../components/InputComp'
import PageContainerComp from '../../components/PageContainerComp'

const page = () => {
  const [data , setData] = useState(null)
  useEffect(() => {
    console.log(data)
  } , [data])

  return (
      <PageContainerComp title={'معلومات عنا'}>
        <InputCollectionComp setData={setData}>
          <InputComp name={'data_A'} label={'العنوان الرئيسي'} />
          <InputComp name={'data_B'} label={'الوصف'} />
          <InputComp name={'data_C'} label={'الوصف'} />
          <InputComp name={'data_D'} label={'الوصف'} />
          <InputComp name={'data_E'} label={'سنين الخبرة'} />
        </InputCollectionComp>
      </PageContainerComp>
  )
}

export default page