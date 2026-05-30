"use client";

import { usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/smoothScroll";
import { clearUrlHash } from "@/lib/scrollIntent";

export default function Footer() {
  const pathname = usePathname();
  const goToTop = () => {
    if (pathname === "/") {
      scrollToSection("#hero");
      clearUrlHash();
      return;
    }
    window.location.href = "/";
  };

  return (
    <footer className="footer">
      <button type="button" className="back-to-top" onClick={goToTop} aria-label="Back to top">
        <span className="back-to-top-icon" aria-hidden="true">
          ↑
        </span>
        Back to top
      </button>
      <p className="footer-copy">© 2026 Dharshini. Designed & built with care.</p>
    </footer>
  );
}
