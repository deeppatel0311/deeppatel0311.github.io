"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ScrambleText } from "@/components/Effects";

const NAV_ITEMS = [
  { name: "About", href: "/#about" },
  { name: "Work", href: "/#projects" },
  { name: "Writing", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);
      // hide when scrolling down past the hero, reveal on any scroll up
      setIsHidden(y > lastY && y > 400);
      lastY = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-ink/85 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      } ${isHidden && !isMenuOpen ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="container-max px-5 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-5">
          <Link
            href="/"
            className="font-display text-xl text-paper hover:text-acid transition-colors duration-300"
          >
            DP<span className="text-acid">.</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                className="group font-mono text-xs uppercase tracking-widest text-paper/70 hover:text-paper transition-colors duration-300"
              >
                <span className="text-acid mr-1.5">0{i + 1}</span>
                <ScrambleText text={item.name} className="link-sweep" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-paper hover:text-acid p-2 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/10 py-4 space-y-1 bg-ink/95 backdrop-blur-xl -mx-5 px-5">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 font-display uppercase text-2xl text-paper hover:text-acid transition-colors duration-300"
              >
                <span className="font-mono text-xs text-acid mr-3">
                  0{i + 1}
                </span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
