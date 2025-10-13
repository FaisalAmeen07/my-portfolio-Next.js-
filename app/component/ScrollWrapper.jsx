"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { scroller } from "react-scroll";

const ScrollWrapper = () => {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

  useEffect(() => {
    if (scrollTo) {
      setTimeout(() => {
        scroller.scrollTo(scrollTo, {
          duration: 600,
          smooth: "easeInOutQuart",
          offset: -80, 
        });
      }, 300);
    }
  }, [scrollTo]);

  return null; 
};

export default ScrollWrapper;