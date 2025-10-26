import React from "react";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-7xl  mx-auto w-fit mb-20 mt-24 font-bold text-[#1d1d1f]">
      {children}
    </h2>
  );
}
