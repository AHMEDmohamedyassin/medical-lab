import { error_handle , getFile_content, getFile_url , listFiles_url, uploadFile, uploadingString } from '@/app/firebase/storage'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { randomName } from './methods'

const dashboardMainHook = () => {
    
    const [allSliders , setAllSlider] = useState([])
    const [slide_imgs , setSlide_imgs] = useState(null)

    const clickEvent = async (data) => {
        if(slide_imgs.length < 1) return toast.error('يجب إضافة صورة')
        if(Object.keys(data).length < 1) return toast.error('لا يوجد بيانات لإضافتها')
        const img_path = `/sliders/images/${randomName}.jpg`
        const file_path = `/sliders/files/${randomName}.json`
        data.img = img_path

        console.log(data)

        toast.info('حاري إرسال البيانات ...')

        try{
            const img_res = await uploadFile(img_path , slide_imgs[0])
            if(!img_res) return error_handle()

            const file_res = await uploadingString(file_path , data)
            if(!file_res) return error_handle()

            toast.success('تم إرسال البيانات')
        }catch(e){
            console.log(e)
            return error_handle()
        }
    }

    async function get_sliders () {
        const res = await listFiles_url('/sliders/files')
        let data = []
        for(const url of res){
            const content = await getFile_content(url)
            data.push({title : content.data_B})
        }
        setAllSlider(data)
    } 

    useEffect(() => {
        get_sliders()
    } , [])
    

    return {setSlide_imgs , clickEvent , allSliders } 
}

export default dashboardMainHook