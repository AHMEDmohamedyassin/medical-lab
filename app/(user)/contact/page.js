import React from 'react'
import HeaderComp from '../components/header/HeaderComp'
import Footer from '../components/footer/Footer'
import FixedEleComp from '../components/public/FixedEleComp'
import Link from 'next/link'
import SocialMediaComp from '../components/public/SocialMediaComp'
import ContactPagePartAComp from '../components/contact/ContactPagePartAComp'
import ContactForm from '../components/contact/ContactForm'
import PageTitleComp from '../components/public/PageTitleComp'

const page = () => {
  return (
    <>

        <PageTitleComp text={'تواصل معنا'} img={'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1600'} />

        <div className='mx-auto my-20 px-10 xl:w-[1170px] w-full flex-wrap flex justify-between items-start gap-10'>

            <ContactPagePartAComp/>

            {/* <div className='w-3/5 p-10 bg-white shadowCustom'>
                <p className='text-main text-lg font-semibold'>معلومات عنا</p>
                <h1 className='text-main2 text-2xl sm:text-3xl xl:text-4xl font-extrabold'>نحن نوظف أحدث تقنيات البحث والشركة</h1>
                
            </div> */}
            <ContactForm/>

        </div>
    </>
  )
}

export default page