"use client";
import React from "react";
import "swiper/css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/custom_carousel";
import Image from "next/image";
import { hero_slider } from "@/constants/hero_cons";
// const swiperOptions = {
//   loop: true,
//   freeMode: true,
//   spaceBetween: 0,
//   grabCursor: true,
//   slidesPerView: 7,
//   autoplay: {
//     delay: 1,
//     disableOnInteraction: true,
//   },
//   speed: 5000,
//   freeModeMomentum: false,
// };
//tesla dell dod ford gitlabspayypal tiktok apple mastercard shopify
// #091425
export default function HeroSlider() {
  return (
    <>
      <div className="w-full  h-24 border-b-8 border-[#1C2B48] absolute bottom-0 left-0 bg-gradient-to-r from-[#0c1426] to-[#091425] ">
        <div
          className="h-full w-full absolute z-50 bg-transparent"
          // style={{
          //   backgroundImage: `radial-gradient(ellipse farthest-corner at center top,#0000 70%,#000000ff)`,
          // }}
        ></div>
        <div className="w-[1152px] absolute  left-1/2 bottom-[2px]  -translate-x-1/2">
          <div
            className="absolute z-10 w-[101%] left-1/2
-translate-x-1/2  inset-0 bg-gradient-to-r from-[#0c1426] via-transparent to-[#0c1426] overflow-hidden"
            style={{
              background: `linear-gradient(to right, #0c1426 5%, transparent 50%, #0c1426 95%)`,
            }}
          ></div>
          <Carousel class speed={1.7}>
            <CarouselContent className="gap-8   px-10 my-10">
              {hero_slider?.map((icon, i) => {
                return (
                  <CarouselItem
                    className="max-w-40 h-0 -z-10 flex items-center justify-center  rounded-xl "
                    key={i}
                  >
                    <Image
                      src={icon.logo}
                      alt="image"
                      width={icon.width ? icon.width : 250}
                      height={250}
                      // className=" border-4 border-red-500"
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>
        <span
          data-scroll
          data-scroll-speed="0.15"
          className="absolute bottom-full -translate-y-1/2 w-full flex justify-center text-[#e0e6edaa]  text-[1.2rem] font-thin"
        >
          We have helped secure
        </span>
      </div>
    </>
  );
}
