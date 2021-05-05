import { useEffect, useState } from "react";

export default function useMediaQuery() {
  // Set the BREAK POINT
  const breakPoint = "(max-width: 700px)";

  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(breakPoint);
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
