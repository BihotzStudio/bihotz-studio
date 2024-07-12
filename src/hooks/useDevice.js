"use client";

import { useState, useEffect } from "react";

const useDevice = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { device: isDesktop ? "desktop" : "mobile" };
};

export default useDevice;
