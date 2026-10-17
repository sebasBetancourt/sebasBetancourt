"use client";

import { useEffect, useState } from "react";

// defaultValue se usa en el servidor y en el primer render, antes de leer matchMedia
export function useMediaQuery(query: string, defaultValue = false) {
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
