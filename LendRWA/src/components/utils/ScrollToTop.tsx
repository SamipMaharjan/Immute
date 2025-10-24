"use client";
import React, { useEffect, useRef } from "react";

export default function ScrollToTop() {
  const scrollToTop = useRef(null);
  useEffect(() => {
    if (window) {
      if (!scrollToTop?.current) return;
      setTimeout(() => {
        console.log("widowsaccesd", scrollToTop);
        // window.scrollTo({ top: 0, behavior: "smooth" });
        // window.location.reload();
        // window.scrollTo({
        //   top: 0,
        //   behavior: "smooth",
        // });
        // const element = scrollToTop.current;
        // const bottom =
        //   //@ts-expect-error ignore
        //   window.innerHeight - element.getBoundingClientRect().height;
      }, 700);
    }
  }, []);

  //   useEffect(() => {
  //     if (window) window.location.reload();
  //   }, []);
  return <div ref={scrollToTop} id="scroll-to-top" className="h-0 w-0"></div>;
}
