"use client";
import React, { useRef } from "react";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import cms_commander from "/public/our_clients/cms_logo.png";
import GlobalImeBank from "/public/our_clients/globalime_logo.jpg";
import national_life from "/public/our_clients/nlife_logo.jpg";
import NMB from "/public/our_clients/NMB.png";
import uxcam from "/public/our_clients/uxcam_logo.png";
import tactical_arbitrage from "/public/our_clients/tactical_arbitrage.jpg";
import systemhub from "/public/our_clients/systemhub.webp";
import Siemplify_logo from "/public/our_clients/Siemplify_logo.webp";
import paywell from "/public/our_clients/paywell.png";
import nic_bank from "/public/our_clients/nic_bank.png";
// import UpDownFade from "@/components/utils/UpDownFade";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// const carouselHeight = [320, 360, 300, 330, 310];
const clients = [
  { name: "Tactical Arbitrage", logo: tactical_arbitrage },
  { name: "Systemhub", logo: systemhub },
  { name: "Siemplify", logo: Siemplify_logo, width: 200 },
  { name: "Paywell", logo: paywell },
  { name: "NIC Bank", logo: nic_bank },
  { name: "Global Ime Bank", logo: GlobalImeBank, width: 150 },
  { name: "National Life", logo: national_life, width: 200 },
  { name: "NMB", logo: NMB, width: 200 },
  { name: "CMS Commander", logo: cms_commander },
  { name: "UXCam", logo: uxcam, width: 210 },
];
export default function OurClients() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );
  const currentSection = useRef(null);
  const isMobile = false;
  useGSAP(
    () => {
      if (isMobile) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: currentSection.current,
          start: "top 90%",
          end: "bottom bottom",
          scrub: true,
        },
      });

      tl.from(
        ".title",
        {
          y: -20,
          opacity: 0,
          ease: "none",
        },
        "-=0.2"
      ).from(
        ".carousel-content-1",
        {
          y: -20,
          opacity: 0,

          ease: "none",
        },
        "-=0.2"
      );
    },
    { scope: currentSection, dependencies: [isMobile] }
  );
  return (
    <>
      <section
        className="bg-[#DCE8EB] pb-12 pt-12 px-12 "
        id="our-clients"
        ref={currentSection}
      >
        <Carousel plugins={[plugin.current]}>
          <div className="flex max-w-[1305px] mx-auto h-fit items-center justify-between">
            <CarouselPrevious className="  static hidden sm:!flex   w-12 h-12 "></CarouselPrevious>
            <h2 className="title  text-5xl sm:text-7xl mx-auto w-fit mb-10 font-bold text-[#1d1d1f]">
              Our Clients
            </h2>
            <CarouselNext className="  static hidden sm:!flex   w-12 h-12 "></CarouselNext>
          </div>
          <div className=" max-w-[1305px] w-full mx-auto">
            <CarouselContent className="carousel-content gap-8 px-10 my-10">
              {clients?.map((client, i) => {
                return (
                  <CarouselItem
                    className="max-w-[236px] h-[270px] shadow-xl relative -z-10 bg-white flex items-center justify-center  rounded-xs"
                    key={i}
                    // style={{
                    //   height: carouselHeight[i % carouselHeight?.length],
                    // }}
                  >
                    <Image
                      src={client?.logo}
                      alt="image"
                      width={client?.width ? client?.width : 250}
                      height={250}
                      className="left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 absolute"
                    />
                    {/* <span className="absolute uppercase bottom-10 left-8 text-sm font-thin text-[#404040]">
                      {client?.name}
                    </span> */}
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </div>
        </Carousel>
      </section>
    </>
  );
}
// function getRandomNumber() {
//   return Math.floor(Math.random() * 26); // 66 is exclusive upper bound
// }
