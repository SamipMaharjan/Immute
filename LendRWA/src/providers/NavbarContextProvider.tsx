"use client";
import React, { createContext, useContext, useState } from "react";

interface NavbarContextProps {
  disableIsScroll: boolean;
  toggleDisableIsScroll: (state?: boolean) => void;
}

const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};

export const NavbarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const [isDisable, setIsOpen] = useState(false);
  const [disableIsScroll, setDisableIsScroll] = useState<boolean>(false);

  const toggleDisableIsScroll = (state: boolean | undefined) => {
    if (state) {
      setDisableIsScroll(state);
    } else {
      setDisableIsScroll((prev) => !prev);
    }
  };

  return (
    <NavbarContext.Provider value={{ disableIsScroll, toggleDisableIsScroll }}>
      {children}
    </NavbarContext.Provider>
  );
};
