import { deleteFile, error_handle, getFile_content, getFile_url, listFiles_url, uploadFile, uploadingString } from '@/app/firebase/storage'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { randomName } from './methods'
import { listAll, ref } from 'firebase/storage'
import { storage } from '@/app/firebase/config'

const servicesHook = () => {
    const [name , setName] = useState(randomName())
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
        setName(randomName())
      }catch(e){
        console.log(e)
        error_handle()
      }
  
    }

    async function get_services () {
      try{
        setLoading_state(true)
        const listRef  = ref(storage , '/services/files')
        const res = await listAll(listRef)
  
        let data = []
        for(const item of res.items){
          const url = await getFile_url(item._location.path)
          const content = await getFile_content(url)
          data.push({title : content.title , path : item._location.path , img : content.img})
        }
        setServices(data)
        setLoading_state(false)
      }catch(e){
        console.log(e)
        return error_handle()
      }
  } 

  async function deletingFileHandle(e , ele){
    toast.info('جاري الحذف')
    try{
        setLoading_state(true)
        await deleteFile(e.path)
        await deleteFile(e.img)
        toast.success('تم الحذف')
        setLoading_state(false)
        ele.target.parentElement.remove()
    }catch(e){
        console.log(e)
        return error_handle()
    }
  }

  return {setImgs , clickHandle , name , services , get_services , loading_state , deletingFileHandle}
}

export default servicesHook