import React, { useEffect, useState } from "react";

export default function useMediaQuery() {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 700px)");
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches]);
  return matches;
}
