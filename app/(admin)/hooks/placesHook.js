import { storage } from '@/app/firebase/config'
import { deleteFile, error_handle, getFile_content, getFile_url, listFiles_url } from '@/app/firebase/storage'
import { listAll, ref } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const placesHook = () => {
    const [places  , setPlaces] = useState([])
    const [loading_state , setLoading_state] = useState(false)

    async function get_places () {
        try{
            setLoading_state(true)
            const listRef  = ref(storage , '/places')
            const res = await listAll(listRef)

            let data = []
            for(const item of res.items){
                const url = await getFile_url(item._location.path)
                const content = await getFile_content(url)
                data.push({name : content.name , path: item._location.path})
            }
            setPlaces(data)
            setLoading_state(false)
        }catch(e){}
    } 

    const deletingFileHandle = async (e , ele) => {
        toast.info('جاري الحذف')
        try{
            setLoading_state(true)
            await deleteFile(e.path)
            toast.success('تم الحذف')
            setLoading_state(false)
            ele.target.parentElement.remove()
        }catch(e){
            console.log(e)
            return error_handle()
        }
    } 

    useEffect(() =>{
         get_places()
    } , []) 

  return {places , loading_state , deletingFileHandle}
}

export default placesHook