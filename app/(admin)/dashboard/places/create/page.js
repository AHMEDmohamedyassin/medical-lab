'use client'
import ImageInputs from '@/app/(admin)/components/ImageInputs'
import InputCollectionComp from '@/app/(admin)/components/InputCollectionComp'
import InputComp from '@/app/(admin)/components/InputComp'
import PageContainerComp from '@/app/(admin)/components/PageContainerComp'
import { randomName } from '@/app/(admin)/hooks/methods'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [name , setName] = useState(randomName())
  return (
    <PageContainerComp title={'إنشاء فرع'} >
        <div className='flex justify-start items-center gap-2 mt-6'>
            <label className='text-gray-500 text-lg'>فرع رئيسي ؟</label>
            <input onChange={(e) => e.target.checked ? setName('main_place') : setName(randomName())} className='w-6 h-6 hover:cursor-pointer' type='checkbox'/>
        </div>
        <InputCollectionComp clickJustEvent={() => setName(randomName())}  path={`/places/${name}.json`}>
          <InputComp name={'name'} label={'الاسم'} />
          <InputComp name={'location'} label={'العنوان'} />
          <InputComp name={'phone_array'} label={'رقم الهاتف'} />
        </InputCollectionComp>
    </PageContainerComp>
  )
}

export default page