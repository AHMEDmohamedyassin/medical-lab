import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const dashboardMainHook = () => {
    
    const [aboutImg , setAboutImg] = useState(null)
    const [contactImg , setContactImg] = useState(null)
    const [servicesImg , setServicesImg] = useState(null)
    
    const [slide_imgs , setSlide_imgs] = useState(null)

    const clickEvent = (data) => {
        if(slide_imgs.length < 1) return toast.error('يجب إضافة صورة')
        if(Object.keys(data).length < 1) return toast.error('لا يوجد بيانات لإضافتها')
        data.img = 'aaa.jpg'
        console.log(data)
    }

    const imgUploadHandle = (val) => {
        if(val == 'about'){
            console.log(aboutImg)
        }else if(val == 'service'){
            console.log(servicesImg)
        }else if(val == 'contact'){
            console.log(contactImg)
        }
    }
    

    return {setSlide_imgs , clickEvent , setServicesImg , setContactImg , setAboutImg , imgUploadHandle} 
}

export default dashboardMainHook