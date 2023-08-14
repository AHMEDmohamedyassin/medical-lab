import React, { useState } from 'react'

const InputComp = ({label , type , placeholder , name}) => {
  const [inputCount , setInputCount] = useState(1)
  return (
    <>  
          <div className='flex justify-start items-center gap-2 mt-6'>
            <label className='text-gray-500 text-lg'>{label}</label>
            {
              name.includes('_array')?( 
                <>
                  <span onClick={() => setInputCount(inputCount + 1 )} className="material-symbols-outlined bg-dsh text-white rounded-md hover:cursor-pointer">add</span> 
                  <span onClick={() => inputCount > 1 ? setInputCount(inputCount - 1 ) : null} className="material-symbols-outlined bg-dsh text-white rounded-md hover:cursor-pointer">remove</span> 
                </>
              ): null
            }
          </div>
          {
            [...Array(inputCount)].map((e , index) => (
              <input name={name} key={index} className='bg-transparent border-b-[1px] border-gray-300 w-full mt-2 mb-2 pb-2' type={type? type : 'text'} placeholder={placeholder ? placeholder : label} />
            ))
          }
    </>
  )
}

export default InputComp