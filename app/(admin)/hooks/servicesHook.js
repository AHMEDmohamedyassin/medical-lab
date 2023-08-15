import { error_handle, getFile_content, listFiles_url, uploadFile, uploadingString } from '@/app/firebase/storage'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { randomName } from './methods'

const servicesHook = () => {
    const [name , setName] = useState(randomName)
    const [imgs , setImgs] = useState([])
    const [services , setServices] = useState([])
    const [loading_state , setLoading_state] = useState(false)
  
  
    const clickHandle = async (data) => {
      if(Object.keys(data).length < 2) return toast.error('لا يوجد بيانات لإرسالها')
      if(imgs.length < 1 ) return toast.error('لا يوجد صورة لإرسالها')
      toast.info('جاري إرسال البيانات ...')
      try{
        const img_res = await uploadFile(`/services/images/${name}.jpg` , imgs[0])
        if(!img_res) return error_handle()
    
        const obj_res = await uploadingString(`/services/files/${name}.json` , data)
        if(!obj_res) return error_handle()
    
        toast.success('تم إرسال البيانات')
      }catch(e){
        console.log(e)
        error_handle()
      }
  
    }

    async function get_services () {
      setLoading_state(true)
      const res = await listFiles_url('/services/files')
      let data = []
      for(const url of res){
        const content = await getFile_content(url)
        data.push({title : content.title})
      }
      setServices(data)
      setLoading_state(false)
  } 

  return {setImgs , clickHandle , name , services , get_services , loading_state}
}

export default servicesHook