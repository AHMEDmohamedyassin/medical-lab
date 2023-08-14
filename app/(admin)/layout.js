import Link from "next/link";
import SideMenu from "./components/SideMenu";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children }) {
  return (
    <body className="bg-[#f4f6f9] h-full relative">
        <ToastContainer/>
        <div className="flex justify-between items-center px-10 bg-white absolute w-full top-0 left-0">
          <div className="flex justify-between items-center gap-x-4">
            <img className="w-8 h-8 rounded-full" src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
            <div className="font-semibold hidden sm:inline">أحمد محمد ياسين</div>
          </div>
          <Link href={'/'} className="flex justify-between items-center gap-x-4">
            <img className="w-24" src="/icon/logo.svg" />
          </Link>
        </div>
        <div className="flex justify-start items-start h-full pt-12">
          <SideMenu/>
          <div className="flex-1 h-full p-4 overflow-auto">
            {children}
          </div>
        </div>
    </body>
  )
}
