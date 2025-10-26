"use client";
import MasonryLayout from "./MasonryLayout";

export default function Services() {
  return (
    <section
      id="our-services"
      className="w-full bg-white pb-10  flex flex-col text-[#101828] items-center pt-20"
    >
      <h2 className="text-6xl lg:text-8xl mb-6 lg:mb-20 font-bold">
        Collateral Options
      </h2>

      <div className="px-20 w-full">
        <MasonryLayout />
      </div>
    </section>
  );
}
