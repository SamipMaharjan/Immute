import Footer from "@/components/landing/Footer";
import Navbar from "@/components/layouts/Navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-[#DCE8EB]  overflow-hidden flex-col w-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
