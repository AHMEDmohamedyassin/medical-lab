'use client'
import React, { useEffect, useState } from 'react'

const SliderPartComp = () => {
    const [middleHeight , setMiddleHeight] = useState(0)
    const [activeSlider , setActiveSlider] = useState(0)
    useEffect(() => {
        setMiddleHeight(window.innerHeight * 2 / 3)
    } , [])

    useEffect(() => {
        const interval = setInterval(() =>{ 
            clickHandle(true) 
        }, 5000)
        return () => clearInterval(interval)
    } , [activeSlider])


    const data = [
        {
            'img' : 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'titleA' : 'نحن نقدم الكفاءة' ,
            'titleB' : 'خدمة العلم و التكنولوجيا' ,
            'titleC' : 'وصف وصف وصف وصف وصف وصف وصف وصف وصف وصف وصف وصف'
        },
        {
            'img' : 'https://images.pexels.com/photos/6387845/pexels-photo-6387845.jpeg?auto=compress&cs=tinysrgb&w=1600' ,
            'titleA' : '2نحن نقدم الكفاءة' ,
            'titleB' : 'خدمة العلم و التكنولوجيا' ,
            'titleC' : 'وصف وصف وصف وصف وصف وصف وصف وصف وصف وصف وصف وصف'
        },
        {
            'img' : 'https://images.pexels.com/photos/6129885/pexels-photo-6129885.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'titleA' : '3نحن نقدم الكفاءة' ,
            'titleB' : 'خدمة العلم و التكنولوجيا' ,
            'titleC' : 'وصف وصف وصف وصف وصف وصف وصف وصف وصف وصف وصف وصف'
        },
    ]

    const clickHandle = (inc = true) => {
        if(inc && activeSlider < data.length - 1){
            setActiveSlider(activeSlider + 1)
        }else if(!inc && activeSlider > 0){
            setActiveSlider(activeSlider - 1)
        }else if(inc && activeSlider == data.length - 1 ) setActiveSlider(0)
        else setActiveSlider(data.length - 1)

        return true;
    }

  return (
    <div className='w-full bg-gray-500 relative' style={{height:middleHeight}}>

        {/* dimming div */}
        <div className='absolute top-0 left-0 w-full h-full bg-main2/75 z-20'></div>

        {/* button div */}
        <div className='absolute top-2/4 left-0 w-full flex justify-between items-center px-6 z-40'>
            <span onClick={() => clickHandle(true)} className="material-symbols-outlined text-white bg-gray-800 ps-2 pe-4 py-3 text-center hover:cursor-pointer z-40" style={{fontSize:20}}>arrow_forward_ios</span>
            <span onClick={() => clickHandle(false)} className=" material-symbols-outlined text-white bg-gray-800 pe-2 ps-4 py-3 text-center hover:cursor-pointer z-40" style={{fontSize:20}}>arrow_back_ios</span>
        </div>

        {
            data.map((ele , index) => (
                <div key={index}>
                    <div className={`absolute h-full w-full top-0 left-0 ${activeSlider == index ? "opacity-100" : "opacity-0"}`}
                    style={{
                        backgroundImage:`url("${ele.img}")` ,
                        backgroundPosition:'center',
                        backgroundSize:'cover'
                    }}></div>
                    <div className={`z-30 absolute top-0 left-0 w-full h-full flex justify-center items-center gap-y-8 flex-col text-white`}>
                        <h1 className={`${activeSlider == index ? 'siderAnimation_header' : null } hidden text-lg lg:text-2xl text-bold`}>{ele.titleA}</h1>
                        <p className={`${activeSlider == index ? 'siderAnimation_header' : null } hidden sliderAnimation_header_delay1 text-3xl lg:text-5xl font-extrabold`}>{ele.titleB}</p>
                        <p className={`${activeSlider == index ? 'siderAnimation_header' : null } hidden sliderAnimation_header_delay2 text-md lg:text-xl text-bold w-4/12 text-center`}>{ele.titleC}</p>
                        <div className={`${activeSlider == index ? 'siderAnimation_header' : null } hidden sliderAnimation_header_delay3 h-6 lg:h-10 w-[1px] bg-white`}></div>
                        <button className={`${activeSlider == index ? 'siderAnimation_header' : null } hidden sliderAnimation_header_delay4 border-[1.5px] border-white py-2 px-4 text-white text-md lg:text-lg font-extrabold hover:text-main hover:bg-white`}>مشاهدة جميع الخدمات</button>
                    </div>
                </div>
            ))
        }

    </div>
  )
}

export default SliderPartComp