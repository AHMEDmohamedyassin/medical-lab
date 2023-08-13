import React from 'react'
import SocialMediaComp from '../public/SocialMediaComp'

const ContactPagePartAComp = () => {
  return (
            <div className='w-full xl:w-2/6'>
                <h1 className='text-main2 text-2xl font-extrabold mb-4' >معلومات عن التواصل معنا</h1>

                <div className='flex justify-start items-start gap-x-4 border-b-[1px] border-gray-300 py-6 w-full'>
                    <span className="material-symbols-outlined text-main" style={{fontSize:40}}>call</span>
                    <div className='flex flex-col items-start'>
                        <h2 className='text-main2 font-extrabold text-2xl'>العنوان</h2>
                        <p className='text-gray-500'>الدقي شارع مصدق</p>
                    </div>
                </div>

                <div className='flex justify-start items-start gap-x-4 border-b-[1px] border-gray-300 py-6 w-full'>
                    <span className="material-symbols-outlined text-main" style={{fontSize:40}}>call</span>
                    <div className='flex flex-col items-start'>
                        <h2 className='text-main2 font-extrabold text-2xl'>العنوان</h2>
                        <p className='text-gray-500'>الدقي شارع مصدق</p>
                    </div>
                </div>

                <div className='flex justify-start items-start gap-x-4 py-6 w-full'>
                    <span className="material-symbols-outlined text-main" style={{fontSize:40}}>call</span>
                    <div className='flex flex-col items-start'>
                        <h2 className='text-main2 font-extrabold text-2xl'>العنوان</h2>
                        <p className='text-gray-500'>الدقي شارع مصدق</p>
                    </div>
                </div>

                <SocialMediaComp/>
            </div>
  )
}

export default ContactPagePartAComp