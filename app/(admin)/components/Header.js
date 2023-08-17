'use client'
import { auth } from '@/app/firebase/config'
import { signOut } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
    const router = useRouter()
    const clickHandle = async () => {
        await signOut(auth)
        router.push('/')
    }
  return (
        <div className="flex justify-between items-center px-10 bg-white absolute w-full top-0 left-0">
          <div className="flex justify-between items-center gap-x-4">
            <button onClick={() => clickHandle()} className="text-dsh text-lg font-bold hover:text-red-500">تسجيل الخروج</button>
          </div>
          <Link href={'/'} className="flex justify-between items-center gap-x-4">
            <img className="w-24" src="/icon/logo.svg" />
          </Link>
        </div>
  )
}

export default Header