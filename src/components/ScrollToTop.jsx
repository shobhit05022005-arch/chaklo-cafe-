"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

function scrollPageToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    if (window.location.hash) return undefined;

    scrollPageToTop();
    const frame = requestAnimationFrame(scrollPageToTop);

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    if (window.location.hash) return undefined;

    scrollPageToTop();
    const timer = window.setTimeout(scrollPageToTop, 0);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
