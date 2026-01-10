import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Code,
  Sparkles,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import {
  FadeInUp,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  SlideInFromBottom,
  FloatingElement,
  PulseGlow,
} from "@/components/EnhancedAnimations";
import { MagneticButton } from "@/components/SectionTransitions";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden pt-20"
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-600/20 animate-pulse"></div>
        </div>

        {/* Floating orbs with neon effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/4 rounded-full blur-3xl"></div>

        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-32 left-16 w-3 h-3 bg-purple-400 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container-max section-padding text-center relative z-10">
        <FadeInUp>
          {/* Animated icon with pulse rings */}
          <ScaleIn delay={0.2} className="flex justify-center mb-12 relative">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/30 pulse-ring"></div>
              <div
                className="absolute inset-0 rounded-full bg-cyan-500/20 pulse-ring"
                style={{ animationDelay: "1s" }}
              ></div>
              <PulseGlow className="glass-strong px-6 py-7 rounded-full relative z-10">
                <FloatingElement>
                  <span className="text-2xl font-black text-cyan-400">
                    &lt;/&gt;
                  </span>
                </FloatingElement>
              </PulseGlow>
            </div>
          </ScaleIn>

          <FadeInUp delay={0.4}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text inline-block hover:scale-110 transition-transform duration-700">
                Deep Patel
              </span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.6}>
            <p className="text-xl md:text-2xl text-white/80 mb-16 max-w-4xl mx-auto leading-relaxed">
              Cloud-focused Backend Developer crafting{" "}
              <span className="text-cyan-400 font-semibold">
                scalable serverless solutions
              </span>{" "}
              on AWS with 6+ years of experience in modern architecture.
            </p>
          </FadeInUp>

          <SlideInFromBottom
            delay={0.8}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <MagneticButton className="w-full sm:w-auto">
              <Link
                href="#projects"
                className="btn-primary group relative w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                <span className="flex items-center relative z-10">
                  <Rocket className="mr-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  Explore My Work
                </span>
              </Link>
            </MagneticButton>
            <MagneticButton className="w-full sm:w-auto">
              <Link
                href="#contact"
                className="btn-secondary group w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <span className="flex items-center">
                  <Sparkles className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Let's Connect
                </span>
              </Link>
            </MagneticButton>
          </SlideInFromBottom>

          <StaggerContainer className="flex justify-center items-center gap-8 mb-20">
            {[
              {
                href: "https://github.com/deeppatel0311",
                icon: Github,
                color: "hover:shadow-gray-400/50",
              },
              {
                href: "https://www.linkedin.com/in/deeppatel0311/",
                icon: Linkedin,
                color: "hover:shadow-blue-400/50",
              },
              {
                href: "mailto:deep.p0311@gmail.com",
                icon: Mail,
                color: "hover:shadow-cyan-400/50",
              },
            ].map((social, index) => (
              <StaggerItem key={index}>
                <MagneticButton>
                  <a
                    href={social.href}
                    target={
                      social.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className={`glass p-5 rounded-2xl text-white/70 hover:text-white transition-all duration-500 card-hover transform hover:scale-110 hover:-translate-y-2 ${social.color} flex items-center justify-center`}
                  >
                    <social.icon size={24} />
                  </a>
                </MagneticButton>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <SlideInFromBottom delay={1.2} className="animate-bounce">
            <FloatingElement>
              <Link
                href="#about"
                className="glass p-4 rounded-full inline-block hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <ArrowDown className="mx-auto text-cyan-400" size={28} />
              </Link>
            </FloatingElement>
          </SlideInFromBottom>
        </FadeInUp>
      </div>
    </section>
  );
}
