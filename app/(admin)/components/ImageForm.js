'use client'
import React, { useState } from 'react'
import ImageInputs from './ImageInputs'
import { toast } from 'react-toastify'
import { error_handle, uploadFile } from '@/app/firebase/storage'

const ImageForm = ({title , path}) => {
    const [img , setImg] = useState([])

    const handleClick = async () => {
        if(img.length < 1 ) return toast.error('لا يوجد صورة لإرسالها')
        toast.info('جاري إرسال الصورة')

        try{
            await uploadFile(path , img[0])
            toast.success('تم إرسال الصورة')
        }catch(e){
            console.log(e)
            return error_handle()
        }
    }

  return (
        <div className='w-full flex justify-start items-center gap-x-4 gap-y-2 flex-wrap'>
          <div>
            <ImageInputs setImgs={setImg} title={title} number={1} />
          </div>
            <button onClick={handleClick} className='py-1 px-4 bg-transparent text-dsh border-[1px] border-dsh hover:bg-dsh hover:text-white rounded'>إرسال</button>
        </div>
  )
}

export default ImageForm