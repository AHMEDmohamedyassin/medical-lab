'use client'
import { getFile_content, getFile_url, listFiles_url } from '@/app/firebase/storage'
import React, { useEffect, useState } from 'react'
import Loading from '../../loading'

const SliderPartComp = () => {
    const [middleHeight , setMiddleHeight] = useState(0)
    const [activeSlider , setActiveSlider] = useState(0)
    const [data , setData] = useState([])
    const [loading , setLoading] = useState(false)

    useEffect(() => {
        setMiddleHeight(window.innerHeight * 2 / 3)
        get_data()
    } , [])

    useEffect(() => {
        const interval = setInterval(() =>{ 
            clickHandle(true) 
        }, 5000)
        return () => clearInterval(interval)
    } , [activeSlider])

    async function get_data () {
        try{
            setLoading(true)
            const res = await listFiles_url('/sliders/files')
            let data = []
            for(const e of res){
                let cont = await getFile_content(e)
                const img = await getFile_url(cont.img)
                cont.img = img
                data.push(cont)
            }
            setData(data)
            setLoading(false)
        }catch(e){}
    }

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

    <>
        {
            loading ? <Loading rmText={true} /> : (
                <>
                    
                    <div className='w-full relative' style={{height:middleHeight}}>
                        {/* dimming div */}
                        <div className='absolute top-0 left-0 w-full h-full bg-main2/75 z-20'></div>
                
                        {/* button div */}
                        <div className='absolute top-2/4 left-0 w-full flex justify-between items-center lg:px-6 z-40'>
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
                                        <h1 className={`${activeSlider == index ? 'siderAnimation_header' : null } hidden text-lg lg:text-2xl text-bold`}>{ele.data_A}</h1>
                                        <p className={`${activeSlider == index ? 'siderAnimation_header' : null } hidden sliderAnimation_header_delay1 text-3xl lg:text-5xl font-extrabold`}>{ele.data_B}</p>
                                        <p className={`${activeSlider == index ? 'siderAnimation_header' : null } hidden sliderAnimation_header_delay2 text-sm lg:text-xl text-bold lg:w-4/12 w-3/4 text-center`}>{ele.data_C}</p>
                                    </div>
                                </div>
                            ))
                        }
                    
                        </div>
                    </>
                )
            }
    </>
      


  )
}

export default SliderPartComp