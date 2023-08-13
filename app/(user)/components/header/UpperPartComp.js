import React from 'react'
import SocialMediaComp from '../public/SocialMediaComp'

const UpperPartComp = () => {
  return (
    <div className="bg-main py-3 hidden xl:block">
      <div className="max-w-[1170px] mx-auto px-10 flex justify-between items-center">
    
        <div className="flex justify-between items-center gap-x-4">
    
              <div className="flex justify-between items-center gap-x-2 px-1">
                <img src="/icon/instegram.svg" className="w-4 h-4" />
                <img src="/icon/instegram.svg" className="w-4 h-4" />
                <img src="/icon/instegram.svg" className="w-4 h-4" />
                <img src="/icon/instegram.svg" className="w-4 h-4" />
              </div>

          <div className='h-4 w-[1px] bg-white'></div>
    
          <div  className="flex justify-between items-center text-white text-sm font-semibold gap-2">
            <span className="material-symbols-outlined" style={{fontSize:18}}>schedule</span>
            <div className="text-inherit">
              مواعيد العمل من الأحد إلي الإثنين : 9:30 - 18:30
            </div>
          </div>
    
        </div>
    
        <div className="text-white flex justify-center items-center text-sm font-semibold gap-x-4">
          <div className="flex items-center justify-between gap-2 border-e-[1px] border-e-sky-300 pe-4">
            <a href="tel:000-723-123-21" className="text-inherit">ahmedmohamed982025@outlook.com</a>
            <span className="material-symbols-outlined" style={{fontSize:18}}>mail</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <a className="text-inherit" href="/">01033404523</a>
            <span className="material-symbols-outlined" style={{fontSize:18}}>call</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpperPartComp