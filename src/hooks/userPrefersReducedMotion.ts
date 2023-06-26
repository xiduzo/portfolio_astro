import { useMemo } from "react";

export const userPrefersReducedMotion = () => {
    const reduceMotion = useMemo(() => {
    // @ts-ignore
    return window?.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window?.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
  }, [])

    return reduceMotion;
}