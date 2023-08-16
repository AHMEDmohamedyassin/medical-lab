'use client'
import PageContainerComp from '../../components/PageContainerComp'
import placesHook from '../../hooks/placesHook'
import Loading from '../../loading'

const page = () => {
  const {places , loading_state , deletingFileHandle} = placesHook()
  return (
    <PageContainerComp title={'الفروع'}>
      <div className='flex flex-col gap-y-4 w-full px-2 '>
        
        {
          places.map((e , index) => (
            <div key={index}  className='flex justify-between items-center border-[1px] hover:border-dsh hover:cursor-pointer p-4 w-full bg-white rounded text-dsh'>
              <p className='text-lg'>{e.name}</p>
              <span onClick={(ele) => deletingFileHandle(e , ele)} className="material-symbols-outlined hover:text-red-500 hover:cursor-pointer">delete_forever</span>
            </div>
          ))
        }
        
      </div>
      {
        loading_state? <Loading/> : null
      }
      
    </PageContainerComp>
  )
}

export default page