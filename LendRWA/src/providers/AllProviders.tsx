"use client";

import React from "react";
import { NavbarProvider } from "./NavbarContextProvider";

export default function AllProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarProvider>{children}</NavbarProvider>
    </>
  );
}
