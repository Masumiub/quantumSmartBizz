import Image from "next/image";
import Header from "./components/Header";
import Features from "./components/Features";
import Subscription from "./components/Subscription";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Features></Features>
      <Subscription></Subscription>
      <Testimonials></Testimonials>
      <FAQs></FAQs>
    </div>
  );
}
