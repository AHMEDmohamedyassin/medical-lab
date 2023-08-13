'use client'
import React, { useState } from 'react'

const ServicesCardComp = () => {
    const [active , setActive] = useState(false)

  return (

    <div onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className='h-[380px] w-full'>
        <div className='flex flex-col items-center justify-start shadow-md shadow-sky-200 rounded-md overflow-hidden w-full h-full'>
            <div className='h-2/4 w-full relative' style={{
                    backgroundImage : `url('https://images.pexels.com/photos/3825379/pexels-photo-3825379.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
                    backgroundPosition:'center',
                    backgroundSize:'cover',
                    scale: active ? 1.1 : 1
                }}>
                <div className='w-full h-full absolute top-0 left-0 bg-main2/75' style={{opacity : active? '0.75' : 0}}></div> {/* dimming div */}
            </div>

            <div className='flex justify-between items-center px-4 h-2/4 gap-x-4'>
                <div className='relative w-36'>
                    <div className="z-10 centering_abs border-gray-200 border-[3px] w-6" style={{height:active ? 100 : 0}}></div> {/** rectangle */}
                    <span className="material-symbols-outlined shadow-sm shadow-main p-2 rounded-sm centering_abs z-20" style={{fontSize:40 , background : active ? '#3368c6' : '#fff' , color: !active ? '#3368c6' : '#fff'}}>biotech</span>
                </div>
                <div className='h-full flex flex-col justify-start py-6 gap-y-3'>
                    <h1 className='text-main2 font-bold text-xl'>أبحاث كميائية</h1>
                    <p className='text-sm text-main2'>تستتبع الخدمة من الاكتشاف المكثف للبحث العثور على محركات متسارعة من خلال تسليم المرشح قبل السريري.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ServicesCardComp