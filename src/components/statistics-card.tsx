"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface StatisticsCardProps {
  number: number
  label: string
  suffix?: string
  delay?: number
}

export function StatisticsCard({ number, label, suffix = "", delay = 0 }: StatisticsCardProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      const duration = 2000 // Animation duration in milliseconds
      const steps = 60 // Number of steps in the animation
      const stepValue = number / steps
      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        setCount(Math.min(Math.floor(stepValue * currentStep), number))

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [inView, number])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className="rounded-xl bg-white p-6 text-center shadow-lg card-hover"
    >
      <h3 className="mb-2 text-4xl font-bold text-[#1A524F]">
        {count.toLocaleString()}
        {suffix}
      </h3>
      <p className="text-lg text-gray-600">{label}</p>
    </motion.div>
  )
}

