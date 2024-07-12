"use client";

import { useState, useEffect } from "react";

const useDevice = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize(); // Llamamos a la función para establecer el estado inicialmente

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { device: isDesktop ? "desktop" : "mobile" };
};

export default useDevice;
