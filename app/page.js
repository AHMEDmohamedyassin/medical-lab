import Link from "next/link";
import SliderPartComp from "./components/public/SliderPartComp";
import HeaderComp from "./components/header/HeaderComp";
import HomeAboutComp from "./components/About/HomeAboutComp";
import HomeServicesComp from "./components/services/HomeServicesComp";

export default function Home() {
  return (
    <>
      <HeaderComp/>
      <SliderPartComp/>
      <HomeAboutComp/>
      <HomeServicesComp/>
    </>
  )
}
