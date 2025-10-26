"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const whyChooseUs = [
  {
    "title": "Access Global Crypto Markets",
    "description": "Immute unlocks access to the global crypto economy, allowing individuals and businesses to leverage their real-world assets to participate in decentralized opportunities without borders or banking limitations."
  },
  {
    "title": "Fast and Flexible Liquidity",
    "description": "By using RWAs as collateral, Immute enables instant borrowing against tangible assets—offering quick liquidity without the need to sell property, securities, or other valuable holdings."
  },
  {
    "title": "Borderless Financial Access",
    "description": "Immute bridges traditional finance with decentralized networks, allowing users to borrow, trade, and invest globally, free from jurisdictional restrictions or currency barriers."
  },
  {
    "title": "Retain Ownership While Borrowing",
    "description": "Unlike traditional loans, Immute allows you to keep ownership of your underlying assets while accessing crypto liquidity, ensuring your wealth continues to grow as your assets appreciate."
  },
  {
    "title": "Transparent and Smart-Contract-Driven Collateralization",
    "description": "All lending and borrowing on Immute are executed on-chain through Solana programs, ensuring automated, transparent, and secure transactions with faster settlements and minimal fees."
  },
  {
    "title": "Efficient Capital Utilization",
    "description": "Immute transforms idle real-world assets into productive capital, letting users tap into liquidity without liquidation—improving overall capital efficiency and financial flexibility."
  }
];

export default function WhyChooseUs() {
  const currentSection = useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);

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

  useGSAP(
    () => {
      if (isMobile) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: currentSection.current,
          start: "top 55%",
          end: "bottom bottom",
          scrub: true,
        },
      });

      tl.from(
        ".title",
        {
          y: 0,
          opacity: 0,
          ease: "none",
        },
        "-=0.2"
      ).from(
        ".content-1",
        {
          y: 0,
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
      <section ref={currentSection} className="bg-white px-12">
        <h2
          data-scroll
          data-scroll-speed="0.25"
          className="title text-5xl sm:text-7xl relative top-10 mx-auto w-fit pb-20 pt-1 sm:pt-40 font-bold text-[#1d1d1f] "
        >
          Why Immute RWAs
        </h2>
        <div className="content-1 flex justify-center max-w-[1335px] gap-[66px]   m-auto  flex-wrap">
          {whyChooseUs?.map((element, i) => {
            return (
              <div
                key={i}
                data-scroll
                data-scroll-speed="0.1"
                className="max-w-[381px] min-w-[280px]  text-[#1d1d1f] h-auto sm:h-[208px] flex flex-col"
              >
                <span className=" text-base font-bold">0{i + 1}.</span>
                <div className="border-[#dbdbdb] border-b-[1px] flex flex-col"></div>
                <span className="mt-[22px] w-full mb-[12px] text-2xl font-bold">
                  {element?.title}
                </span>
                <p className="text-[#4c4c4c] text-base sm:text-lg text-justify ">
                  {element?.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
