import React from 'react'

const ContactHomeMain = () => {
  return (
    <div className='w-full lg:mt-20 mb-28 relative lg:h-[750px] h-[2000px] flex flex-col'>


        <div className='lg:centering_abs_freeX right-0 w-full lg:w-2/4 h-[540px] lg:h-full' style={{
            backgroundImage:`url('https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
            backgroundPosition:'center',
            backgroundSize:'cover'
        }}></div>


        <div className='lg:centering_abs_freeX left-0 w-full lg:w-7/12 lg:h-[650px] lg:p-16 p-10 bg-white relative z-20' 
            style={{
                backgroundImage : `url('https://media.istockphoto.com/id/1204136301/photo/abstract-dotted-world-map.jpg?b=1&s=612x612&w=0&k=20&c=_kn-gUPoKzzjZhL4E56SoEm0-L-4tc2p7MDK79kF1Hw=')`,
                backgroundPosition:'center',
                backgroundSize:'cover',
            }}
        >
            <div className='absolute top-0 left-0 w-full h-full bg-white/90 -z-10'></div>
            
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

        </div>


        <div className='lg:absolute -bottom-20 right-0 bg-main z-40 ps-20 py-10 pe-8 text-white w-full lg:w-2/5'>
            <p className='font-bold text-lg mb-2'>عروض مميزة</p>
            <h2 className='text-4xl font-extrabold'>احصل علي فحص طبي مجانا</h2>
        </div>

    </div>
  )
}

export default ContactHomeMain