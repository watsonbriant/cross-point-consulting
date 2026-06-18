"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

type NavPage = "home" | "about" | "careers" | "contact";

export function Nav({ active }: { active: NavPage }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav__in">
        <Link className="brand" href="/">
          <Logo />
        </Link>
        <nav
          className={`nav__links${open ? " open" : ""}`}
          id="navlinks"
        >
          <Link href="/" className={active === "home" ? "active" : undefined}>
            Home
          </Link>
          <Link
            href="/about"
            className={active === "about" ? "active" : undefined}
          >
            About
          </Link>
          <Link
            href="/careers"
            className={active === "careers" ? "active" : undefined}
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className={active === "contact" ? "active" : undefined}
          >
            Contact
          </Link>
          <Link href="/contact" className="btn btn--clay">
            Apply Now <span className="arr">→</span>
          </Link>
        </nav>
        <button
          className="nav__burger"
          id="burger"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
