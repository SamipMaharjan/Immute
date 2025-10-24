"use client";
import React, { useState } from "react";
import threatnix_dark_logo from "/public/threatn.svg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineCopyright } from "react-icons/ai";

import ContactUsDialog from "@/components/utils/ContacUsDialog/ContactUsDialog";
import {
  learn_more,
  office_content,
  SOCIAL_LINKS,
} from "@/constants/footer_cons";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="w-full flex relative flex-col px-[10px] pb-[30px] pt-5  text-white bg-[#1D1D1F]  ">
        <div className="mx-auto max-w-[1345px] items-start   pt-16 h-full grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-20 ">
          <ul className=" w-full sm:min-w-[300px] flex flex-col gap-10 sm:gap-20 justify-center ">
            <li className="text-xl sm:text-[30px] sm:leading-[44px] font-bold">
              Eradicating threats today, securing tommorow.{" "}
            </li>

            <Image
              className=" w-[140px] sm:w-[240px]"
              src={threatnix_dark_logo}
              alt="threatnix logo"
              width={240}
            />
          </ul>

          <div className="flex flex-col justify-center">
            <span className="text-[20px] text-white font-bold tracking-tight sm:tracking-widest">
              Office in Nepal
            </span>
            <ol className="mt-4 flex flex-col gap-4">
              {office_content?.map((content, i) => {
                return (
                  <li
                    className={`${
                      i === office_content.length - 1 ? "cursor-pointer" : ""
                    } flex gap-4 cursor-default text-[#b2b2b2] text-xs sm:text-base hover:text-white transition-colors duration-300 items-center`}
                    key={i}
                    onClick={() => {
                      if (i === office_content.length - 1) setIsOpen(true);
                    }}
                  >
                    <span className="min-w-[30px] min-h-[30px] sm:min-w-[60px] sm:min-h-[60px] flex items-center justify-center pl-[2px] text-xs sm:text-base  rounded-full bg-[#333335] text-[#fffefe]">
                      0{i + 1}.
                    </span>
                    {content?.content}
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="  flex flex-col gap-0 sm:gap-4 justify-center">
            <span className="text-base sm:text-[20px] mb-3 sm:mb-0 text-white font-bold tracking-widest">
              Learn More
            </span>
            {learn_more?.map((item: { title: string; link: string }) => {
              return (
                <>
                  <Link
                    href={item?.link}
                    key={item.title}
                    // target="_blank"
                    target={item.title === "Career" ? "_self" : "_blank"}
                    className="text-[#b2b2b2] text-xs sm:text-base group w-fit hover:text-[#ffffff] transition duration-400"
                  >
                    {item.title}
                    <div className="w-0 border-t border-white h-0 group-hover:w-full transition-all duration-800"></div>
                  </Link>
                </>
              );
            })}
          </div>

          <div className=" flex justify-center flex-col gap-0 sm:gap-6">
            <span className=" text-base mb-3 sm:text-[20px] font-bold">
              Contact Us
            </span>
            <span className="text-[#b2b2b2] text-xs sm:text-base whitespace-pre-line">
              Check any of our any social media pages or get in touch with us
              directly via{" "}
              <span
                onClick={() => setIsOpen(true)}
                className="text-base sm:text-lg group cursor-pointer w-fit text-[#ffffff] transition duration-400"
              >
                email
              </span>
              .
            </span>
            <div className="flex gap-4">
              {SOCIAL_LINKS?.map((item, i) => {
                return (
                  <Link
                    key={i}
                    href={item.href}
                    target="_blank"
                    className="text-[#b2b2b2] text-xs sm:text-base group w-fit hover:text-[#ffffff] transition duration-400"
                  >
                    {item.image}
                  </Link>
                );
              })}
            </div>
            {/* <button></button> */}
          </div>
        </div>
      </section>
      <div className="h-20 text-[#b2b2b2] flex text-xs sm:text-base bg-[#0c0c0c] w-full  items-center justify-center">
        <AiOutlineCopyright className="pr-2" size={26} />{" "}
        {new Date().getFullYear()} ThreatNix, All rights reserved
      </div>
      <ContactUsDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
