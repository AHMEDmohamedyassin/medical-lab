import { getFile_content, getFile_url } from '@/app/firebase/storage'
import React from 'react'

const ContactHome = async() => {
    try{
        const img = await getFile_url('/contact/image_2.jpg')
        const data_url = await getFile_url('/places/main_place.json')
        const data = await getFile_content(data_url)
    
      return (
        <div className='relative flex flex-col items-center justify-center gap-10 py-20 px-10 lg:my-12'
            style={{
                backgroundImage : `url('${img}')`,
                backgroundSize : 'cover',
                backgroundOrigin:'center'
            }}
        >
            <div className='absolute top-0 left-0 w-full h-full bg-main2/75'></div> {/*  dimming div */}
            <div className='flex justify-center items-center flex-wrap lg:flex-nowrap gap-6 w-full z-30 relative'>
    
            {
                data.phone_array.slice(0 , 2).map((e , index) => (
                    <div key={index} className='flex justify-center items-center w-full lg:w-auto bg-white py-4  px-2 lg:px-8 gap-6'>
                        <span className="material-symbols-outlined text-main" style={{fontSize:50}}>call</span>
                        <div className='flex items-center justify-center flex-col'>
                            <p className='text-lg lg:text-2xl text-main font-extrabold mb-4'>أفضل خدمة معامل</p>
                            <p className='text-lg lg:text-2xl font-semibold text-main2'>{e}</p>
                        </div>
                    </div>
                ))
            }
    
            {
                !data.phone_array.length < 2 ? (
    
                    <div className='absolute z-40 bg-white py-4 px-6 rounded-full text-main2 text-lg font-bold border-main2 border-[1px] lg:inline hidden' style={{top:'50%' , left:'50%' , translate:'-50% -50%'}}>أو</div>
                ):null
            }
    
            </div>
    
        </div>
      )
    }catch(e){
        return
    }
}

export default ContactHome