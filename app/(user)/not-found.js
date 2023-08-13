import Link from 'next/link'
import React from 'react'

const not_found = () => {
  return (
    <div className='max-w-[1026px] mx-auto flex flex-col items-center my-20'>
        <div className='flex justify-center items-start sm:text-[200px] text-[150px]'>
            <div>4</div>
            <div>
                <span className="material-symbols-outlined" style={{fontSize:'180px'}}>sentiment_sad</span>
            </div>
            <div>4</div>
        </div>
        <div className='flex flex-col items-center'>
            <div className='font-semibold text-lg text-red-500'>حدثت مشكلة ما !  </div>
            <Link href={'/'} className='bg-[#222] border-[1px] border-[#222] text-white py-[10px] px-10 font-semibold text-sm w-full md:w-fit hover:bg-gray-500 hover:text-white hover:border-transparent mt-4 '>الذهاب للصفحة الرئيسية</Link>
        </div>
    </div>
  )
}

export default not_found