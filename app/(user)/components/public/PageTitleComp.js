import { getFile_url } from '@/app/firebase/storage'
import React from 'react'

const PageTitleComp = async ({ text , path}) => {
  const img = await getFile_url(path)
  return (
        <div className='w-full py-16 px-10 relative z-20' style={{
                backgroundImage:`url(${img})`,
                backgroundPosition:'center',
                backgroundSize:'cover'
            }}>
            <div className='absolute top-0 left-0 w-full h-full bg-gray-200/30 -z-10'></div>
            <div className='xl:w-[1170px] w-full mx-auto'>
                <h1 className='font-extrabold text-5xl border-s-main2 border-s-[5px] text-main2 px-4'>{text}</h1>
            </div>
        </div>
  )
}

export default PageTitleComp