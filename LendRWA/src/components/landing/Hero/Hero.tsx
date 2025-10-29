// "use client";
import React, { useState } from "react";
import Image from "next/image";

import HeroSlider from "./HeroSlider";
import UpDownFade from "@/components/utils/UpDownFade";
import ContactUsDialog from "@/components/utils/ContacUsDialog/ContactUsDialog";
export default function Hero() {
  const [isContactUsOpen, setIsContactUsOpen] = useState<boolean>(false);
  // isContactUsOpen = null;
  // throw new Error("Error from Hero component");
  return (
    <>
      <section
        data-scroll
        data-scroll-speed="0.15"
        id="hero"
        className="!h-screen border border-black overflow-hidden relative "
      >
        <Image
          src="/BG_TN.png"
          alt="hero"
          fill={true}
          data-scroll
          data-scroll-speed="-0.5"
          className="z-0 absolute top-0 left-0"
        />
        <div className="flex flex-col items-center relative  justify-center border border-black h-[100%]">
          <h1
            data-scroll
            data-scroll-speed="0.4"
            className="text-3xl md:text-5xl/tight lg:text-6xl/tight text-white tracking-normal capitalize leading-normal font-semibold max-w-[45rem] text-center"
          >
            <UpDownFade delay={0.5}>
              Your Trusted Partner in Cybersecurity
            </UpDownFade>
          </h1>
          <div
            data-scroll
            data-scroll-speed="0.3"
            className="text-base sm:text-xl max-w-[60rem] font-medium text-white text-center leading-7 mt-2 capitalize"
          >
            <UpDownFade delay={1}>
              We aim to revolutionize how cybersecurity is strategically and
              comprehensively addressed by organizations worldwide. We aim to be
              the top choice for all your cybersecurity needs.
            </UpDownFade>
          </div>
          <UpDownFade delay={1.3}>
            <div
              data-scroll
              data-scroll-speed="0.2"
              className="flex gap-4 mt-9"
            >
              <button
                className="py-2 bg-primary-700 hover:bg-primary-900  px-16 rounded-md text-white text-base hover:bg-primaryDark  transition-all duration-500 font-medium"
                onClick={() => setIsContactUsOpen(true)}
              >
                Get a Quote
              </button>
            </div>
          </UpDownFade>

          <div
            className="bg-[#112233] hidden 3xl:!flex transform origin-top-left py-6 px-8 text-[#E0E6ED] rounded  flex-col gap-4 w-[326px] jump absolute bottom-[29rem] left-24 shadow-lg"
            style={{ boxShadow: "3px 8px 30px rgba(0, 0, 0, 0.35)" }}
          >
            <span className="text-[#ffffff] bg-[#3B82F659] w-full px-3 rounded text-lg font-medium">
              Guaranteed customer satisfaction
            </span>
            <Image
              src="/hero/customer_service.png"
              alt="customer service"
              width={300}
              height={200}
              className="rounded-lg"
              // className="absolute top-0 left-0 z-10"
            ></Image>
          </div>

          <div
            className="bg-[#112233] hidden 3xl:!flex transform origin-top-left left-24 py-6 px-8 text-[#E0E6ED] rounded w-[326px] gap-4 jump-2 absolute bottom-32 z-10  flex-col"
            style={{ boxShadow: "3px 8px 30px rgba(0, 0, 0, 0.35)" }}
          >
            <span className="text-[#ffffff] bg-[#3B82F659] w-full px-3 rounded text-lg font-medium">
              Fueled by continuous research
            </span>

            <Image
              src="/hero/report.jpeg"
              alt="customer service"
              width={600}
              height={400}
              className="rounded-lg"
              // className="absolute top-0 left-0 z-10"
            ></Image>
          </div>

          <div
            style={{ boxShadow: "3px 8px 30px rgba(0, 0, 0, 0.35)" }}
            className="bg-[#112233] hidden 3xl:!flex transform origin-top-left py-6 px-8 text-[#E0E6ED] rounded w-[276px] flex-col jump-2 gap-4 absolute bottom-[30rem] right-40"
          >
            <span className="text-[#ffffff] bg-[#3B82F659] w-full px-3 rounded text-lg font-medium">
              Tailored security services
            </span>
            <Image
              src="/hero/hck-2.png"
              alt="customer service"
              width={300}
              height={200}
              className="rounded-lg"
            ></Image>
          </div>

          <div
            style={{ boxShadow: "3px 8px 30px rgba(0, 0, 0, 0.35)" }}
            className="bg-[#112233] hidden 3xl:!flex z-10 flex-col transform origin-top-left right-20 py-6 px-8 text-[#E0E6ED] rounded w-[300px] gap-4 bottom-20 jump absolute "
          >
            <span className="text-[#ffffff] bg-[#3B82F659] w-full px-3 rounded text-lg font-medium">
              Certified professinoals.
            </span>
            <Image
              src="/hero/hackers.png"
              alt="customer service"
              width={300}
              height={200}
              className="rounded-lg max-h-[200px]"
            ></Image>
          </div>
        </div>

        <HeroSlider></HeroSlider>
      </section>
      <ContactUsDialog
        quote={true}
        isOpen={isContactUsOpen}
        setIsOpen={setIsContactUsOpen}
      />
    </>
  );
}
