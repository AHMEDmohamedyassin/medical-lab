import Footer from './components/footer/Footer'
import FixedEleComp from './components/public/FixedEleComp'
import HeaderComp from './components/header/HeaderComp'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children }) {
  return (
      <body>
        <ToastContainer/>
        <HeaderComp/>
        {children}
        <Footer/>
        <FixedEleComp/>
      </body>
  )
}
