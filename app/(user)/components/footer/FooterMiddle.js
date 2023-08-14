import Link from 'next/link'
import React from 'react'

const FooterMiddle = () => {
  return (
    <>
        <div className='w-full xl:w-[1170px] flex justify-between  items-center p-10 flex-col lg:flex-row gap-6'>
            <div>
                <h1 className='font-bold text-2xl text-main2 mb-6'>روابط مفيدة</h1>
                <Link href={'/'} className='flex justify-start items-center gap-3 hover:cursor-pointer my-2'>
                    <span className="material-symbols-outlined text-main" style={{fontSize:20}}>arrow_back</span>
                    <p className='text-main2 font-bold hover:cursor-pointer hover:text-main'>الصفحة الرئيسية</p>
                </Link>
                <Link href={'/'} className='flex justify-start items-center gap-3 hover:cursor-pointer my-2'>
                    <span className="material-symbols-outlined text-main" style={{fontSize:20}}>arrow_back</span>
                    <p className='text-main2 font-bold hover:cursor-pointer hover:text-main'>الصفحة الرئيسية</p>
                </Link>
                <Link href={'/'} className='flex justify-start items-center gap-3 hover:cursor-pointer my-2'>
                    <span className="material-symbols-outlined text-main" style={{fontSize:20}}>arrow_back</span>
                    <p className='text-main2 font-bold hover:cursor-pointer hover:text-main'>الصفحة الرئيسية</p>
                </Link>
            </div>

            <div className='h-[200px] w-[1px] bg-gray-300 hidden lg:inline'></div>

            <Link href={'/'}>
                <img className='w-48 md:w-64' src='/icon/logo.svg' />
            </Link>
        </div>
        <div className='w-full h-[1px] bg-gray-300 '></div>
    </>
  )
}

export default FooterMiddle