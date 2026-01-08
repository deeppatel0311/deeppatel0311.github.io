'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface UnifiedSectionProps {
  children: ReactNode
  id?: string
  className?: string
  variant?: 'hero' | 'about' | 'projects' | 'blog' | 'contact'
}

export const UnifiedSection = ({ 
  children, 
  id, 
  className = '', 
  variant = 'about' 
}: UnifiedSectionProps) => {
  const getBackgroundPattern = () => {
    switch (variant) {
      case 'hero':
        return (
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)'
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            {/* Floating orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/8 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/8 rounded-full blur-3xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
          </div>
        )
      case 'about':
        return (
          <div className="absolute inset-0 opacity-5">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 70% 30%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        )
      case 'projects':
        return (
          <div className="absolute inset-0 opacity-5">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(45deg, transparent 25%, rgba(139, 92, 246, 0.05) 50%, transparent 75%)',
                  'linear-gradient(135deg, transparent 25%, rgba(139, 92, 246, 0.05) 50%, transparent 75%)',
                  'linear-gradient(45deg, transparent 25%, rgba(139, 92, 246, 0.05) 50%, transparent 75%)'
                ],
                backgroundSize: ['40px 40px', '60px 60px', '40px 40px']
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        )
      case 'blog':
        return (
          <div className="absolute inset-0 opacity-5">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)',
                  'radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)',
                  'radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)'
                ]
              }}
              transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        )
      case 'contact':
        return (
          <div className="absolute inset-0 opacity-5">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(244, 63, 94, 0.06) 60deg, transparent 120deg)',
                  'conic-gradient(from 60deg at 50% 50%, transparent 0deg, rgba(244, 63, 94, 0.06) 60deg, transparent 120deg)',
                  'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(244, 63, 94, 0.06) 60deg, transparent 120deg)'
                ]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        )
      default:
        return null
    }
  }

  const getSectionTransition = () => (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"
        animate={{
          opacity: [0, 0.3, 0],
          scaleY: [0, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </motion.div>
  )

  return (
    <motion.section
      id={id}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {getBackgroundPattern()}
      {getSectionTransition()}
      
      <motion.div
        className="relative z-10"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </motion.section>
  )
}

export const SectionDivider = ({ variant = 'wave' }: { variant?: 'wave' | 'diagonal' | 'curve' }) => {
  if (variant === 'wave') {
    return (
      <motion.div
        className="relative h-24 overflow-hidden"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#waveGradient)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            viewport={{ once: true }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.2)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0.2)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    )
  }

  if (variant === 'diagonal') {
    return (
      <motion.div
        className="relative h-16 overflow-hidden"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10"
          style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 100%, 0 100%)' }}
          animate={{
            background: [
              'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))',
              'linear-gradient(to right, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
              'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
    )
  }

  return (
    <motion.div
      className="relative h-20 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
          fill="url(#curveGradient)"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />
        <defs>
          <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
            <stop offset="100%" stopColor="rgba(147, 51, 234, 0.15)" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}