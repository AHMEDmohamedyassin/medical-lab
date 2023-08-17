import { getFile_content, getFile_url } from '@/app/firebase/storage'
import React from 'react'

const FooterUpper = async () => {
    try{
        const url = await getFile_url('/places/main_place.json')
        const data = await getFile_content(url)
      return (
        <>
            <div className='w-full xl:w-[1170px] flex justify-between items-start flex-wrap lg:flex-nowrap gap-16 p-10 z-20'>
    
                <div className='flex justify-between items-start gap-x-4'>
                    <span className="material-symbols-outlined text-main" style={{fontSize:40}}>Title</span>
                    <div className='flex flex-col items-start'>
                        <h2 className='text-main2 font-extrabold text-xl mb-2'>الاسم</h2>
                        <p className='text-gray-500'>{data.name}</p>
                    </div>
                </div>
    
                <div className='flex justify-between items-start gap-x-4'>
                    <span className="material-symbols-outlined text-main" style={{fontSize:40}}>pin_drop</span>
                    <div className='flex flex-col items-start'>
                        <h2 className='text-main2 font-extrabold text-xl mb-2'>العنوان</h2>
                        <p className='text-gray-500'>{data.location}</p>
                    </div>
                </div>
    
    
                <div className='flex justify-between items-start gap-x-4'>
                    <span className="material-symbols-outlined text-main" style={{fontSize:40}}>phone_in_talk</span>
                    <div className='flex flex-col items-start'>
                        <h2 className='text-main2 font-extrabold text-xl mb-2'>رقم الهاتف</h2>
                        {
                            data.phone_array.map((e , index) => (
                                <p key={index} className='text-gray-500'>{e}</p>
                            ))
                        }
                    </div>
                </div>
    
            </div>
            <div className='w-full h-[1px] bg-gray-300'></div>
        </>
      )

    }catch(e){
        return
    }
}

export default FooterUpper