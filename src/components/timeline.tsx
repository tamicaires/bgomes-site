"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Store, Users, Wallet, ShoppingCart } from "lucide-react"

const timelineSteps = [
  {
    icon: Store,
    title: "Escolha do plano",
    description: "Primeiro, você escolhe um plano com valor, prazo e parcela que mais se encaixam.",
  },
  {
    icon: Users,
    title: "Acompanhamento",
    description:
      "Depois, você acessa nosso Portal e pode acompanhar os sorteios e ofertar lances todos os meses, se quiser.",
  },
  {
    icon: Wallet,
    title: "Contemplação",
    description: "Oba! Chegou a sua vez de receber o valor do crédito para comprar o bem que você escolheu.",
  },
  {
    icon: ShoppingCart,
    title: "Compra do bem",
    description: "Pronto! Depois da análise de crédito, você já pode comprar o bem, do jeitinho que planejou.",
  },
]

export function Timeline() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className="mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {timelineSteps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative text-center timeline-dot"
            >
              <div className="mb-4 flex justify-center">
                <div className="relative rounded-full bg-[#B9DF4C] p-4">
                  <Icon className="h-8 w-8 text-[#1A524F]" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#1A524F]">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

