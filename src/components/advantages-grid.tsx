"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Clock, PiggyBank, Percent, Award, Users } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Segurança Garantida",
    description:
      "Respaldado pelos maiores bancos do país, seu investimento está em boas mãos.",
  },
  {
    icon: Clock,
    title: "Planejamento Flexível",
    description:
      "Escolha o prazo que melhor se adequa ao seu orçamento, de 24 até 200 meses.",
  },
  {
    icon: PiggyBank,
    title: "Economia Real",
    description:
      "Sem juros, apenas taxa de administração transparente e competitiva.",
  },
  {
    icon: Percent,
    title: "Parcelas Acessíveis",
    description:
      "Valores que cabem no seu bolso, com possibilidade de lance para contemplação.",
  },
  {
    icon: Award,
    title: "Credibilidade",
    description:
      "Mais de 10 anos de mercado e milhares de clientes satisfeitos.",
  },
  {
    icon: Users,
    title: "Suporte Especializado",
    description:
      "Equipe dedicada para auxiliar em todas as etapas do seu consórcio.",
  },
];

export function AdvantagesGrid() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="grid gap-4 sm:gap-8 px-2 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {advantages.map((advantage, index) => {
        const Icon = advantage.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-xl bg-white p-6 shadow-lg card-hover"
          >
            <div className="mb-4 inline-block rounded-lg bg-[#B9DF4C] p-3">
              <Icon className="h-6 w-6 text-[#1A524F]" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#1A524F]">
              {advantage.title}
            </h3>
            <p className="text-gray-600">{advantage.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
