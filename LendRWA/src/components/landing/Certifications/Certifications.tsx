import React, { useEffect, useRef } from "react";
import cisa_logo from "/public/cisa_logo.png";
import oswp_logo from "/public/oswp_logo.png";
import oscp_logo from "/public/oscp_logo.png";
import oswe_logo from "/public/oswe_logo.png";
import CPTE_logo from "/public/CPTE.png";
import cissp_logo from "/public/cissp_logo.png";
import cisco_ccna from "/public/cisco_ccna.png";
import cpts from "/public/cpts.png";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const certifications = [
  {
    name: "CISA",
    logo: cisa_logo,
  },
  {
    name: "OSWP",
    logo: oswp_logo,
  },
  {
    name: "OSCP",
    logo: oscp_logo,
  },
  {
    name: "OSWE",
    logo: oswe_logo,
  },
  {
    name: "CPTE",
    logo: CPTE_logo,
  },
  {
    name: "CISSP",
    logo: cissp_logo,
  },
  {
    name: "CISCO CCNA",
    logo: cisco_ccna,
  },
  {
    name: "CPTs",
    logo: cpts,
    // width: 250,
    // height: 200,
  },
];
export default function Certifications() {
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
          y: -20,
          opacity: 0,
          ease: "none",
        },
        "-=0.2"
      ).from(
        ".content-1",
        {
          y: -40,
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
        id="certifications"
        ref={currentSection}
        className="flex flex-col bg-white items-center px-12 pb-40"
      >
        <h2 className="title text-4xl sm:text-4xl lg:text-8xl w-fit mb-10 font-bold text-[#1d1d1f]">
          Our Certifications
        </h2>
        <div className="content-1 flex flex-wrap gap-0 sm:gap-3 lg:gap-20  justify-center max-w-[1000px]">
          {certifications?.map((certificate, i: number) => {
            return (
              <Image
                key={i}
                src={certificate?.logo}
                alt={certificate?.name}
                width={170}
                height={170}
                className="rounded mt-14 w-[100px] h-[100px] sm:w-[170px] sm:h-[170px] "
                style={
                  {
                    // boxShadow: "3px 8px 30px rgba(0, 0, 0, 0.35)",
                  }
                }
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
