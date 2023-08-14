'use client'
import React, { useRef, useState } from 'react'

const InputCollectionComp = ({children , title , addable , addablePlaceholderTitle , addablePlaceholderValue , setData}) => {
  const mainDiv = useRef(null)
  const [inputCount , setInputCount] = useState(0)

  const clickHandle = () => {
    let data = {}
    mainDiv.current.querySelectorAll('input').forEach(element => {
      if(!element.value) return

      if(mainDiv.current.querySelectorAll(`input[name="${element.name}"]`).length == 1)
        return data[element.name] = element.value

      if(data[element.name])
        data[element.name].push(element.value)
      else data[element.name] = [element.value]
    });

    if(setData) setData(data)
  }

  return (
    <div ref={mainDiv} className='flex flex-col px-4 w-full mb-10'>
        <div className='w-full  flex justify-start items-center gap-2'>
          <div className='text-sky-500'>{title}</div>
          {
              addable?( 
                <>
                  <span onClick={() => setInputCount(inputCount + 1 )} className="material-symbols-outlined bg-dsh text-white rounded-md hover:cursor-pointer">add</span> 
                  <span onClick={() => inputCount > 0 ? setInputCount(inputCount - 1 ) : null } className="material-symbols-outlined bg-dsh text-white rounded-md hover:cursor-pointer">remove</span> 
                </>
              ): null
            }
        </div>
        {children}      
        {
            [...Array(inputCount)].map((e , index) => (
              <div key={index}>
                <input className='text-gray-500 text-lg mt-6 bg-transparent' placeholder={addablePlaceholderTitle? addablePlaceholderTitle : 'أدخل العنوان هنا'} />
                <input className='bg-transparent border-b-[1px] border-gray-300 w-full mt-2 mb-2 pb-2' placeholder={addablePlaceholderValue ? addablePlaceholderValue : 'ادخل القيمة هنا'} />
              </div>
            ))
        }
        <button onClick={clickHandle} className='py-2 px-8 bg-transparent text-dsh border-[1px] border-dsh hover:bg-dsh hover:text-white rounded mt-4 w-fit'>إرسال</button>
    </div>
  )
}

export default InputCollectionComp