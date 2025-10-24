import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { PiArrowDownRightThin } from "react-icons/pi";
const pricings = [
  {
    name: "Standard",
    price: "16",
    features: [
      "Web & Mobile",
      "IS/IT Audit",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Custom Security Tool Development",
    ],
  },
  {
    name: "Essential",
    price: "32",
    features: [
      "Web & Mobile",
      "IS/IT Audit",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Custom Security Tool Development",
      "Security Operations Center (SOC)",
      "Site Cleaning and Malware Removal",
      "Code Review",
    ],
  },
  {
    name: "Premium",
    price: "64",
    features: [
      "Web & Mobile",
      "IS/IT Audit",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Custom Security Tool Development",
      "Security Operations Center (SOC)",
      "Site Cleaning and Malware Removal",
      "Code Review",
      "Incident Response",
      "Managed Cybersecurity Services",
      "System Audit and Hardening",
      "Training and Consultation",
      "Patch Management",
    ],
  },
];
export default function Pricing() {
  return (
    <section className="flex bg-[#F7F7F7] pb-20 pt-32 w-full justify-center items-start">
      {pricings.map((pricing, i: number) => {
        return (
          <div
            key={pricing.name}
            className="w-[413px]  px-[60px] pt-[77px] pb-[71px] "
            style={{
              backgroundColor: i === 1 ? "#FFFFFF" : "transparent",
            }}
          >
            <div className="flex border-b border-[#dbdbdb] justify-between pb-10">
              <div className="flex flex-col items-start">
                <span className="uppercase text-[#404040] text-xs tracking-[0.3em] font-bold">
                  License
                </span>
                <span className="text-[#1d1d1f] text-[22px] tracking-normal leading-[1.44em] font-bold">
                  {pricing?.name}
                </span>
              </div>
              <span className="text-[#262626] text-[75px] font-bold tracking-tighter flex items-start pt-0 leading-[3.75rem] gap-1">
                <span className="text-4xl font-bold">$</span>
                <span className="pt-0">{pricing?.price}</span>
              </span>
            </div>

            <div className="mt-[30px] space-y-2 text-[#4c4c4c]">
              {pricing?.features.map((feature, i) => {
                return (
                  <div
                    className="flex gap-[11px] justify-start items-center"
                    key={i}
                  >
                    <IoMdCheckmark size={18} />
                    <span className="text-lg">{feature}</span>
                  </div>
                );
              })}
              {/* <div className="flex gap-[11px] justify-start items-center">
                <IoMdCheckmark size={18} />
                <span>Web & Mobile</span>
              </div> */}
            </div>
            <button className="flex mt-16 items-center gap-4">
              <span className="text-[#1d1d1f] text-base font-semibold">
                Purchase Now
              </span>
              <PiArrowDownRightThin size={30} className="-rotate-45 " />
            </button>
          </div>
        );
      })}
    </section>
  );
}
