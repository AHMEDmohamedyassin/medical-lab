'use client'
import React, { useEffect, useState } from 'react'
import ServicesCardComp from './ServicesCardComp'
import ButtonCustom from '../public/ButtonCustom'

import { EffectCoverflow, Pagination, Navigation , Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { getFile_content, getFile_url, listFiles_url } from '@/app/firebase/storage';
import Loading from '../../loading';
import Link from 'next/link';

const HomeServicesComp = () => {
  const [count , setCount] = useState(1)
  const [data , setData] = useState([])

  useEffect(() => {
    const width = window.innerWidth
    if(width < 1170 && width > 700 ) setCount(2)
    if(width > 1170 && width < 1800) setCount(3)
    if(width > 1800) setCount(4)

    getData()
  } , []) 

  async function getData () {
    try{
      const urls = await listFiles_url('/services/files')
      let data = []
      for(const url of urls){
        let cont = await getFile_content(url)
        cont.img = await getFile_url(cont.img)
        data.push(cont)
      }
      setData(data)

      if(count > data.length()) setCount(data.length())
    }catch(e){}
  }

  return (
    <>
      <div className='flex justify-center items-center flex-col my-12 px-10'>
            
        <div className='flex flex-col justify-center items-center'>
          <p className='text-main text-lg font-semibold'>خدماتنا</p>
          <h1 className='text-main2 text-2xl sm:text-3xl xl:text-4xl font-extrabold mt-2 mb-4'>اكتشف خدماتنا الرئيسية</h1>
          <p className='text-main2 text-md font-light'>فريقنا الممتاز جاهز ليكون جزءًا من فريقك للعمل في مجالات التشخيص المختلفة. العلماء يساعدون المجتمع من أجل حياة أفضل</p>
        </div>
    {
      data.length ? (

            <div className='w-full xl:w-[1170px]'>

                <Swiper
                    effect={'Coverflow'}
                    grabCursor={true}
                    centeredSlides={false}
                    loop={true}
                    slidesPerView={count}
                    spaceBetween={50}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination, Navigation , Autoplay]}
                    autoplay={{delay:5000}}
                    className='my-10'
                >
                  {
                    data.map((e , index) => (
                      <SwiperSlide key={index} className='my-10'>
                        <ServicesCardComp title={e.title} desc={e.description} img={e.img} />
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
            </div>

          ) : <Loading rmText={true}/>
      }
        <Link href={'/contact'} className={`py-2 px-6 text-md font-semibold text-main border-main border-[1px] hover:text-white hover:bg-main`}>حجز موعد</Link>
      </div>
    </>
  )
}

export default HomeServicesComp