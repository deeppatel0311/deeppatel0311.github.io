'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  className?: string
}

export const FadeInUp = ({ children, delay = 0, className = '' }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' as const }}
    className={className}
  >
    {children}
  </motion.div>
)

export const FadeInLeft = ({ children, delay = 0, className = '' }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' as const }}
    className={className}
  >
    {children}
  </motion.div>
)

export const FadeInRight = ({ children, delay = 0, className = '' }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' as const }}
    className={className}
  >
    {children}
  </motion.div>
)

export const ScaleIn = ({ children, delay = 0, className = '' }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' as const }}
    className={className}
  >
    {children}
  </motion.div>
)

export const StaggerContainer = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
    }}
    className={className}
  >
    {children}
  </motion.div>
)