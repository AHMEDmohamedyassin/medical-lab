import SliderPartComp from "./components/public/SliderPartComp";
import HomeAboutComp from "./components/About/HomeAboutComp";
import HomeServicesComp from "./components/services/HomeServicesComp";
import ContactHome from "./components/contact/ContactHome";
import ContactHomeMain from "./components/contact/ContactHomeMain";

export default function Home() {
  return (
    <>
      <SliderPartComp/>
      <HomeAboutComp/>
      <HomeServicesComp/>
      <ContactHome/>
      <ContactHomeMain/>
    </>
  )
}
