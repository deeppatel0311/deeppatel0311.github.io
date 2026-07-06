import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Parallax } from "@/components/Motion";
import { ScrambleText } from "@/components/Effects";

export default function Footer() {
  return (
    <footer className="border-t border-white/15 overflow-hidden">
      {/* Giant sign-off — drifts up as it scrolls into view */}
      <div className="container-max px-5 sm:px-8 lg:px-12 pt-16">
        <Parallax speed={40}>
          <p
            aria-hidden
            className="display-heading text-[min(11.5vw,9.5rem)] text-outline opacity-20 hover:opacity-60 transition-opacity duration-700 whitespace-nowrap select-none leading-none text-center"
          >
            Deep Patel
          </p>
        </Parallax>
      </div>

      <div className="container-max px-5 sm:px-8 lg:px-12 py-10 flex flex-col items-center text-center gap-8 md:flex-row md:items-center md:justify-between md:text-left">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-widest text-muted">
          <Link href="/" className="hover:text-acid transition-colors">
            <ScrambleText text="Home" />
          </Link>
          <Link href="/#about" className="hover:text-acid transition-colors">
            <ScrambleText text="About" />
          </Link>
          <Link href="/#projects" className="hover:text-acid transition-colors">
            <ScrambleText text="Work" />
          </Link>
          <Link href="/blog" className="hover:text-acid transition-colors">
            <ScrambleText text="Blog" />
          </Link>
          <Link href="/#contact" className="hover:text-acid transition-colors">
            <ScrambleText text="Contact" />
          </Link>
        </nav>

        <div className="flex gap-5">
          <a
            href="https://github.com/deeppatel0311"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-acid transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/deeppatel0311/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-acid transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:deep.p0311@gmail.com"
            aria-label="Email"
            className="text-muted hover:text-acid transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="font-mono text-xs text-muted">
          © 2026 Deep Patel — Ahmedabad, India
        </p>
      </div>
    </footer>
  );
}
