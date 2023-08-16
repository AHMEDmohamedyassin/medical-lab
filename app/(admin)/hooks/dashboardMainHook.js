import { deleteFile, error_handle , getFile_content, getFile_url , listFiles_url, uploadFile, uploadingString } from '@/app/firebase/storage'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { randomName } from './methods'

const dashboardMainHook = () => {
    
    const [allSliders , setAllSlider] = useState([])
    const [slide_imgs , setSlide_imgs] = useState(null)
    const [loading_state , setLoading_state] = useState(false)


    const clickEvent = async (data) => {
        if(slide_imgs.length < 1) return toast.error('يجب إضافة صورة')
        if(Object.keys(data).length < 1) return toast.error('لا يوجد بيانات لإضافتها')
        const randName = randomName()
        const img_path = `/sliders/images/${randName}.jpg`
        const file_path = `/sliders/files/${randName}.json`
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
        setLoading_state(true)
        try{
            const res = await listFiles_url('/sliders/files')
            let data = []
            for(const url of res){
                const content = await getFile_content(url)
                data.push({title : content.data_B , img : content.img})
            }
            setAllSlider(data)
            setLoading_state(false)
        }catch(e){
            console.log(e)
            return error_handle()
        }
    } 

    async function delete_slider (content , ele) {
        toast.info('حاري الحذف')
        try{
            const imgName = content.img
            const fileName = content.img.replace('/images/' , '/files/').replace('.jpg' , '.json')
            console.log(fileName , imgName)
            await deleteFile(imgName)
            await deleteFile(fileName)
            toast.success('تم الحذف')
            ele.target.parentElement.remove()
        }catch(e){
            console.log(e)
            return error_handle()
        }
    }

    useEffect(() => {
        get_sliders()
    } , [])
    

    return {setSlide_imgs , clickEvent , allSliders , delete_slider , loading_state} 
}

export default dashboardMainHook