'use client'
import Link from 'next/link'
import React from 'react'
import HeaderComp from './(user)/components/header/HeaderComp'
import Footer from './(user)/components/footer/Footer'

const not_found = () => {
  return (
    <body>
      <HeaderComp/>
      <div className='w-full mx-auto flex flex-col items-center justify-center my-20'>
          <div className='flex justify-center items-start sm:text-[200px] text-[120px] text-main2'>
              <div>4</div>
              <div>
                  <span className="material-symbols-outlined text-main" style={{fontSize:'180px'}}>sentiment_sad</span>
              </div>
              <div>4</div>
          </div>
          <div className='flex flex-col items-center'>
              <div className='font-semibold text-lg text-red-500'>حدثت مشكلة ما !  </div>
              <button onClick={() => reset()} className='bg-transparet border-[1px] border-main text-main py-[10px] px-10 font-semibold text-sm w-full md:w-fit hover:bg-main hover:text-white hover:border-transparent mt-4 '>إعادة المحاولة</button>
              <Link href={'/'} className='bg-white border-[2px] border-main2 text-main2 py-[10px] px-10 font-semibold text-sm w-full md:w-fit hover:bg-main2 hover:text-white hover:border-transparent mt-4 '>الذهاب للصفحة الرئيسية</Link>
          </div>
      </div>
      <Footer/>
    </body>
  )
}

export default not_found