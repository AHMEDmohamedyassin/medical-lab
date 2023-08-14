import React from 'react'

const ContactHome = () => {
  return (
    <div className='relative flex flex-col items-center justify-center gap-10 py-20 px-10 lg:my-12'
        style={{
            backgroundImage : `url('https://images.pexels.com/photos/5327653/pexels-photo-5327653.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
            backgroundSize : 'cover',
            backgroundOrigin:'center'
        }}
    >
        <div className='absolute top-0 left-0 w-full h-full bg-main2/75'></div> {/*  dimming div */}
        <div className='flex justify-center items-center flex-wrap lg:flex-nowrap gap-6 w-full z-30 relative'>

            <div className='flex justify-center items-center w-full lg:w-auto bg-white py-4  px-2 lg:px-8 gap-6'>
                <span className="material-symbols-outlined text-main" style={{fontSize:50}}>call</span>
                <div className='flex items-center justify-center flex-col'>
                    <p className='text-lg lg:text-2xl text-main font-extrabold mb-4'>أفضل خدمة معامل</p>
                    <p className='text-lg lg:text-2xl font-semibold text-main2'>01066404523</p>
                </div>
            </div>

            <div className='flex justify-center items-center w-full lg:w-auto bg-white py-4 px-2 lg:px-8 gap-6'>
                <span className="material-symbols-outlined text-main" style={{fontSize:50}}>call</span>
                <div className='flex items-center justify-center flex-col'>
                    <p className='text-lg lg:text-2xl text-main font-extrabold mb-4'>أفضل خدمة معامل</p>
                    <p className='text-lg lg:text-2xl font-semibold text-main2'>01066404523</p>
                </div>
            </div>

            <div className='absolute z-40 bg-white py-4 px-6 rounded-full text-main2 text-lg font-bold border-main2 border-[1px] lg:inline hidden' style={{top:'50%' , left:'50%' , translate:'-50% -50%'}}>أو</div>

        </div>

        <p className='text-white font-bold z-30 text-xl'>نحن هنا لخدمتك تواصل معنا علي 01066404523</p>
    </div>
  )
}

export default ContactHome