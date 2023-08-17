'use client'
import Link from 'next/link'
import React, { useRef } from 'react'

const SideMenu = () => {
    const sidemenu = useRef(null)

    const clickHandle = (e) => {
        const element = e.currentTarget
        const parent = element.parentElement

        if(!element.classList.contains('side_menu_main_link')) {
          sidemenu.current.childNodes.forEach(element => {
            element.classList.remove('side_menu_main_link_background')
            element.querySelector('.title_div')?.classList.remove('side_menu_main_link')
            element.querySelector('.large_sub_list')?.classList.remove('side_menu_sub_link')
          });
        }

        element.classList?.toggle('side_menu_main_link')
        parent.classList?.toggle('side_menu_main_link_background')
        parent.querySelector('.large_sub_list')?.classList.toggle('side_menu_sub_link')
    }

  return (
    <div ref={sidemenu} className="w-16 lg:w-64 h-full bg-[#242a33] flex flex-col justify-start items-start pt-8">

        <Link href={'/dashboard'} className="w-full px-6 py-2 relative">
          <div onClick={clickHandle} className="flex justify-start items-center gap-x-2 text-[#687384] hover:text-[#fff] hover:cursor-pointer w-full title_div">
            <span className="material-symbols-outlined text-inherit">dashboard</span>
            <div className="hidden lg:block text-lg text-inherit">لوحة التحكم</div>
          </div>
        </Link>

        <Link href={'/dashboard/about'} className="w-full px-6 py-2 relative">
          <div onClick={clickHandle} className="flex justify-start items-center gap-x-2 text-[#687384] hover:text-[#fff] hover:cursor-pointer w-full title_div">
            <span className="material-symbols-outlined text-inherit">info</span>
            <div className="hidden lg:block text-lg text-inherit">معلومات عنا</div>
          </div>
        </Link>

        <Link href={'/dashboard/contact'} className="w-full px-6 py-2 relative">
          <div onClick={clickHandle} className="flex justify-start items-center gap-x-2 text-[#687384] hover:text-[#fff] hover:cursor-pointer w-full title_div">
            <span className="material-symbols-outlined text-inherit">phone_in_talk</span>
            <div className="hidden lg:block text-lg text-inherit">معلومات التواصل</div>
          </div>
        </Link>

        <div className="w-full px-6 py-2 relative">
          <div onClick={clickHandle} className="flex justify-start items-center gap-x-2 text-[#687384] hover:text-[#fff] hover:cursor-pointer w-full title_div">
            <span className="material-symbols-outlined text-inherit">pin_drop</span>
            <div className="hidden lg:block text-lg text-inherit">الفروع</div>
          </div>
          <div className="max-lg:absolute top-0 right-16 max-lg:bg-[#303844] max-lg:w-48 flex flex-col items-start justify-start gap-y-2 ps-6 overflow-hidden h-0 large_sub_list">
            <br className='my-1'/>
            <Link href={'/dashboard/places'} className="text-[#687384] hover:text-[#fff]">جميع الفروع</Link>
            <Link href={'/dashboard/places/create'} className="text-[#687384] hover:text-[#fff]">إنشاء فرع</Link>
            <br className='my-1'/>
          </div>
        </div>

        <div className="w-full px-6 py-2 relative">
          <div onClick={clickHandle} className="flex justify-start items-center gap-x-2 text-[#687384] hover:text-[#fff] hover:cursor-pointer w-full title_div">
            <span className="material-symbols-outlined text-inherit">medical_services</span>
            <div className="hidden lg:block text-lg text-inherit">الخدمات</div>
          </div>
          <div className="max-lg:absolute top-0 right-16 max-lg:bg-[#303844] max-lg:w-48 flex flex-col items-start justify-start gap-y-2 ps-6 overflow-hidden h-0 large_sub_list">
            <br className='my-1'/>
            <Link href={'/dashboard/services'} className="text-[#687384] hover:text-[#fff]">جميع الخدمات</Link>
            <Link href={'/dashboard/services/create'} className="text-[#687384] hover:text-[#fff]">إنشاء خدمة</Link>
            <br className='my-1'/>
          </div>
        </div>

        <Link href={'/dashboard/sliders'} className="w-full px-6 py-2 relative">
          <div onClick={clickHandle} className="flex justify-start items-center gap-x-2 text-[#687384] hover:text-[#fff] hover:cursor-pointer w-full title_div">
            <span className="material-symbols-outlined text-inherit">smart_display</span>
            <div className="hidden lg:block text-lg text-inherit">الشرائح</div>
          </div>
        </Link>


    </div>
  )
}

export default SideMenu