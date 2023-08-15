'use client'
import ImageInputs from '@/app/(admin)/components/ImageInputs'
import InputCollectionComp from '@/app/(admin)/components/InputCollectionComp'
import InputComp from '@/app/(admin)/components/InputComp'
import PageContainerComp from '@/app/(admin)/components/PageContainerComp'
import { randomName } from '@/app/(admin)/hooks/methods'
import React, { useEffect, useState } from 'react'

const page = () => {
  return (
    <PageContainerComp title={'إنشاء فرع'} >
        <InputCollectionComp  path={`/places/${randomName}.json`}>
          <InputComp name={'name'} label={'الاسم'} />
          <InputComp name={'location'} label={'العنوان'} />
          <InputComp name={'phone_array'} label={'رقم الهاتف'} />
        </InputCollectionComp>
    </PageContainerComp>
  )
}

export default page