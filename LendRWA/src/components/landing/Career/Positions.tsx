"use client";

import { job_openings } from "@/constants/career_cons";
import { caveat } from "@/lib/fonts";
// import Link from "next/link";
import React, { useRef } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRouter } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);
export default function Positions() {
  const isMobile = false;
  // const [lastScroll, setLastScroll] = useState(0);
  // const [currentScroll, setCurrentScroll] = useState(0);
  // const [isScrolling, setIsScrolling] = useState(false);
  const sectionRef = useRef(null);
  const linksRef = useRef([]);
  const router = useRouter();

  useGSAP(
    () => {
      if (isMobile) return;

      // Animate the title section
      gsap.from(".title-section", {
        y: -30,
        ease: "none",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          end: "top 40%",
          // toggleActions: "play none none reverse",
          scrub: true,
        },
      });

      // Animate each job link
      linksRef.current.forEach((link) => {
        gsap.from(link, {
          y: 50,
          opacity: 0,
          duration: 0.4,
          // delay: index * 0.2, // Stagger the animations
          scrollTrigger: {
            trigger: link,
            start: "top 85%",
            end: "top 15%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  // useEffect(() => {
  //   const interval = setInterval(async () => {
  //     // setLastScroll(currentScroll);
  //     let currentScrollPos = window.scrollY;
  //     await new Promise((resolve) => setTimeout(resolve, 100));
  //     const lastScrollPos = currentScrollPos;
  //     currentScrollPos = window.scrollY;
  //     // const isScrolling = lastScrollPos !== currentScrollPos;

  //     if (currentScrollPos === lastScrollPos) setIsScrolling(false);
  //     else setIsScrolling(true);
  //   }, 200);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <>
      <section
        ref={sectionRef}
        className="py-[120px] px-10 flex flex-col items-center bg-white"
      >
        <div className="title-section text-center flex flex-col items-center justify-center">
          <span
            className={`${caveat.className} text-2xl flex items-center pb-[34px] gap-3`}
          >
            <span className="border-[0.4px] border-b h-0 w-20 border-black"></span>
            Open Positions
            <span className="border-[0.4px] border-b h-0 w-20 border-black"></span>
          </span>
          <span className=" text-[30px] sm:text-[60px] font-medium max-w-[920px] mb-[60px] text-center">
            Bring your passion, and we&apos;ll provide the platform.
          </span>
        </div>

        <div className="max-w-[1350px] w-full border-t-[0px] border-[#00000044] flex flex-col justify-center items-center">
          {job_openings?.map((op, i) => (
            <div
              key={i}
              //@ts-expect-error ignore
              ref={(el) => (linksRef.current[i] = el)}
              className={`
                ${
                  i === job_openings.length - 1
                    ? "border-b-[#00000044]"
                    : "border-b-[#00000000]"
                } ${
                op.active
                  ? "cursor-pointer  hover:border-black"
                  : "cursor-not-allowed !text-[#6c757d] "
              }
                grid group grid-cols-[1fr_4fr_1fr] sm:grid-cols-[1fr_4fr_4fr_1fr] py-10 !border-y-[1px] transition-colors duration-300  border-[#00000044]  w-full`}
              // href={`/careers/${op?.route}#opening-description`}
              onClick={() => {
                if (!op.active) return;

                const interval3 = setInterval(async () => {
                  // setLastScroll(currentScroll);
                  let currentScrollPos = window.scrollY;
                  await new Promise((resolve) => setTimeout(resolve, 100));
                  const lastScrollPos = currentScrollPos;
                  currentScrollPos = window.scrollY;
                  // const isScrolling = lastScrollPos !== currentScrollPos;

                  if (currentScrollPos === lastScrollPos) {
                    router.push(`/careers/${op?.route}#opening-description`);
                    clearInterval(interval3);
                  }
                  // if (currentScrollPos === lastScrollPos) setIsScrolling(false);
                  // else setIsScrolling(true);
                }, 200);
              }}
            >
              <span className="text-[20px] w-1/6">
                {i < 10 && 0}
                {i + 1}
              </span>
              <div className="max-w-2/6 w-full font-medium flex flex-col gap-2">
                <span
                  className={`${
                    op.active
                      ? "group-hover:text-[#000000dd]"
                      : "group-hover:text-[#6c757d]"
                  } text-[15px] sm:text-[20px]  transition-colors duration-300 text-[#5F6567] leading-[130%]`}
                >
                  {op?.department}
                </span>
                <span className="text-[20px] sm:text-[40px] leading-[120%]">
                  {op?.title}
                </span>
              </div>
              <p className="hidden sm:!block text-base w-10/12 text-justify text-[#000000cc] leading-[1.5]">
                {op?.description}
              </p>
              <div
                className={`${
                  op.active ? "bg-black" : "bg-[#6c757ddd]"
                } justify-self-end w-[60px] flex items-center justify-center self-center h-[60px] rounded-lg  `}
              >
                <HiOutlineArrowLongRight
                  className="-rotate-45"
                  color="#ffffff"
                  size={32}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
