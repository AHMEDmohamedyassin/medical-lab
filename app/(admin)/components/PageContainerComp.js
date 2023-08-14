import React from 'react'

const PageContainerComp = ({title , children}) => {
  return (
    <div className='flex flex-col items-start justify-start'>
        <div className='w-full text-sky-500 text-xl my-4'>{title}</div>
        {children}
    </div>
  )
}

export default PageContainerComp