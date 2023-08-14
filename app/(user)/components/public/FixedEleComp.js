'use client'
import React from 'react'

const FixedEleComp = () => {
    const clickHandle = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
    }
  return (
    <div>
        <div onClick={clickHandle} className='fixed bottom-10 right-5 bg-white rounded-md text-main flex justify-center items-center p-1 hover:bg-main hover:text-white hover:cursor-pointer shadowCustom z-50 shadow-main2'>
            <span className="material-symbols-outlined" style={{fontSize:40}}>expand_less</span>
        </div>
    </div>
  )
}

export default FixedEleComp