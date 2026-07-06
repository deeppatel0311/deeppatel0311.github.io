import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
  CharReveal,
  Reveal,
  Marquee,
  Magnetic,
  ScrollSkew,
} from "@/components/Motion";
import { DotGrid } from "@/components/Effects";

const STACK = [
  "AWS LAMBDA",
  "TYPESCRIPT",
  "NODE.JS",
  "REACT",
  "ANDROID",
  "APPSYNC",
  "DYNAMODB",
  "AWS CDK",
  "GRAPHQL",
  "SERVERLESS",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[100svh] flex flex-col relative overflow-hidden pt-20 md:pt-28"
    >
      <DotGrid />
      <div className="container-max w-full px-5 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center py-8 relative z-10">
        <Reveal>
          <p className="section-label mb-6 md:mb-8 flex items-center gap-3">
            <span className="w-10 h-px bg-acid inline-block" />
            Deep Patel — Software Developer
          </p>
        </Reveal>

        <h1 className="display-heading text-mega select-none">
          <span className="block text-outline hover-fill">
            <CharReveal text="Build." delay={0.1} />
          </span>
          <span className="block text-acid ml-[8vw] -skew-x-6">
            <CharReveal text="Ship." delay={0.3} />
          </span>
          <span className="block text-paper ml-[16vw]">
            <CharReveal text="Scale." delay={0.5} />
            <span className="text-acid text-[0.4em] align-top">*</span>
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12 items-end">
          <Reveal delay={0.8}>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl">
              <span className="text-acid font-mono text-base">*</span>{" "}
              Specialized in serverless backends on AWS — and fluent across the
              stack with{" "}
              <span className="text-paper">
                Node.js, TypeScript, React, and native Android
              </span>
              . 7+ years shipping production software from Ahmedabad, India.
            </p>
          </Reveal>

          <Reveal delay={0.9} className="flex flex-wrap gap-4 md:justify-end">
            <Magnetic>
              <Link href="#projects" className="btn-primary group">
                Selected Work
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="#contact" className="btn-secondary group">
                Get in Touch
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      {/* Acid tape — leans with scroll velocity */}
      <ScrollSkew className="mt-6 md:mt-10 -rotate-1 scale-105 origin-center relative z-10">
        <div className="bg-acid text-ink py-3">
          <Marquee
            items={STACK}
            className="font-display uppercase text-lg md:text-xl"
          />
        </div>
      </ScrollSkew>
    </section>
  );
}
