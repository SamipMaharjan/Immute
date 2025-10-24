import React from "react";
import easm_dashboard from "/public/products/easm_dashboard.png";
import Image from "next/image";
const products = [
  {
    name: "External Attact Surface Management",
    description:
      "We conduct thorough assessments of your information systems to ensure compliance with industry standards, identify potential risks, and recommend improvements. Our audits help strengthen your IT infrastructure, enhance efficiency, and align your operations with best practices.",
    image: easm_dashboard,
  },
  {
    name: "Vulnerability Assessment",
    description:
      "Proactively identify and evaluate security weaknesses in your systems, networks, and applications. Our detailed assessments provide actionable insights to mitigate risks and improve your organizations security posture before vulnerabilities can be exploited.",
    image: easm_dashboard,
  },
  // {
  //   name: "Penetration Testing",
  //   description:
  //     "Simulate real-world cyberattacks to uncover vulnerabilities in your systems, applications, and networks. Our penetration testing services provide critical insights and help you build stronger defenses against potential security breaches.",
  // },
];
export default function Product() {
  return (
    <>
      <section
        id="our-products"
        className="flex flex-col bg-white items-center pt-32 pb-32"
      >
        <h2 className="text-5xl lg:text-8xl mb-10 lg:mb-32 font-bold text-[#222222]">
          Our Products
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-16 px-12 overflow-hidden">
          {products.map((product) => {
            return (
              <>
                <div
                  className="relative cursor-pointer overflow-hidden"
                  key={product.name}
                >
                  <div className="w-[350px] h-[200px] lg:w-[590px]  group mb-0 lg:mb-6 rounded-2xl lg:h-[445px] overflow-hidden relative ">
                    <Image
                      src={product?.image}
                      alt="image"
                      fill={true}
                      className=" group mb-6 rounded-2xl  overflow-hidden z-0 relative"
                    />
                    {/* <div className="group-hover:opacity-70 opacity-0 transition-opacity duration-300  absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#000000] to-transparent rounded-2xl"></div> */}
                  </div>

                  <span className="text-[#222222] font-semibold tracking-wider leading-9 text-[clamp(11px,13.1830985915px+0.5633802817vw,24px)]">
                    {product?.name}
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
