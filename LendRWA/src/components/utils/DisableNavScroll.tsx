"use client";

import { useNavbar } from "@/providers/NavbarContextProvider";
import React, { useEffect } from "react";

/**
 * A client-side component that temporarily disables the navbar's scroll
 * detection mechanism while it is mounted.
 *
 * It prevents navbar from changing its background color.
 *
 * @returns an empty JSX element
 */

export default function DisableNavScroll() {
  const { toggleDisableIsScroll } = useNavbar();

  useEffect(() => {
    toggleDisableIsScroll(true);
    return () => toggleDisableIsScroll(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
