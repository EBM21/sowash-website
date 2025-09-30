import Image from "next/image";
import Hero from "./components/Hero";
import SocialMediaSlider from "./components/SocialMediaSlider";
import TestimonialSliderSection from "./components/testimonial";
import Footer from "./components/Footer";



export default function Home() {
  return (
<div>
      <Hero />
      <SocialMediaSlider />
      <TestimonialSliderSection/>
      {/* <Footer/> */}
</div>
  );
}
