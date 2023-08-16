import React from 'react'
import ServicesCardComp from '../components/services/ServicesCardComp'
import PageTitleComp from '../components/public/PageTitleComp'
import { getFile_content, getFile_url, listFiles_url } from '@/app/firebase/storage'
import Loading from '../loading'

const page = async () => {
  const urls = await listFiles_url('/services/files')
  let data = []
  for(const url of urls){
    let cont = await getFile_content(url)
    cont.img = await getFile_url(cont.img)
    data.push(cont)
  }

  return (
    <>
      <PageTitleComp text={'الخدمات'} path={'/services/images/service_page_image.jpg'} />
      <div className='xl:w-[1170px] w-full px-10 mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-10'>
      {
        data.map((e, index) => (
          <>
                <ServicesCardComp key={index} title={e.title} desc={e.description} img={e.img} />
          </>
        ))  
      }
      </div>
    </>
  )
}

export default page