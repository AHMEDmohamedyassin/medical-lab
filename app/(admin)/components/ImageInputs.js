import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';

const ImageInputs = ({setImgs , title , number}) => {
    const inputs = useRef(null)
    const [images , setImages] = useState([])
    let inputs_no = number ? number : 1 ;

    const handleClick = (e, id) => {
        if(!e.target.classList.contains('allowed_click')) return  
        const input = inputs.current.querySelector(`.input_${id}`)
        input?.click()
    }
    const inputValueHandle = (e , index) => {
        const file = e.target.files[0]
        if(!file) return 

        if(!['image/jpeg' , 'image/jpg' , 'image/png'].includes(file.type)){
            e.target.value = ""
            return toast.error('png , jpg , jpeg يجب رفع صورة')
        }

        if(index == 0)
            setImages([file , ...images])
        else
            setImages([...images , file])

        const url = URL.createObjectURL(file)

        const image_div = e.target.parentElement
        image_div.querySelector('.the_text').classList.add('display_none')
        image_div.querySelector('.the_img').classList.remove('display_none')
        image_div.querySelector('.the_img img').src = url
    }

    const removeImage = (e) => {
        e.target.parentElement.classList.add('display_none')   
        const main_div = e.target.parentElement.parentElement
        const input = main_div.querySelector('input')
        main_div.querySelector('.the_text').classList.remove('display_none')

        let a = images
        a.splice(a.indexOf(input.files[0]) , 1)
        setImages(a)
        input.value = ''
    }

    useEffect(() => {
        setImgs(images)
    } , [images])
  return (
    <>

        <label className='text-gray-500 text-lg'>{title}</label>
        <div ref={inputs} className='w-full justify-start items-start flex gap-4 flex-wrap mb-4 mt-2'>
            
            {
                new Array(inputs_no).fill(0).map((e , index) => (
                        <div key={index} onClick={(e) => handleClick(e, index)} className='allowed_click flex justify-center items-center w-32 h-20 border-dsh border-[1px] rounded text-sm text-gray-500 font-bold hover:cursor-pointer hover:text-dsh'>
                            <div className='allowed_click the_text flex justify-center items-center text-inherit'>
                                <span  className="allowed_click material-symbols-outlined text-inherit">add</span> 
                                <span className='allowed_click text-inherit'>إضافة صورة</span>
                            </div>
                            <div className='the_img display_none w-full h-full overflow-hidden relative'>
                                <img className='w-full h-full' src='https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=600' />
                                <span onClick={removeImage} className="material-symbols-outlined z-50 text-red-500 font-extrabold absolute top-[10px] left-[10px] bg-white rounded-lg" style={{fontSize:30}}>close</span>
                            </div>
                            <input onChange={(e) => inputValueHandle(e , index)} type='file' hidden className={`input_${index}`} />
                        </div>
                ))
            }
            
        </div>
    </>
  )
}

export default ImageInputs