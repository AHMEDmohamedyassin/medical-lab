'use client'
import ImageForm from '@/app/(admin)/components/ImageForm'
import ImageInputs from '@/app/(admin)/components/ImageInputs'
import InputCollectionComp from '@/app/(admin)/components/InputCollectionComp'
import InputComp from '@/app/(admin)/components/InputComp'
import PageContainerComp from '@/app/(admin)/components/PageContainerComp'
import servicesHook from '@/app/(admin)/hooks/servicesHook'

const page = () => {
  const {setImgs , clickHandle , name } = servicesHook()

  return (
    <PageContainerComp title={'إنشاء خدمة'}>
      <ImageForm title={'صورة الصفحة'} path={'/services/images/service_page_image.jpg'} />
      <ImageInputs title={'إضافة صورة'} number={1} setImgs={setImgs} />
      <InputCollectionComp clickHandling={clickHandle}>
        <input name={'img'} value={`/services/images/${name}.jpg`} type={'hidden'} />
        <InputComp name={'title'} label={'العنوان'} />
        <InputComp name={'description'} label={'الوصف'} />
      </InputCollectionComp>
    </PageContainerComp>
  )
}

export default page