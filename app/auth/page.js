'use client'
import React, { useEffect, useRef, useState } from 'react'
import { register_func } from '../firebase/authentication'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';

const page = () => {
  const [email , setEmail] = useState(null)
  const [pass , setPass] = useState(null)
  const [loading , setLoading] = useState(false)

  const router = useRouter()

  const clickHandle = async (type) => {
    if(email == '' || pass == '') return  toast.error('الرجاء ملئ الخانات المطلوبة')
    try{
      setLoading(true)
      const res = await register_func(email , pass , type)
      setLoading(false)
      
      if(type != 'reset' && res != false) router.push('/dashboard')
    }catch(e){
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth , (user) => {
      if(user != null) router.push('/dashboard')
    }) 
  } , [])

  return (
      <body className='h-full flex justify-center items-start pt-20'>
        <ToastContainer/>


        <div className='flex flex-col justify-start items-center mx-auto w-3/4 flex-wrap'>
            <h1 className='w-full border-b-[1px] border-gray-200 pb-2 text-lg text-start font-bold'>إنشاء حساب / تسجيل دخول / تغير كلمة المرور</h1>
            
            <div className='grid grid-cols-1 w-full pt-16 gap-x-16 gap-y-24'>

              {/* <div className='flex flex-col justify-start items-center w-full xl:border-l-[1px] border-gray-300 xl:pe-20 xl:me-20'>
                  <h1 className='xl:self-start font-bold mb-8'>تسجيل الدخول</h1>
                  <input onChange={(e) => setEmail(e.target.value)} className='mb-8 bg-transparent text-black text-sm border-0 border-b-[1px] border-gray-600 pb-2 w-full' type='email' placeholder='عوان البريد الإليكتروني' />
                  <input onChange={(e) => setPass(e.target.value)} className='mb-8 bg-transparent text-black text-sm border-0 border-b-[1px] border-gray-600 pb-2 w-full' type='password' placeholder='كلمة السر' />
                  {
                    loading?(
                      <div className='bg-gray-500 text-white py-[10px] px-10 font-semibold text-sm w-full md:w-fit hover:cursor-not-allowed mt-4 text-center'>جاري التحميل</div>
                    ):(
                      <button disabled={loading} style={{background: loading ? "#6b7280" : '#333'}} onClick={() => clickHandle('login')} className='bg-[#333] text-white py-[10px] px-10 font-semibold text-sm w-full md:w-fit hover:bg-gray-500 mt-4'>تسجيل الدخول</button>
                    )
                  }
              </div> */}

              <div className='flex flex-col justify-between items-center w-full  xl:pe-20 xl:me-20'>
                  {/* <h1 className='xl:self-start font-bold mb-8'>إنشاء حساب</h1> */}
                  <input onChange={e => setEmail(e.target.value)} className='mb-8 bg-transparent text-black text-sm border-0 border-b-[1px] border-gray-600 pb-2 w-full' type='email' placeholder='عوان البريد الإليكتروني' />
                  <input onChange={e => setPass(e.target.value)} className='mb-8 bg-transparent text-black text-sm border-0 border-b-[1px] border-gray-600 pb-2 w-full' type='password' placeholder='كلمة السر' />
                  {
                    loading?(
                      <div className='bg-gray-500 text-white py-[10px] px-10 font-semibold text-sm w-full md:w-fit hover:cursor-not-allowed mt-4 text-center'>جاري التحميل</div>
                    ):(
                      <>
                      <button disabled={loading} style={{background: loading ? "#6b7280" : '#333'}} onClick={() => clickHandle('login')} className='bg-[#333] text-white py-[10px] px-10 font-semibold text-sm w-full md:w-fit hover:bg-gray-500 mt-4'>تسجيل الدخول</button>
                      <button disabled={loading} style={{background: loading ? "#6b7280" : '#333'}} onClick={() => clickHandle('reset')} className='bg-[#333] text-white py-[10px] px-10 font-semibold text-sm w-full md:w-fit hover:bg-gray-500 mt-4'>تغير كلمة الرور</button>
                      <button disabled={loading} style={{background: loading ? "#6b7280" : '#333'}} onClick={() => clickHandle('createUser')} className='bg-[#333] text-white py-[10px] px-10 font-semibold text-sm w-full md:w-fit hover:bg-gray-500 mt-4'>إنشاء حساب</button>
                      </>
                    )
                  }
              </div>

              {/* <div className='flex flex-col justify-between items-center w-full  xl:pe-20 xl:me-20'>
                  <h1 className='xl:self-start font-bold mb-8'>هل نسيت كلمة المرور ؟</h1>
                  <input onChange={(e) => setEmail(e.target.value)} className='mb-8 bg-transparent text-black text-sm border-0 border-b-[1px] border-gray-600 pb-2 w-full' type='email' placeholder='عوان البريد الإليكتروني' />
                  {
                    loading?(
                      <div className='bg-gray-500 text-white py-[10px] px-10 font-semibold text-sm w-full md:w-fit hover:cursor-not-allowed mt-4 text-center'>جاري التحميل</div>
                    ):(
                      <button disabled={loading} style={{background: loading ? "#6b7280" : '#333'}} onClick={() => clickHandle('reset')} className='bg-[#333] text-white py-[10px] px-10 font-semibold text-sm w-full md:w-fit hover:bg-gray-500 mt-4'>تغير كلمة الرور</button>
                    )
                  }
              </div> */}

            </div>

        </div>

      </body>
  )
}

export default page