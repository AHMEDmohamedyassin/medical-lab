import React from 'react'
import PageContainerComp from '../../components/PageContainerComp'
import Link from 'next/link'

const page = () => {
  return (
    <PageContainerComp title={'الخدمات'}>
      <div className='flex flex-col gap-y-4 w-full px-2 '>
        
        <Link href={'/dashboard'} className='flex justify-between items-center border-[1px] hover:border-dsh hover:cursor-pointer p-4 w-full bg-white rounded text-dsh'>
          <p className='text-lg'>العنوان</p>
          <span class="material-symbols-outlined hover:text-red-500 hover:cursor-pointer">delete_forever</span>
        </Link>
        
        <Link href={'/dashboard'} className='flex justify-between items-center border-[1px] hover:border-dsh hover:cursor-pointer p-4 w-full bg-white rounded text-dsh'>
          <p className='text-lg'>العنوان</p>
          <span class="material-symbols-outlined hover:text-red-500 hover:cursor-pointer">delete_forever</span>
        </Link>
        
        <Link href={'/dashboard'} className='flex justify-between items-center border-[1px] hover:border-dsh hover:cursor-pointer p-4 w-full bg-white rounded text-dsh'>
          <p className='text-lg'>العنوان</p>
          <span class="material-symbols-outlined hover:text-red-500 hover:cursor-pointer">delete_forever</span>
        </Link>

        <Link href={'/dashboard'} className='flex justify-between items-center border-[1px] hover:border-dsh hover:cursor-pointer p-4 w-full bg-white rounded text-dsh'>
          <p className='text-lg'>العنوان</p>
          <span class="material-symbols-outlined hover:text-red-500 hover:cursor-pointer">delete_forever</span>
        </Link>

        <Link href={'/dashboard'} className='flex justify-between items-center border-[1px] hover:border-dsh hover:cursor-pointer p-4 w-full bg-white rounded text-dsh'>
          <p className='text-lg'>العنوان</p>
          <span class="material-symbols-outlined hover:text-red-500 hover:cursor-pointer">delete_forever</span>
        </Link>
        
      </div>
    </PageContainerComp>
  )
}

export default page