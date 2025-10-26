"use client";

import { useEffect } from "react";

export default function LocomotiveScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  // Function to stop scrolling

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const loco = new LocomotiveScroll({
        // @ts-expect-error adsf
        lenisOptions: { wheelMultiplier: 0.85 },
      });
      // const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return <>{children}</>;
}
