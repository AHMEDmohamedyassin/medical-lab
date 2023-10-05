import React from 'react'
import ButtonCustom from '../public/ButtonCustom'
import { getFile_content, getFile_url } from '@/app/firebase/storage'
import Link from 'next/link'

const HomeAboutComp =async () => {
    try{
        const img = await getFile_url('about/image_1.jpg')
        const file = await getFile_url('about/file.json')
        const content = await getFile_content(file)
        return (
          <div className='flex justify-center items-center'>
              <div className='flex justify-evently items-center flex-wrap xl:flex-nowrap w-[1170px] xl:py-32 py-10 gap-20 px-10'>
        
                  <div className='flex flex-col items-start justify-start gap-y-4 xl:w-6/12'>
                      <p className='text-main text-lg font-semibold'>معلومات عنا</p>
                      <h1 className='text-main2 text-2xl sm:text-3xl xl:text-4xl font-extrabold'>{content.data_A}</h1>
                      <p className='text-main2 text-md font-light'>{content.data_B}.</p>

                      <div className='flex justify-start items-start flex-wrap w-full gap-8'>
        
                          <div className='flex flex-col items-start justify-start xl:w-5/12'>
                              <div className='flex justify-start items-center gap-x-3 pb-4 border-b-[1px] border-gray-200 w-full'>
                                  <span className="material-symbols-outlined text-main" style={{fontSize:50}}>medical_information</span>
                                  <h1 className='font-bold text-main2 text-lg sm:text-xl xl:text-2xl'>{content.data_C}</h1>
                              </div>
                              <p className='text-main2 font-light mt-4 text-start'>{content.data_D}</p>
                          </div>
        
                      </div>
        
                      <p className='text-main2 font-light mt-4 text-start'>{content.data_E} </p>

                      <div className='flex items-center justify-center flex-wrap gap-4 mt-4'>
                          <Link href={'/services'} className={`py-2 px-6 text-md font-semibold text-main2 border-main2 border-[1px] hover:text-white hover:bg-main2`}>الخدمات</Link>
                      </div>
                  </div>
        
                  <div className='relative h-[630px] xl:w-[480px] w-full sm:w-3/4' style={{
                      backgroundImage:`url('${img}')`,
                      backgroundPosition:'center',
                      backgroundSize:'cover'
                  }}>
                      <div className='absolute top-2/4 xl:left-[300px] left-0 h-[177px] w-[235px] bg-main text-white flex justify-center items-center flex-col gap-y-4'>
                          <img src='/icon/logo.svg' />
                          <div className='absolute top-0 left-0 w-full h-full flex justify-between flex-col items-center'>
                              <div className='w-full flex justify-between items-center'>
                                  <span className="material-symbols-outlined -rotate-45" style={{fontSize:40}}>chevron_right</span>
                                  <span className="material-symbols-outlined" style={{rotate:'-135deg' , fontSize:40}}>chevron_right</span>
                              </div>
                              <div className='w-full flex justify-between items-center'>
                                  <span className="material-symbols-outlined rotate-45" style={{fontSize:40}}>chevron_right</span>
                                  <span className="material-symbols-outlined" style={{rotate:'135deg' , fontSize:40}}>chevron_right</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
                
          </div>
        )

    }catch(e){
        return
    }
}

export default HomeAboutComp