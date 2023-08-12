import React from 'react'

const FooterBottom = () => {
  return (
    <div className='py-6 px-10 w-full xl:w-[1170px] flex justify-between items-center'>
        <p>جميع الحقوق محفوظة</p>
        <div className="flex justify-between items-center gap-x-2">
            <img src="/icon/instegram.svg" className="w-4 h-4" />
            <img src="/icon/instegram.svg" className="w-4 h-4" />
            <img src="/icon/instegram.svg" className="w-4 h-4" />
            <img src="/icon/instegram.svg" className="w-4 h-4" />
        </div>
    </div>
  )
}

export default FooterBottom