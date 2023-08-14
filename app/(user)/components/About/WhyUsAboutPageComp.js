import React from 'react'

const WhyUsAboutPageComp = () => {
  return (
        <div className='px-10 py-20 relative -z-20 text-white my-10'
          style={{
            backgroundImage:`url('https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1600')` ,
            backgroundSize: 'cover' ,
            backgroundPosition:'center'
          }}
        >
          <div className='absolute top-0 left-0 w-full h-full -z-10 bg-main2/75'></div> {/** dimming div */}

          <div className='w-full xl:w-[1170px] flex flex-col justify-start items-center gap-y-8 mx-auto'>
            <p className='text-md font-bold'>مميزاتنا</p>
            <h1 className='text-3xl font-extrabold'>لماذا تختارنا ؟ </h1>
            <p className='max-w-2xl'>شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح </p>
            
            <div className='flex justify-between sm:flex-row flex-col flex-wrap xl:flex-nowrap items-center w-full gap-10 mt-4 px-10'>

              <div className='flex flex-col items-center justify-between h-32'>
                <span class="material-symbols-outlined" style={{fontSize:60}}>update</span>
                <h2 className='font-bold text-xl'>8 / 24</h2>
                <h2 className='font-bold text-lg'>دعم فني</h2>
              </div>

              <div className=' h-28 w-[1px] bg-gray-300 hidden sm:inline'></div>

              <div className='flex flex-col items-center justify-between h-32'>
                <span class="material-symbols-outlined" style={{fontSize:60 , rotate:'45deg'}}>genetics</span>
                <h2 className='font-bold text-xl'>سرعة</h2>
                <h2 className='font-bold text-lg'>في العمل</h2>
              </div>

              <div className='h-28 w-[1px] bg-gray-300  hidden sm:inline'></div>

              <div className='flex flex-col items-center justify-between h-32'>
                <span class="material-symbols-outlined" style={{fontSize:60}}>science</span>
                <h2 className='font-bold text-xl'>دقة</h2>
                <h2 className='font-bold text-lg'>في النتائج</h2>
              </div>

            </div>

          </div>

        </div>
  )
}

export default WhyUsAboutPageComp