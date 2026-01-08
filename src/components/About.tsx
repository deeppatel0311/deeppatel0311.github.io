import { Code, Database, Globe, Smartphone, Terminal, Settings } from 'lucide-react'
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '@/components/Animations'
import { GlassCard, AnimatedText, StaggerGrid, GridItem, FloatingIcon } from '@/components/EnhancedUI'

export default function About() {
  const skills = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'AWS Cloud Services',
      description: 'Lambda, AppSync, DynamoDB, API Gateway, CloudFormation',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Node.js, Serverless Architecture, Microservices',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'React Native, Flutter, Android Native (Java/Kotlin)',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack & DevOps',
      description: 'React, Next.js, AWS CDK, CI/CD, Infrastructure as Code',
    },
  ]

  const tools = [
    { name: 'AWS CDK CLI', category: 'Infrastructure' },
    { name: 'Serverless Framework CLI', category: 'Infrastructure' },
    { name: 'AWS CloudFormation', category: 'Infrastructure' },
    { name: 'Visual Studio Code', category: 'Development' },
    { name: 'Postman', category: 'API Testing' },
    { name: 'Git & GitHub', category: 'Version Control' },
    { name: 'Jira', category: 'Project Management' },
    { name: 'Slack', category: 'Communication' },
  ]

  return (
    <section id="about" className="section-padding bg-black relative">
      {/* Subtle pattern for About */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>
      <div className="container-max relative z-10">
        <AnimatedText className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate cloud-focused backend developer with 6+ years of experience building
            scalable, serverless applications on AWS. I also have extensive experience in full-stack
            development and cross-platform mobile applications.
          </p>
        </AnimatedText>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <GlassCard delay={0.2}>
            <h3 className="text-3xl font-semibold mb-6 gradient-text">My Journey</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Started as a full-stack developer working on web and mobile applications, I've evolved
              to specialize in cloud-native solutions and serverless architectures. My journey includes
              building cross-platform mobile apps with React Native and Flutter, as well as native
              Android development with Java and Kotlin.
            </p>
            <p className="text-white/80 leading-relaxed">
              Now focused on AWS cloud services, I build scalable backend systems that handle millions
              of requests with Infrastructure as Code and automated deployment pipelines. I enjoy
              bridging the gap between frontend, mobile, and cloud technologies.
            </p>
          </GlassCard>
          
          <GlassCard delay={0.4}>
            <h3 className="text-3xl font-semibold mb-8 gradient-text">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-4"></div>
                <span className="text-white/90">6+ years of development experience</span>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-4"></div>
                <span className="text-white/90">50+ cloud & mobile applications built</span>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-4"></div>
                <span className="text-white/90">Full-stack & mobile development background</span>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-4"></div>
                <span className="text-white/90">AWS cloud architecture specialist</span>
              </li>
            </ul>
          </GlassCard>
        </div>

        <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skills.map((skill, index) => (
            <GridItem key={index} className="text-center">
              <GlassCard className="h-full">
                <FloatingIcon className="text-blue-400 mb-6 flex justify-center">
                  {skill.icon}
                </FloatingIcon>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {skill.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">{skill.description}</p>
              </GlassCard>
            </GridItem>
          ))}
        </StaggerGrid>

        {/* Tools & Technologies Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">
            Tools & <span className="gradient-text">Technologies</span>
          </h3>
        </div>
        
        <div className="glass-strong p-10 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-blue-400 mb-4 flex justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {tool.category === 'Infrastructure' && <Terminal className="w-6 h-6" />}
                  {tool.category === 'Development' && <Code className="w-6 h-6" />}
                  {tool.category === 'API Testing' && <Settings className="w-6 h-6" />}
                  {tool.category === 'Version Control' && <Database className="w-6 h-6" />}
                  {tool.category === 'Project Management' && <Globe className="w-6 h-6" />}
                  {tool.category === 'Communication' && <Smartphone className="w-6 h-6" />}
                </div>
                <h4 className="text-white font-medium mb-2 group-hover:text-blue-300 transition-colors duration-300">{tool.name}</h4>
                <p className="text-white/60 text-xs group-hover:text-white/80 transition-colors duration-300">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What I'm Exploring Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">
            Currently <span className="gradient-text">Exploring</span>
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="glass-strong p-10 card-hover group">
            <h4 className="text-2xl font-semibold mb-8 gradient-text group-hover:scale-105 transition-transform duration-300">Learning & Research</h4>
            <ul className="space-y-6">
              {[
                'Advanced AWS services (ECS, EKS, Step Functions)',
                'Microservices architecture patterns',
                'Event-driven architecture with EventBridge',
                'GraphQL federation and schema stitching'
              ].map((item, index) => (
                <li key={index} className="flex items-start group/item">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <span className="text-white/80 group-hover/item:text-white transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-strong p-10 card-hover group">
            <h4 className="text-2xl font-semibold mb-8 gradient-text group-hover:scale-105 transition-transform duration-300">Future Interests</h4>
            <ul className="space-y-6">
              {[
                'Machine Learning integration with AWS SageMaker',
                'Edge computing and AWS IoT services',
                'Blockchain and Web3 backend development',
                'Rust for high-performance backend services'
              ].map((item, index) => (
                <li key={index} className="flex items-start group/item">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <span className="text-white/80 group-hover/item:text-white transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}