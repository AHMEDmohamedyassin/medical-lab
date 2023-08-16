import React from 'react'
import ContactPagePartAComp from '../components/contact/ContactPagePartAComp'
import ContactForm from '../components/contact/ContactForm'
import PageTitleComp from '../components/public/PageTitleComp'
import { getFile_content, listFiles_url } from '@/app/firebase/storage'

const page = async () => {
  const urls = await listFiles_url('/places')
  let data = []
  for(const url of urls){
    const cont = await getFile_content(url)
    data.push(cont)
  }
  return (
    <>

        <PageTitleComp text={'تواصل معنا'} path={'contact/contact_page_image.jpg'} />

        <div className='mx-auto my-20 px-10 xl:w-[1170px] w-full flex-wrap flex justify-between items-start gap-16'>

            <ContactForm/>
            {
              data.map((e , index) => (
                <ContactPagePartAComp title={e.name} location={e.location} phones={e.phone_array} key={index}/>
              ) )
            }


        </div>
    </>
  )
}

export default page