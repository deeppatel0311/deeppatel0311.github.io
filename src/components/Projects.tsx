import { ExternalLink, Github } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/Animations'
import { EnhancedSection, GlassCard, AnimatedText, StaggerGrid, GridItem, GradientBorder } from '@/components/EnhancedUI'

export default function Projects() {
  const projects = [
    {
      title: 'AWS Podcast Platform',
      description: 'Serverless podcast platform built with AWS services including Lambda, DynamoDB, and S3. Features audio streaming, user management, and real-time analytics with scalable cloud architecture.',
      technologies: ['AWS Lambda', 'DynamoDB', 'S3', 'CloudFront', 'API Gateway'],
      github: 'https://github.com/deeppatel0311/aws-podcast',
      live: '#',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Word Wizard Game',
      description: 'Interactive word puzzle game with engaging gameplay mechanics, score tracking, and progressive difficulty levels. Built with modern web technologies for optimal user experience.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage', 'Game Logic'],
      github: 'https://github.com/deeppatel0311/word-wizard',
      live: '#',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Android User Authentication',
      description: 'Secure Android authentication system with biometric login, JWT token management, and encrypted local storage. Implements modern security practices for mobile applications.',
      technologies: ['Android Native', 'Java', 'Biometric API', 'JWT', 'SQLite'],
      github: 'https://github.com/deeppatel0311/android-authenticate-user',
      live: '#',
      gradient: 'from-green-500 to-teal-500',
    },
  ]

  return (
    <section id="projects" className="section-padding bg-gray-950 relative">
      {/* Subtle pattern for Projects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.05)_50%,transparent_75%)] bg-[length:40px_40px]"></div>
      </div>
      <div className="container-max relative z-10">
        <AnimatedText className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Here are some of my recent projects showcasing cloud backend development,
            cross-platform mobile apps, and full-stack solutions.
          </p>
        </AnimatedText>

        <StaggerGrid className="grid lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <GridItem key={index}>
              <GradientBorder className="overflow-hidden h-full">
                <div className={`relative h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <div className="text-white text-2xl font-bold opacity-80">
                    {project.title}
                  </div>
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 text-white/90 text-sm rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white/80 hover:text-white transition-colors duration-300 font-medium"
                    >
                      <Github size={18} className="mr-2" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white/80 hover:text-white transition-colors duration-300 font-medium"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </GradientBorder>
            </GridItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}