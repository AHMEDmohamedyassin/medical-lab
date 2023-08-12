import React from 'react'

const ContactForm = () => {
  return (
            <div className='w-full lg:w-4/5 xl:w-3/5'>
                <p className='text-main text-lg font-semibold z-40'>مستعدون للمساعدة</p>
                <h1 className='text-main2 text-2xl sm:text-3xl xl:text-4xl font-extrabold z-40'>احصل على كتاب رعاية فني المختبر المناسب مع طبيبك</h1>
                
                <div className='flex justify-center items-center flex-col gap-6 mt-10'>
                    <div className='w-full flex justify-start items-center gap-4'>
                        <input className='w-3/5 bg-[#f7faff] text-black/60 p-3 text-md border-gray-200 border-[1px] rounded-sm' type='text' placeholder='اكتب اسمك' />
                        <input className='w-3/5 bg-[#f7faff] text-black/60 p-3 text-md border-gray-200 border-[1px] rounded-sm' type='text' placeholder='اكتب رقم الهاتف' />
                    </div>
                    <div className='w-full flex justify-start items-center gap-4'>
                        <input className='w-3/5 bg-[#f7faff] text-black/60 p-3 text-md border-gray-200 border-[1px] rounded-sm' type='text' placeholder='اكتب بريدك الإليكتروني' />
                        <input className='w-3/5 bg-[#f7faff] text-black/60 p-3 text-md border-gray-200 border-[1px] rounded-sm' type='text' placeholder='اكتب الموضوع' />
                    </div>
                    <textarea className='w-full h-36 bg-[#f7faff] text-black/60 p-3 text-md border-gray-200 border-[1px] rounded-sm resize-none' type='text' placeholder='اكتب الموضوع' />
                    <button className='text-white bg-main font-bold w-full py-3 hover:bg-main2'>حجز موعد</button>
                </div>

            </div>
  )
}

export default ContactForm