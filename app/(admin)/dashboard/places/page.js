'use client'
import PageContainerComp from '../../components/PageContainerComp'
import placesHook from '../../hooks/placesHook'

const page = () => {
  const {places} = placesHook()
  return (
    <PageContainerComp title={'الفروع'}>
      <div className='flex flex-col gap-y-4 w-full px-2 '>
        
        {
          places.map((e , index) => (
            <div key={index}  className='flex justify-between items-center border-[1px] hover:border-dsh hover:cursor-pointer p-4 w-full bg-white rounded text-dsh'>
              <p className='text-lg'>{e.name}</p>
              <span class="material-symbols-outlined hover:text-red-500 hover:cursor-pointer">delete_forever</span>
            </div>
          ))
        }
        
      </div>
    </PageContainerComp>
  )
}

export default page