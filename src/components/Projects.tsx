import { ArrowUpRight, Github } from "lucide-react";
import { Reveal, LineReveal } from "@/components/Motion";
import { Tilt } from "@/components/Effects";

const PROJECTS = [
  {
    title: "AWS Podcast Platform",
    description:
      "Turns AWS RSS feeds into professional podcast audio automatically — AI-generated scripts via Amazon Bedrock, voiced with Amazon Polly, on a fully serverless pipeline.",
    technologies: ["Amazon Bedrock", "Amazon Polly", "AWS Lambda", "DynamoDB", "S3"],
    github: "https://github.com/deeppatel0311/aws-podcast",
    live: "https://deeppatel0311.github.io/aws-podcast/",
  },
  {
    title: "Word Wizard",
    description:
      "A fast, no-nonsense text processing tool built with React — case conversion, text manipulation, and encoding utilities with local-storage persistence.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Local Storage"],
    github: "https://github.com/deeppatel0311/word-wizard",
    live: "https://deeppatel0311.github.io/word-wizard",
  },
  {
    title: "Android User Authentication",
    description:
      "Secure native Android authentication with biometric login, JWT token management, and encrypted local storage — modern mobile security practices end to end.",
    technologies: ["Android Native", "Java", "Biometric API", "JWT", "SQLite"],
    github: "https://github.com/deeppatel0311/android-authenticate-user",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-max">
        <Reveal>
          <p className="section-label mb-6">02 / Selected Work</p>
        </Reveal>

        <h2 className="display-heading text-giant mb-20">
          <LineReveal>
            <span className="text-outline">Things I&apos;ve</span>
          </LineReveal>
          <LineReveal delay={0.1}>
            <span className="text-paper">shipped</span>
            <span className="text-acid">.</span>
          </LineReveal>
        </h2>
      </div>

      {/* Full-bleed project rows */}
      <div className="border-t border-white/15">
        {PROJECTS.map((project, i) => (
          <Reveal key={i}>
            <article className="group relative border-b border-white/15 transition-colors duration-500 hover:bg-ink-soft">
              <Tilt className="container-max px-5 sm:px-8 lg:px-12 py-14 md:py-20 grid lg:grid-cols-12 gap-8 items-start">
                <span
                  aria-hidden
                  className="hidden lg:block lg:col-span-2 font-display text-7xl text-outline opacity-40 group-hover:text-outline-acid group-hover:opacity-100 transition-opacity duration-500"
                >
                  00{i + 1}
                </span>

                <div className="lg:col-span-6">
                  <h3 className="display-heading text-3xl md:text-5xl text-paper mb-6 group-hover:text-acid group-hover:translate-x-3 transition-all duration-500 ease-out">
                    {project.title}
                  </h3>
                  <p className="text-muted leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-8 lg:items-end">
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {project.technologies.map((tech, t) => (
                      <span
                        key={t}
                        className="font-mono text-xs uppercase tracking-wider px-3 py-1.5 border border-white/20 text-paper/70 group-hover:border-acid/40 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 font-mono text-sm uppercase tracking-wider">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-sweep flex items-center gap-2 text-paper/80 hover:text-paper"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-sweep flex items-center gap-2 text-acid"
                      >
                        Live
                        <ArrowUpRight
                          size={16}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </Tilt>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="container-max px-5 sm:px-8 lg:px-12 mt-14">
        <Reveal>
          <a
            href="https://github.com/deeppatel0311"
            target="_blank"
            rel="noopener noreferrer"
            className="link-sweep font-mono text-sm uppercase tracking-widest text-paper/70 hover:text-paper inline-flex items-center gap-2"
          >
            More on GitHub <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
