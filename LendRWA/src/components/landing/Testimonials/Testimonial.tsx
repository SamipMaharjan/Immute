"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import styles from "./styles.module.css";
import { useScroll, useTransform, motion } from "framer-motion";
import { testimonials } from "@/constants/testimonials";

export default function Testamonial() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );
  const container = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 100%", "end 55%"],
  });
  const [isMobile, setIsMobile] = React.useState(false);
  const [renderMotion, setRenderMotion] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 650);
  };
  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Effect to delay the render of the circle animation above footer, this is a workaround for the
  // glitchy hero section bug, where the hero section's height is only half its full height when we
  // navigate to services or our-clients section from other pages.
  useEffect(() => {
    setTimeout(() => {
      setRenderMotion(true);
    }, 1000);
  });

  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);
  return (
    <>
      <section
        ref={container}
        id="testimonials"
        className="bg-[#DCE8EB]  pt-[90px] pb-[0px]  px-[0px] lg:px-[50px]"
      >
        <h2 className="text-5xl sm:text-7xl  mx-auto w-fit mb-8   font-bold text-[#1d1d1f]">
          Testimonials
        </h2>
        <div>
          <Carousel plugins={[plugin.current]}>
            <CarouselContent className="gap-8 px-0 lg:px-10 pt-10 pb-10">
              {testimonials?.map((testimonial, i) => {
                return (
                  <CarouselItem className="pb-10" key={i}>
                    <div className="w-[400px] sm:w-[650px] lg:w-[807px] flex flex-col items-center relative z-10 bg-white rounded-xl p-[50px] mx-auto text-sm sm:text-2xl">
                      <p className=" text-[#666666] text-center leading-2 sm:leading-8">
                        {testimonial?.description}
                      </p>
                      <span className="font-semibold mt-5 sm:mt-20">
                        {testimonial?.name}
                      </span>
                      <span className="text-[#666666] mt-1">
                        {testimonial.company}
                      </span>
                      <div className=" w-[120px] absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/3 h-[120px] rounded-full bg-[#dce8eb] flex items-center justify-center">
                        <div className="w-[75px] flex items-center justify-center h-[75px] rounded-full bg-white">
                          {" "}
                          <Image
                            src={testimonial.logo}
                            alt={testimonial?.name}
                            width={50}
                            // className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
                            height={50}
                          ></Image>
                        </div>
                      </div>
                      <div className="w-5/6 h-full bg-white  absolute bottom-[-25px] opacity-60 rounded-[10px] -z-10"></div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
        {!isMobile && renderMotion && (
          <motion.div style={{ height }} className={styles.circleContainer}>
            <div className={styles.circle}></div>
          </motion.div>
        )}
      </section>
    </>
  );
}
