"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label, .btn, .cert-btn, .tab-btn, .send-btn, .back-to-top";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);
  const hoveringRef = useRef(false);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (prefersReducedMotion || !finePointer) {
      return;
    }

    setEnabled(true);
    setVisible(true);
    visibleRef.current = true;
    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
      }

      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }

      const target = event.target as HTMLElement | null;
      const isHovering = !!target?.closest(INTERACTIVE_SELECTOR);
      if (hoveringRef.current !== isHovering) {
        hoveringRef.current = isHovering;
        setHovering(isHovering);
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor-pointer is-visible ${hovering ? "is-hovering" : ""}`}
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    />
  );
}
