"use client";

import ContactUsDialog from "@/components/utils/ContacUsDialog";
import { useState } from "react";
import React from "react";

export default function ApplyBtn() {
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsContactUsOpen(true)}
        className="bg-blue-500 hidden rounded-lg px-6 min-w-36 h-10 items-center justify-center text-white lg:!flex mt-6"
      >
        Apply
      </button>

      <ContactUsDialog
        isOpen={isContactUsOpen}
        setIsOpen={setIsContactUsOpen}
      />
    </>
  );
}
