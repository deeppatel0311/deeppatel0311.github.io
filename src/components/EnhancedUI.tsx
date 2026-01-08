'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface EnhancedSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export const EnhancedSection = ({ children, className = '', id }: EnhancedSectionProps) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -50])

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative ${className}`}
      style={{ opacity, scale, y }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.section>
  )
}

export const GlassCard = ({ children, className = '', delay = 0 }: { children: ReactNode, className?: string, delay?: number }) => (
  <motion.div
    className={`glass-strong p-8 rounded-3xl border border-white/10 backdrop-blur-xl ${className}`}
    initial={{ opacity: 0, y: 60, rotateX: 15 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      duration: 0.8, 
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100
    }}
    whileHover={{ 
      y: -10, 
      scale: 1.02,
      rotateX: 5,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
  >
    {children}
  </motion.div>
)

export const AnimatedText = ({ children, className = '', delay = 0 }: { children: ReactNode, className?: string, delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      duration: 0.6, 
      delay,
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
  >
    {children}
  </motion.div>
)

export const StaggerGrid = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    }}
  >
    {children}
  </motion.div>
)

export const GridItem = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { 
        opacity: 0, 
        y: 50, 
        scale: 0.9,
        rotateY: -15
      },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotateY: 0,
        transition: { 
          duration: 0.7, 
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 100
        } 
      }
    }}
    whileHover={{
      y: -8,
      scale: 1.03,
      rotateY: 5,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
  >
    {children}
  </motion.div>
)

export const ParallaxContainer = ({ children, speed = 0.5 }: { children: ReactNode, speed?: number }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])

  return (
    <motion.div ref={ref} style={{ y }} className="will-change-transform">
      {children}
    </motion.div>
  )
}

export const FloatingIcon = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    whileHover={{
      scale: 1.1,
      rotate: 10,
      transition: { duration: 0.3 }
    }}
  >
    {children}
  </motion.div>
)

export const GradientBorder = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <motion.div
    className={`relative p-[1px] rounded-3xl bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-blue-500/50 ${className}`}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.3 }
    }}
  >
    <div className="bg-gray-900/90 rounded-3xl h-full w-full backdrop-blur-xl">
      {children}
    </div>
  </motion.div>
)