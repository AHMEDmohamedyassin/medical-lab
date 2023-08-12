import React from 'react'
import ContactForm from './ContactForm'

const ContactHomeMain = () => {
  return (
    <div className='w-full mt-20 mb-28 relative lg:h-[750px]  flex flex-col'>


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
            
            <ContactForm/>

        </div>


        <div className='lg:absolute -bottom-20 right-0 bg-main z-40 ps-20 py-10 pe-8 text-white w-full lg:w-2/5'>
            <p className='font-bold text-lg mb-2'>عروض مميزة</p>
            <h2 className='text-4xl font-extrabold'>احصل علي فحص طبي مجانا</h2>
        </div>

    </div>
  )
}

export default ContactHomeMain