import { Reveal, LineReveal } from "@/components/Motion";

const SKILLS = [
  {
    title: "AWS Serverless & Cloud",
    detail: "Lambda, AppSync (GraphQL), S3, API Gateway, EventBridge, CloudWatch",
  },
  {
    title: "Backend Development",
    detail: "Node.js, TypeScript, REST & GraphQL APIs, clean modular architecture",
  },
  {
    title: "Databases & Data",
    detail: "DynamoDB, SQL, data modeling, performance optimization",
  },
  {
    title: "Infrastructure as Code",
    detail: "AWS CDK, CloudFormation, CI/CD pipelines, cost optimization",
  },
  {
    title: "Web & Mobile",
    detail: "React, JavaScript, Tailwind CSS, native Android",
  },
];

const FACTS = [
  "7+ years building production software",
  "Serverless-first backend: AWS, Node.js, TypeScript, CDK",
  "Also at home in React, JavaScript & native Android",
  "GraphQL, REST & event-driven architectures",
  "Hands-on with SQL & NoSQL databases",
  "Technical blogger — simplifying AWS concepts",
  "Based in Ahmedabad, India",
];

const EXPLORING = [
  "Advanced serverless & event-driven design patterns",
  "AppSync / GraphQL performance and batching",
  "Cloud cost optimization & observability",
  "CI/CD automation for serverless apps",
  "AI-powered, cloud-native products on AWS",
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-max">
        <Reveal>
          <p className="section-label mb-6">01 / About</p>
        </Reveal>

        <h2 className="display-heading text-giant mb-16">
          <LineReveal>
            <span className="text-paper">Backends that</span>
          </LineReveal>
          <LineReveal delay={0.1}>
            <span className="text-outline">scale to zero.</span>
          </LineReveal>
        </h2>

        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <Reveal className="lg:col-span-7 space-y-6 text-lg text-muted leading-relaxed">
            <p>
              I&apos;m a software developer with 7+ years of experience
              building scalable, high-performance systems — from cloud
              backends to mobile and web apps. I work mainly with{" "}
              <span className="text-paper">
                AWS, Node.js, TypeScript, CDK, and the Serverless Framework
              </span>
              , with a focus on clean architecture and cost-effective
              cloud-native design.
            </p>
            <p>
              My background spans Android development, JavaScript, and modern
              serverless backends — an end-to-end perspective I use to solve
              complex problems with simple, maintainable designs across SQL,
              NoSQL, GraphQL, and event-driven systems.
            </p>
            <p>
              Currently working as a serverless developer, helping teams
              design, build, and scale reliable cloud systems — and writing
              about AWS and serverless best practices along the way.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5">
            <ul className="font-mono text-sm space-y-4 border-l border-white/15 pl-6">
              {FACTS.map((fact, i) => (
                <li key={i} className="flex gap-3 text-paper/80">
                  <span className="text-acid">→</span>
                  {fact}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Skill rows — the typographic "menu" */}
        <div className="border-t border-white/15">
          {SKILLS.map((skill, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="group border-b border-white/15 py-8 md:py-10 grid md:grid-cols-12 gap-4 items-baseline transition-colors duration-500 hover:bg-acid px-4 -mx-4">
                <span className="font-mono text-sm text-acid group-hover:text-ink md:col-span-1">
                  0{i + 1}
                </span>
                <h3 className="display-heading text-2xl md:text-4xl text-paper group-hover:text-ink group-hover:translate-x-3 md:col-span-6 transition-all duration-500 ease-out">
                  {skill.title}
                </h3>
                <p className="text-muted group-hover:text-ink/70 md:col-span-5 text-sm md:text-base transition-colors duration-500">
                  {skill.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Currently exploring */}
        <div className="mt-24 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <h3 className="display-heading text-big text-outline-acid">
              Now
              <br />
              exploring
            </h3>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-8">
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
              {EXPLORING.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-paper/80 leading-relaxed border-b border-white/10 pb-5"
                >
                  <span className="text-acid font-mono text-sm mt-1">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
