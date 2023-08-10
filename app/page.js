import Link from "next/link";
import UpperPart from "./components/header/UpperPart";
import MiddlePart from "./components/header/MiddlePart";
import SliderPart from "./components/header/SliderPart";

export default function Home() {
  return (
    <header>
      <UpperPart/>
      <MiddlePart/>
      <SliderPart/>
    </header>
  )
}
