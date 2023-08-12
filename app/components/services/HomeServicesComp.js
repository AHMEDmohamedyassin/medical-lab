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

const HomeServicesComp = () => {
  const [count , setCount] = useState(1)
  useEffect(() => {
    const width = window.innerWidth
    if(width > 1170 && width < 1800) setCount(2)
    if(width > 1800) setCount(3)
  } , []) 

  useEffect(() => {
    console.log(count)
  } , [count])
  return (
    <div className='flex justify-center items-center flex-col my-12 px-10'>
        
        <div className='flex flex-col justify-center items-center'>
          <p className='text-main text-lg font-semibold'>خدماتنا</p>
          <h1 className='text-main2 text-2xl sm:text-3xl xl:text-4xl font-extrabold mt-2 mb-4'>اكتشف خدماتنا الرئيسية</h1>
          <p className='text-main2 text-md font-light'>فريقنا الممتاز جاهز ليكون جزءًا من فريقك للعمل في مجالات التشخيص المختلفة. العلماء يساعدون المجتمع من أجل حياة أفضل</p>
        </div>

        {/* <div className='w-full xl:w-[1170px] my-10 py-2 flex justify-center items-start gap-x-6 '>
          <ServicesCardComp/>
        </div> */}

        <div className='w-full xl:w-[1170px] px-10'>

            <Swiper
                effect={'Coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={count}
                spaceBetween={50}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Navigation , Autoplay]}
                autoplay={{delay:5000}}
                className='my-10'
            >
                <SwiperSlide className='my-10'><ServicesCardComp/></SwiperSlide>
                <SwiperSlide className='my-10'><ServicesCardComp/></SwiperSlide>
                <SwiperSlide className='my-10'><ServicesCardComp/></SwiperSlide>
                <SwiperSlide className='my-10'><ServicesCardComp/></SwiperSlide>
                <SwiperSlide className='my-10'><ServicesCardComp/></SwiperSlide>
                <SwiperSlide className='my-10'><ServicesCardComp/></SwiperSlide>
                <SwiperSlide className='my-10'><ServicesCardComp/></SwiperSlide>
                <SwiperSlide className='my-10'><ServicesCardComp/></SwiperSlide>
            </Swiper>
        </div>

        <ButtonCustom text={`حجز موعد`} textColor={'main'} hoverColor={'main'} />
    </div>
  )
}

export default HomeServicesComp