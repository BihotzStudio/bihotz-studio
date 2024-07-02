import { useEffect, useState } from "react";

export const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  function queryChangeHandler(event) {
    setReducedMotion(event.matches);
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery) {
      setReducedMotion(mediaQuery.matches);

      mediaQuery.addEventListener("change", () => queryChangeHandler);
    }

    return () => mediaQuery.removeEventListener("change", queryChangeHandler);
  }, []);

  return reducedMotion;
};
