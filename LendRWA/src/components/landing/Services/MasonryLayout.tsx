"use client";
import { services } from "@/constants/service_cons";
import { colors } from "@/constants/colors";
import Masonry from "react-masonry-css";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const breakpoints = {
  default: 4,
  1840: 4,
  1558: 3,
  1250: 2,
  775: 1,
};

export default function MasonryLayout() {
  // const currentSection = useRef(null);
  // const isMobile = false;
  // useGSAP(
  //   () => {
  //     if (isMobile) return;

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: currentSection.current,
  //         start: "top 55%",
  //         end: "bottom bottom",
  //         scrub: true,
  //       },
  //     });

  //     tl.from(
  //       ".card",
  //       {
  //         y: -20,
  //         opacity: 0,
  //         ease: "none",
  //       },
  //       "-=0.2"
  //     );
  //   },
  //   { scope: currentSection, dependencies: [isMobile] }
  // );
  return (
    <>
      <Masonry
        breakpointCols={breakpoints}
        // ref={currentSection}
        className={"my-masonry-grid"}
        columnClassName="my-masonry-grid_column"
      >
        {services.map((service, i) => {
          return (
            <div
              style={{ backgroundColor: colors[i % (colors.length - 1)] }}
              className="card max-w-[415px] min-w-[350px] overflow-hidden hover:-translate-y-3 transition-transform duration-300 mt-[30px] flex flex-col gap-5 h-fit rounded-2xl px-[48px] relative py-[53px]"
              key={i}
            // data-scroll
            // data-scroll-speed={(i + 1) % 3 === 2 ? "0.3" : "0.1"}
            >
              <span className="text-7xl">{service?.icon}</span>
              <h4 className="text-3xl  z-20 font-bold">{service?.name}</h4>
              <p className="text-justify text-xs sm:text-sm lg:text-base sm:!block z-20 leading-snug">
                {service?.description}
              </p>
              <span className="text-[18rem] -scale-x-[100%] absolute bottom-0 z-10 text-white right-0 translate-x-1/3 translate-y-1/3">
                {service?.icon}
              </span>
            </div>
          );
        })}
      </Masonry>
    </>
  );
}
