import { getFile_content, getFile_url } from '@/app/firebase/storage'
import React from 'react'

const SocialMediaComp = async({raw}) => {
    try{
        const url = await getFile_url('/contact/social_url.json')
        const data = await getFile_content(url)
      return (
          <div className="flex justify-start items-center gap-x-4 px-1">
            {
                Object.keys(data).map((e , index) => (
                    <a key={index} href={`${data[e]}`}  className={!raw ? `rounded-full bg-white p-2 ` : 'mx-2'} style={{boxShadow:!raw ? '0 0 5px 1px #ddd' : ''}}>
                        <img src={`/icon/${e}.svg`} className={`w-6 h-6`} />
                    </a>
                ))
            }
          </div>
      )
    }catch(e){
        return
    }
}

export default SocialMediaComp