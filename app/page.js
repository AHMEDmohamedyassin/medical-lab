import Link from "next/link";
import SliderPartComp from "./components/public/SliderPartComp";
import HeaderComp from "./components/header/HeaderComp";
import HomeAboutComp from "./components/About/HomeAboutComp";
import HomeServicesComp from "./components/services/HomeServicesComp";
import ContactHome from "./components/contact/ContactHome";
import ContactHomeMain from "./components/contact/ContactHomeMain";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <HeaderComp/>
      <SliderPartComp/>
      <HomeAboutComp/>
      <HomeServicesComp/>
      <ContactHome/>
      <ContactHomeMain/>
      <Footer/>
    </>
  )
}
