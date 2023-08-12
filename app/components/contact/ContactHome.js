import React from 'react'

const ContactHome = () => {
  return (
    <div className='relative flex flex-col items-center justify-center gap-10 py-20 px-10'>
        <div className='absolute top-0 left-0 w-full h-full bg-main2/75'></div> {/*  dimming div */}
        <div className='flex justify-between items-center flex-gap gap-6 w-full'>

            <div className='flex justify-center items-center w-full lg:w-auto '>
                <div>phoneI</div>
                <div>
                    <p className='text-lg text-main font-bold mb-4'>أفضل خدمة معامل</p>
                    <a className='text-xl font-semibold text-main2' href='/'>01066404523</a>
                </div>
            </div>

            <div className='flex justify-center items-center w-full lg:w-auto'>
                <div>phoneI</div>
                <div>
                    <p className='text-lg text-main font-bold mb-4'>أفضل خدمة معامل</p>
                    <a className='text-xl font-semibold text-main2' href='/'>01066404523</a>
                </div>
            </div>

        </div>

        <p>نحن هنا لخدمتك تواصل معنا علي 01066404523</p>
    </div>
  )
}

export default ContactHome