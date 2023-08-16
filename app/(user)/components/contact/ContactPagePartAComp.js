import React from 'react'

const ContactPagePartAComp = ({title , location , phones}) => {
  return (
            <div className='w-full xl:w-2/6'>
                <h1 className='text-main2 text-2xl font-extrabold mb-4' >{title}</h1>

                <div className='flex justify-start items-start gap-x-4 border-b-[1px] border-gray-300 py-6 w-full'>
                    <span className="material-symbols-outlined text-main" style={{fontSize:40}}>pin_drop</span>
                    <div className='flex flex-col items-start'>
                        <h2 className='text-main2 font-extrabold text-2xl mb-2'>العنوان</h2>
                        <p className='text-gray-500 text-lg'>{location}</p>
                    </div>
                </div>

                <div className='flex justify-start items-start gap-x-4 border-b-[1px] border-gray-300 py-6 w-full'>
                    <span className="material-symbols-outlined text-main" style={{fontSize:40}}>phone_in_talk</span>
                    <div className='flex flex-col items-start'>
                        <h2 className='text-main2 font-extrabold text-2xl mb-2'>أرقام الهاتف</h2>
                        {
                            phones.map((e , index) => (
                                <p key={index} className='text-gray-500 text-lg'>{e}</p>
                            ))
                        }
                    </div>
                </div>

            </div>
  )
}

export default ContactPagePartAComp