'use client'
import React, { useState } from 'react'
import PageContainerComp from '../components/PageContainerComp'
import appointmentsHook from '../hooks/appointmentsHook'
import Loading from '../loading'

const page = () => {
  const {data_list , delete_handle , loading} = appointmentsHook()

  return (
    <PageContainerComp title={'الصفحةالرئيسية'}>
        {
          data_list.length ? (
            <div className='flex flex-col gap-4 w-full mb-10'>
              <div className='text-sky-500 text-lg'>المواعيد</div>
              
              {
                data_list.map((e , index) => (
                  <div key={index} className='flex justify-between items-start border-[1px] gap-4 hover:border-dsh hover:cursor-pointer p-4 w-full bg-white rounded text-dsh'>
                    <div className='flex justify-between items-center flex-wrap gap-2 w-10/12'>
                      <div className='flex items-center justify-start'>
                        <span className='text-sm text-gray-500 me-2 whitespace-nowrap'>الاسم : </span>
                        <p className='text-lg'> {e.name}</p>
                      </div>
                      <div className='flex items-center justify-start'>
                        <span className='text-sm text-gray-500 me-2 whitespace-nowrap'>الهاتف : </span>
                        <p className='text-lg'> {e.phone}</p>
                      </div>
                      <div className='flex items-center justify-start'>
                        <span className='text-sm text-gray-500 me-2 whitespace-nowrap'>الموضوع : </span>
                        <p className='text-lg'> {e.text}</p>
                      </div>
                    </div>
                    <span onClick={(ele) => delete_handle(e.id , ele)} className="material-symbols-outlined hover:text-red-500 hover:cursor-pointer">delete_forever</span>
                  </div>
                ))
              }
              
            </div>
          ) : !loading && data_list.length < 1 ? <div className='w-full p-4 text-center text-xl bg-sky-500 text-white rounded-lg'>لا يوجد حجوزات</div> :null
        }
        {
          loading? <Loading/> : null
        }
    </PageContainerComp>
  )
}

export default page