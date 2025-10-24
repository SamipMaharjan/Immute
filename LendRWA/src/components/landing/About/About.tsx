"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const currentSection = useRef(null);
  const isMobile = false;

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
          y: -20,
          opacity: 0,
          ease: "none",
        },
        "-=0.2"
      ).from(
        ".content-1",
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
        ref={currentSection}
        className="flex flex-col items-center px-8 justify-center py-10 lg:py-32 bg-white"
      >
        <h2
          className="title relative top-5 text-6xl lg:text-8xl text-[#1d1d1f] mb-14 font-bold"
          data-scroll
          data-scroll-speed="0.25"
        >
          About Us
        </h2>
        <p
          className="content-1 text-center text-sm sm:text-lg max-w-[1000px] text-[#4c4c4c]"
          data-scroll
          data-scroll-speed="0.1"
        >
          We are a team of developers and finance professionals <span className="font-extrabold">with over 10 years of</span> experience who understand the key needs of the international financial market. Our platform combines deep technical expertise with financial insight to deliver secure, efficient, and borderless access to global liquidity. We blend robust smart contract development with on-chain automation to ensure transparency, eliminate inefficiencies, and maintain accuracy. Our methodologies are inspired by proven financial frameworks and continuously refined through ongoing research and innovation. By delivering clear, verifiable on-chain data and intuitive user experiences, we make decentralized finance accessible, reliable, and impactful for everyone.
        </p>
      </section>
    </>
  );
}
