"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
};

export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = [
    "reveal",
    `reveal-${direction}`,
    visible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
