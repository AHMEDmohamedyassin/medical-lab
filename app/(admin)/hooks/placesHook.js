import { getFile_content, listFiles_url } from '@/app/firebase/storage'
import React, { useEffect, useState } from 'react'

const placesHook = () => {
    const [places  , setPlaces] = useState([])
    const [loading_state , setLoading_state] = useState(false)

    async function get_places () {
        setLoading_state(true)
        const res = await listFiles_url('/places')
        let data = []
        for(const url of res){
            const content = await getFile_content(url)
            data.push({name : content.name})
        }
        setPlaces(data)
        setLoading_state(false)
    } 

    useEffect(() =>{
         get_places()
    } , []) 

  return {places , loading_state}
}

export default placesHook