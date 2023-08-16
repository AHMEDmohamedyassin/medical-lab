import React from 'react'
import SocialMediaComp from '../public/SocialMediaComp'
import { getFile_content, getFile_url } from '@/app/firebase/storage'

const UpperPartComp = async() => {
  const url = await getFile_url('contact/info.json')
  const content = await getFile_content(url)

  return (
    <div className="bg-main py-3 hidden xl:block">
      <div className="max-w-[1170px] mx-auto px-10 flex justify-between items-center">
    
        <div className="flex justify-between items-center gap-x-4">

          <div className='bg-white p-1 my-[-10px] rounded-lg'>
            <SocialMediaComp raw={true} />
          </div>

          <div className='h-4 w-[1px] bg-white'></div>

          {
            content.workingHours?(
              <div  className="flex justify-between items-center text-white text-sm font-semibold gap-2">
                <span className="material-symbols-outlined" style={{fontSize:18}}>schedule</span>
                <div className="text-inherit">
                  {content.workingHours}
                </div>
              </div>
            ):null
          }
    
        </div>
    
        <div className="text-white flex justify-center items-center text-sm font-semibold gap-x-4">
          
          {
            content.email?(
              <div className="flex items-center justify-between gap-2 border-e-[1px] border-e-sky-300 pe-4">
                <a href="tel:000-723-123-21" className="text-inherit">{content.email}</a>
                <span className="material-symbols-outlined" style={{fontSize:18}}>mail</span>
              </div>
            ):null
          }

          {
            content.phone?(
              <div className="flex items-center justify-between gap-2">
                <a className="text-inherit" href="tel:000-723-123-21">{content.phone}</a>
                <span className="material-symbols-outlined" style={{fontSize:18}}>call</span>
              </div>
            ):null
          }

        </div>
      </div>
    </div>
  )
}

export default UpperPartComp