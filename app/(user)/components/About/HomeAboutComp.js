import React from 'react'
import ButtonCustom from '../public/ButtonCustom'

const HomeAboutComp = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='flex justify-evently items-center flex-wrap xl:flex-nowrap w-[1170px] xl:py-32 py-10 gap-20 px-10'>

            <div className='flex flex-col items-start justify-start gap-y-4 xl:w-6/12'>
                <p className='text-main text-lg font-semibold'>معلومات عنا</p>
                <h1 className='text-main2 text-2xl sm:text-3xl xl:text-4xl font-extrabold'>نحن نوظف أحدث تقنيات البحث والشركة</h1>
                <p className='text-main2 text-md font-light'>خبرة راسخة في تلخيص ممارسات الطب المخبري الجيدة وعلاج المرضى بأقصى درجات العناية. العلماء يساعدون العلماء.</p>
                
                <div className='flex justify-start items-start flex-wrap w-full gap-8'>

                    <div className='flex flex-col items-start justify-start xl:w-5/12'>
                        <div className='flex justify-start items-center gap-x-3 pb-4 border-b-[1px] border-gray-200 w-full'>
                            <span className="material-symbols-outlined text-main" style={{fontSize:50}}>medical_information</span>
                            <h1 className='font-bold text-main2 text-lg sm:text-xl xl:text-2xl'>فني مختبر طبي</h1>
                        </div>
                        <p className='text-main2 font-light mt-4 text-start'>مجهزون ومدربون للعمل في المستشفيات ومعامل التشخيص والرعاية الصحية</p>
                    </div>

                    <div className='flex flex-col items-start justify-start xl:w-5/12'>
                        <div className='flex justify-start items-center gap-x-3 pb-4 border-b-[1px] border-gray-200 w-full'>
                            <span className="material-symbols-outlined text-main" style={{fontSize:50}}>medical_information</span>
                            <h1 className='font-bold text-main2 text-lg sm:text-xl xl:text-2xl'>فني مختبر طبي</h1>
                        </div>
                        <p className='text-main2 font-light mt-4 text-start'>مجهزون ومدربون للعمل في المستشفيات ومعامل التشخيص والرعاية الصحية</p>
                    </div>


                </div>

                <p className='text-main2 font-light mt-4 text-start'>يجذب مجال الرعاية الصحية الطبية المساعدة لإنقاذ الأرواح ومساعدة الناس ، فكونك طبيبًا ليس خيارك الوحيد. نحن كيف يمكنك مساعدة المرضى دون أن تكون طبيباً ، فنحن هنا نقدم </p>
                
                <div className='flex items-center justify-center flex-wrap gap-4 mt-4'>
                    <ButtonCustom text={'الخدمات'} textColor={'main'} hoverColor={'main'} />
                    <ButtonCustom text={'معلومات عنا'} textColor={'main'} hoverColor={'main'} />
                </div>
            </div>

            <div className='relative h-[630px] xl:w-[480px] w-full sm:w-3/4' style={{
                backgroundImage:"url('https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                backgroundPosition:'center',
                backgroundSize:'cover'
            }}>
                <div className='absolute top-2/4 xl:left-3/4 left-0 w-[177px] h-[235px] bg-main text-white flex justify-center items-center flex-col gap-y-4'>
                    <span className="material-symbols-outlined" style={{fontSize:50}}>ecg_heart</span>
                    <h1 className='text-2xl font-bold'>45 سنة</h1>
                    <p className='font-semibold text-md'>خبرة المعمل</p>
                    <div className='absolute top-0 left-0 w-full h-full flex justify-between flex-col items-center'>
                        <div className='w-full flex justify-between items-center'>
                            <span className="material-symbols-outlined -rotate-45" style={{fontSize:40}}>chevron_right</span>
                            <span className="material-symbols-outlined" style={{rotate:'-135deg' , fontSize:40}}>chevron_right</span>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <span className="material-symbols-outlined rotate-45" style={{fontSize:40}}>chevron_right</span>
                            <span className="material-symbols-outlined" style={{rotate:'135deg' , fontSize:40}}>chevron_right</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomeAboutComp