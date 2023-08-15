import { getFile_content, listFiles_url } from '@/app/firebase/storage'
import React, { useEffect, useState } from 'react'

const placesHook = () => {
    const [places  , setPlaces] = useState([])

    async function get_places () {
        const res = await listFiles_url('/places')
        let data = []
        for(const url of res){
            const content = await getFile_content(url)
            data.push({name : content.name})
        }
        setPlaces(data)
    } 

    useEffect(() =>{
         get_places()
    } , []) 

  return {places}
}

export default placesHook