import React from 'react'

const FooterUpper = () => {
  return (
    <>
        <div className='w-full xl:w-[1170px] flex justify-between items-center flex-wrap lg:flex-nowrap gap-16 p-10'>

            <div className='flex justify-between items-center gap-x-4'>
                <span className="material-symbols-outlined text-main" style={{fontSize:40}}>call</span>
                <div className='flex flex-col items-start'>
                    <h2 className='text-main2 font-extrabold text-xl'>العنوان</h2>
                    <p className='text-gray-500'>الدقي شارع مصدق</p>
                </div>
            </div>

            <div className='h-12 w-[1px] bg-gray-300 hidden lg:inline'></div>

            <div className='flex justify-between items-center gap-x-4'>
                <span className="material-symbols-outlined text-main" style={{fontSize:40}}>call</span>
                <div className='flex flex-col items-start'>
                    <h2 className='text-main2 font-extrabold text-xl'>العنوان</h2>
                    <p className='text-gray-500'>الدقي شارع مصدق</p>
                </div>
            </div>

            <div className='h-12 w-[1px] bg-gray-300 hidden lg:inline'></div>

            <div className='flex justify-between items-center gap-x-4'>
                <span className="material-symbols-outlined text-main" style={{fontSize:40}}>call</span>
                <div className='flex flex-col items-start'>
                    <h2 className='text-main2 font-extrabold text-xl'>العنوان</h2>
                    <p className='text-gray-500'>الدقي شارع مصدق</p>
                </div>
            </div>

        </div>
        <div className='w-full h-[1px] bg-gray-300'></div>
    </>
  )
}

export default FooterUpper