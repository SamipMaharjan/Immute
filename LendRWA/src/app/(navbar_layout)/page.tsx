"use client";
import Hero from "@/components/landing/Hero/Hero";
// import Product from "@/components/landing/Products/Product";
import Services from "@/components/landing/Services/Services";
import OurClients from "@/components/landing/OurClients";
import Certifications from "@/components/landing/Certifications";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Testamonial from "@/components/landing/Testimonials";
import About from "@/components/landing/About";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs></WhyChooseUs>
      <div className=" bg-white h-40"></div>

    </>
  );
}
