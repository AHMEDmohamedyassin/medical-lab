'use client'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { rtdb } from '@/app/firebase/config'
import { ref, set } from "firebase/database";
import { uid } from 'uid';

const ContactForm = () => {
    const [name , setName] = useState('')
    const [phone , setPhone] = useState('')
    const [text , setText] = useState('')
    const [avalible , setAvalible] = useState(false)

    const clickHandle = async() =>{
        try{
            toast.info('جاري حجز الموعد')
            if(!name) return toast.error('الرجاء كتابة الاسم')
            if(!phone) return toast.error('الرجاء كتابة رقم الهاتف')
            if(!text) return toast.error('الرجاء كتابة الموضوع')
    
            const refer = ref(rtdb , `appointment/${uid()}`)
            await set(refer , {name , phone , text})
            toast.success('تم حجز الموعد')
            // window.localStorage.setItem('__appointment' , new Date().getTime())
            // setAvalible(false)
        }catch(e){
            toast.error('حدثت مشكلة ما الرجاء المحاولة لاحقا أو الاتصال بخدمة العملاء')
        }

    }

    useEffect(() => {
        const date = window.localStorage.getItem('__appointment')
        if(date == null ) setAvalible(true)
        else{
            if((new Date().getTime() - date) > 60000 * 60) setAvalible(true) 
        }
    } , [])
  return (
            <div className='w-full lg:w-4/5 xl:w-3/5'>
                <p className='text-main text-lg font-semibold z-40'>مستعدون للمساعدة</p>
                <h1 className='text-main2 text-2xl sm:text-3xl xl:text-4xl font-extrabold z-40'>احصل على كتاب رعاية فني المختبر المناسب مع طبيبك</h1>
                
                <div className='flex justify-center items-center flex-col gap-6 mt-10'>
                    <div className='w-full flex justify-start items-center gap-4'>
                        <input onChange={(e) => setName(e.target.value)} value={name} className='w-3/5 bg-[#f7faff] text-black/60 p-3 text-md border-gray-200 border-[1px] rounded-sm' type='text' placeholder='اكتب اسمك' />
                        <input onChange={(e) => setPhone(e.target.value)} value={phone} className='w-3/5 bg-[#f7faff] text-black/60 p-3 text-md border-gray-200 border-[1px] rounded-sm' type='text' placeholder='اكتب رقم الهاتف' />
                    </div>
                    <textarea onChange={(e) => setText(e.target.value)} value={text} className='w-full h-36 bg-[#f7faff] text-black/60 p-3 text-md border-gray-200 border-[1px] rounded-sm resize-none' type='text' placeholder='اكتب الموضوع' />
                    {
                        avalible ? (
                                <button onClick={clickHandle} className='text-white bg-main font-bold w-full py-3 hover:bg-main2'>حجز موعد</button>
                            ) : (
                                <div className='text-white bg-gray-500 font-bold w-full py-3 hover:cursor-not-allowed text-center'>لقد قمت بالحجز بالفعل</div>
                            )
                    }
                </div>

            </div>
  )
}

export default ContactForm