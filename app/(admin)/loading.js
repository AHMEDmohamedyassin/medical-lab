'use client'
import {RingLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className="w-full mt-12 flex flex-col gap-y-20 justify-start items-center my-32">
      <RingLoader color='#3368c6' size={150} />
      <h1 className='text-main text-xl font-bold'>جار التحميل</h1>
    </div>
  )
}

export default Loading