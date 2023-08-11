'use client'
import React from 'react'

const ServicesCardComp = () => {
    const hoverHandle = () => {
        console.log('hover')
    }
  return (

    <div onMouseEnter={hoverHandle} onMouseLeave={hoverHandle} className='h-[380px] w-[360px] flex flex-col items-center justify-start shadow-md shadow-sky-200 rounded-md overflow-hidden'>
        <div className='h-2/4 w-full relative' style={{
                backgroundImage : `url('https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
                backgroundPosition:'center',
                backgroundSize:'cover'
            }}>
                <div className='w-full h-full absolute top-0 left-0 bg-main2/75'></div>
        </div>
        <div className='flex justify-between items-center px-4 h-2/4 gap-x-4'>
            <div className='relative w-36'>
                <div className="z-10 centering_abs border-gray-200 border-[3px] w-6 h-28"></div>
                <span className="material-symbols-outlined shadow-sm shadow-main p-2 rounded-sm text-main centering_abs bg-white z-20" style={{fontSize:40}}>biotech</span>
            </div>
            <div className='h-full flex flex-col justify-start py-6 gap-y-3'>
                <h1 className='text-main2 font-bold text-xl'>أبحاث كميائية</h1>
                <p className='text-sm text-main2'>تستتبع الخدمة من الاكتشاف المكثف للبحث العثور على محركات متسارعة من خلال تسليم المرشح قبل السريري.</p>
            </div>
        </div>
    </div>
  )
}

export default ServicesCardComp