'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const MiddlePartComp = () => {
    const [menuState , setMenuState] = useState(false)
  return (
    <div className="">
      <div className="max-w-[1170px] mx-auto flex justify-between items-center px-10 relative ">

        {/* larg screen navbar */}
        <nav className="hidden xl:flex justify-start items-center flex-1 text-main2 font-semibold gap-x-2">
            <Link className="header_link relative pe-2 py-8 hover:text-main focus:text-main" href={'/'}>الصفحة الرئيسية</Link>
            <Link className="header_link relative px-2 py-8 hover:text-main focus:text-main" href={'/services'}>الخدمات</Link>
            <Link className="header_link relative px-2 py-8 hover:text-main focus:text-main" href={'/contact'}>تواصل معنا</Link>
            <Link className="header_link relative px-2 py-8 hover:text-main focus:text-main" href={'/about'}>معلومات عنا</Link>
            <Link className="header_link relative px-2 py-8 hover:text-main focus:text-main" href={'/dashboard'}>لوحة التحكم</Link>
        </nav>
        {/* small screen menu button */}
        <div className="flex-1 xl:hidden py-8 hover:cursor-pointer">
          <span onClick={() => setMenuState(!menuState)} className="material-symbols-outlined text-gray-700 hover:cursor-pointer" style={{fontSize:40 , display:!menuState ? 'inline' : 'none'}}>menu</span>
          <span onClick={() => setMenuState(!menuState)} className="material-symbols-outlined text-gray-700 hover:cursor-pointer" style={{fontSize:40 , display:menuState ? 'inline' : 'none'}}>close</span>
        </div>
        {/* logo div */}
        <div className="flex-1 flex justify-end items-center">
          <Link className="" href={"/"}>
            <img className="w-32" src='/icon/logo.svg' />
          </Link>
        </div>
      </div>
      {/* small screen menu */}
      <div className="xl:hidden w-11/12 mx-auto flex flex-col justify-start items-start px-4 shadow-lg shadow-sky-100 border-main border-t-[3px]" style={{display:menuState?'flex' : 'none'}}>
        <Link className="py-4 border-b-[1px] border-gray-200 w-full" href={'/'}>الصفحة الرئيسية</Link>
        <Link className="py-4 border-b-[1px] border-gray-200 w-full" href={'/services'}>الخدمات</Link>
        <Link className="py-4 border-b-[1px] border-gray-200 w-full" href={'/contact'}>تواصل معنا</Link>
        <Link className="py-4 border-b-[1px] border-gray-200 w-full" href={'/about'}>معلومات عنا</Link>
        <Link className="py-4 border-b-[1px] border-gray-200 w-full" href={'/dashboard'}>لوحة التحكم</Link>
      </div>
    </div>
  )
}

export default MiddlePartComp