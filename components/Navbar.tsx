"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, type MouseEvent } from "react";
import { scrollToSection } from "@/lib/smoothScroll";
import { clearUrlHash, setScrollIntent } from "@/lib/scrollIntent";

const navLinks = [
  { hash: "#hero", label: "Home" },
  { hash: "#education", label: "Education" },
  { hash: "#skills", label: "Skills" },
  { hash: "#projects", label: "Projects" },
  { hash: "#certifications", label: "Certifications" },
  { hash: "#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  const goToSection = (event: MouseEvent<HTMLAnchorElement>, hash: string) => {
    event.preventDefault();
    setOpen(false);

    if (isHome) {
      scrollToSection(hash);
      clearUrlHash();
      return;
    }

    setScrollIntent(hash);
    router.push("/");
  };

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <a href="/" className="site-nav-brand" onClick={(event) => goToSection(event, "#hero")}>
          Dharshini
        </a>

        <button
          type="button"
          className="site-nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="site-nav-menu" className={`site-nav-menu ${open ? "is-open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.hash}>
                <a href="/" onClick={(event) => goToSection(event, link.hash)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/resume" className="site-nav-resume" onClick={() => setOpen(false)}>
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
