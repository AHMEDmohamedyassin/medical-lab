'use client'
import React, { useEffect } from 'react'
import PageContainerComp from '../../components/PageContainerComp'
import servicesHook from '../../hooks/servicesHook'
import Loading from '../../loading'

const page = () => {
  const {services , get_services , loading_state , deletingFileHandle} = servicesHook()

  useEffect(() =>{ 
    get_services() 
  }, [])

  return (
    <PageContainerComp title={'الخدمات'}>
      <div className='flex flex-col gap-y-4 w-full px-2 '>
        
        {
          services.map((e , index) => (
            <div key={index} className='flex justify-between items-center border-[1px] hover:border-dsh hover:cursor-pointer p-4 w-full bg-white rounded text-dsh'>
              <p className='text-lg'>{e.title}</p>
              <span onClick={(ele) => deletingFileHandle(e , ele)} className="material-symbols-outlined hover:text-red-500 hover:cursor-pointer">delete_forever</span>
            </div>
          ) )
        }

      {
        loading_state? <Loading/> : null
      }
        
      </div>
    </PageContainerComp>
  )
}

export default page