import React from "react";
import { job_openings } from "@/constants/career_cons";
import DisableNavScroll from "@/components/utils/DisableNavScroll";
// import { useRouter } from "next/router";
import ApplyBtn from "./ApplyBtn";
// import ScrollToTop from "@/components/utils/ScrollToTop";

export async function generateStaticParams() {
  const positions = job_openings?.map((op) => ({ position: op.route }));
  console.log("positions", positions);
  return positions;
}

export default async function Position({
  params,
}: {
  params: Promise<{ position: string }>;
}) {
  const positionObj = await params;
  const openingData = job_openings.find(
    (op) => op.route === positionObj.position
  );
  console.log("openign", openingData);

  return (
    <>
      <DisableNavScroll />
      {/* <ScrollToTop /> */}
      <section id="opening-description" className=" bg-white py-32">
        <div className="h-full text-[#5F6567] max-w-[1170px] gap-[18px] flex flex-col items-start w-full mx-auto ">
          <h1 className="text-[50px] font-semibold text-[#0a0d31]">
            {openingData?.title}
          </h1>
          <p className="text-lg ">{openingData?.description}</p>
          <span className="  font-bold text-xl">Key Responsibilities</span>
          <ul>
            {openingData?.responsibilities?.map((item, i) => {
              return (
                <li key={i} className="text-lg ">
                  <span className="flex">&#8226; {item}</span>
                </li>
              );
            })}
          </ul>
          <span className=" font-bold text-xl">Qualifications</span>
          <ul>
            {openingData?.qualifications?.map((item, i) => {
              return (
                <li key={i} className="text-lg ">
                  <span>&#8226; {item}</span>
                </li>
              );
            })}
          </ul>
          <span className=" font-bold text-xl">Benefits</span>
          <ul>
            {openingData?.benefits?.map((item, i) => {
              return (
                <li key={i} className="text-lg ">
                  <span>&#8226; {item}</span>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col">
            <span>
              <span className=" font-bold text-xl pr-2">Job Category:</span>
              <span className=" text-lg">{openingData?.department}</span>
            </span>
            <span>
              <span className=" font-bold text-xl pr-2">Location:</span>
              <span className=" text-lg">{openingData?.location}</span>
            </span>
            <span>
              <span className=" font-bold text-xl pr-2">Type:</span>
              <span className=" text-lg">{openingData?.type}</span>
            </span>
          </div>
          <ApplyBtn />
        </div>
      </section>
    </>
  );
}
