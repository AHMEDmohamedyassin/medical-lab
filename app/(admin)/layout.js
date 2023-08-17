'use client'
import SideMenu from "./components/SideMenu";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function RootLayout({ children }) {
  const [loading , setLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    if(auth.currentUser == null) router.push('/')
    else{
      setLoading(false)
    }
  } , [])
  return (
    <body className="bg-[#f4f6f9] h-full relative">
        <ToastContainer/>
        {
          loading? <Loading/> : (
              <>
                <Header/>
                <div className="flex justify-start items-start h-full pt-12">
                  <SideMenu/>
                  <div className="flex-1 h-full p-4 overflow-auto">
                    {children}
                  </div>
                </div>
              </>
          )
        }
    </body>
  )
}
