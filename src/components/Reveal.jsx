import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-10% 0px -10% 0px', once: true })
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={prefersReduced ? false : { opacity: 0, y: 18 }}
      animate={
        prefersReduced
          ? undefined
          : inView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 18 }
      }
      transition={prefersReduced ? undefined : { duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}
