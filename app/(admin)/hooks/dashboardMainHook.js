import { error_handle , getFile_content, getFile_url , listFiles_url, uploadFile, uploadingString } from '@/app/firebase/storage'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { randomName } from './methods'

const dashboardMainHook = () => {
    
    const [aboutImg , setAboutImg] = useState(null)
    const [contactImg , setContactImg] = useState(null)
    const [servicesImg , setServicesImg] = useState(null)
    
    const [allSliders , setAllSlider] = useState([])
    const [slide_imgs , setSlide_imgs] = useState(null)

    const clickEvent = async (data) => {
        if(slide_imgs.length < 1) return toast.error('يجب إضافة صورة')
        if(Object.keys(data).length < 1) return toast.error('لا يوجد بيانات لإضافتها')
        const img_path = `/sliders/images/${randomName}.jpg`
        const file_path = `/sliders/files/${randomName}.json`
        data.img = img_path

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

    const imgUploadHandle = async (val) => {
        
        const repeated = async (img) => {
            if(img.length < 1 ) return toast.error('لايوجد صورة لإرسالها')
            toast.info('جاري إرسال الصورة')
            await uploadFile(`/images/${val}_page_image.jpg` , img[0])
            return toast.success('تم إرسال الصورة بنجاح')
        }

        try{

            if(val == 'about'){
                return await repeated(aboutImg)
            }else if(val == 'service'){
                return await repeated(servicesImg)
            }else if(val == 'contact'){
                return await repeated(contactImg)
            }

        }catch(e){
            console.log(e)
            return error_handle()
        }
    }

    async function get_sliders () {
        const res = await listFiles_url('/sliders/files')
        for(const url of res){
            const content = await getFile_content(url)
            setAllSlider([ ...allSliders , {title : content.data_B}])
        }
    } 

    useEffect(() => {
        get_sliders()
    } , [])
    

    return {setSlide_imgs , clickEvent , setServicesImg , setContactImg , setAboutImg , imgUploadHandle , allSliders} 
}

export default dashboardMainHook