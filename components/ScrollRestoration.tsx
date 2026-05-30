"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { scrollToSection } from "@/lib/smoothScroll";
import { clearUrlHash, consumeScrollIntent } from "@/lib/scrollIntent";

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const scrollTop = () => window.scrollTo(0, 0);
    const intent = consumeScrollIntent();

    if (pathname === "/" && intent) {
      requestAnimationFrame(() => scrollToSection(intent));
      clearUrlHash();
      return;
    }

    scrollTop();
    requestAnimationFrame(scrollTop);
    clearUrlHash();

    const onLoad = () => {
      scrollTop();
      clearUrlHash();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, [pathname]);

  return null;
}
