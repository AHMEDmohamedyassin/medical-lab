import React from 'react'
import SocialMediaComp from '../public/SocialMediaComp'

const FooterBottom = () => {
  return (
    <div className='py-6 px-10 w-full xl:w-[1170px] flex justify-between items-center z-20'>
        <p>جميع الحقوق محفوظة تم بواسطة <a className='text-sky-600 hover:text-sky-500 font-bold' href='https://www.cvhub.site/ahmed/contact'>م / أحمد محمد</a></p>
        <SocialMediaComp/>
    </div>
  )
}

export default FooterBottom