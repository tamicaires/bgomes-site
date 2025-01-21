"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface StatProps {
  end: number
  label: string
  prefix?: string
  suffix?: string
}

function StatCounter({ end, label, prefix = "", suffix = "" }: StatProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const step = end / 50
      const timer = setInterval(() => {
        start += step
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 30)
      return () => clearInterval(timer)
    }
  }, [end, inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-emerald-400">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-gray-300">{label}</div>
    </motion.div>
  )
}

export { StatCounter }

