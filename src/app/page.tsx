"use client";

import { useState } from "react";
import { StatisticsCard } from "@/components/statistics-card";
import { Timeline } from "@/components/timeline";
import { AdvantagesGrid } from "@/components/advantages-grid";
import { SimulationDialog } from "@/components/simulation-dialog";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Phone, Mail, MapPin, Check } from "lucide-react";
import { ReelsSection } from "@/components/reels-section";
import { solutions } from "@/constants";
import { PartnersSection } from "@/components/partners-section";

export default function HomePage() {
  const [isSimulationOpen, setIsSimulationOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <header className="bg-custom-bg bg-custom-pattern bg-center px-4 py-12 pb-36 text-white">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-12 flex items-center justify-between">
            <img
              src="https://i.ibb.co/S3PMyMZ/logo.png"
              alt="BGomes Logo"
              width={120}
              height={40}
              className="relative z-10"
            />
            <Button
              variant="outline"
              size="xl"
              className="border-[#B9DF4C] text-[#1A524F] bg-[#add346] hover:bg-[#9dbe41] hover:text-[#1A524F]"
            >
              Entrar em contato
            </Button>
          </nav>

          <div className="flex flex-col justify-center items-center sm:flex-row">
            <div className="relative z-10 sm:mt-20 mb-10">
              <h1 className="mb-6 text-4xl text-center font-bold md:text-6xl lg:text-6xl sm:text-left">
                Realize seus sonhos com
                <span className="text-[#B9DF4C] text-center sm:text-left">
                  {" "}
                  inteligência financeira
                </span>
              </h1>
              <p className="mb-8 max-w-3xl sm:max-w-2xl text-lg text-center sm:text-left opacity-90 md:text-xl">
                Há mais de uma década, transformamos o futuro de milhares de
                clientes através de consórcios seguros e planejados.
              </p>
              <div className="flex items-center justify-center gap-4 sm:flex-row sm:justify-start sm:pl-20">
                <Dialog
                  open={isSimulationOpen}
                  onOpenChange={setIsSimulationOpen}
                >
                  <DialogTrigger asChild>
                    <Button
                      size="xl"
                      className="bg-[#B9DF4C] text-[#1A524F] hover:bg-[#B9DF4C]/90"
                    >
                      Simular Consórcio
                    </Button>
                  </DialogTrigger>
                  <SimulationDialog
                    open={isSimulationOpen}
                    onOpenChange={setIsSimulationOpen}
                  />
                </Dialog>
                <Button
                  variant="outline"
                  size="xl"
                  className="border-[#B9DF4C] text-[#B9DF4C] hover:bg-[#B9DF4C] hover:text-[#1A524F]"
                >
                  Fale Conosco
                </Button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all">
              <img
                src="https://i.ibb.co/SVtRxQG/casa.png"
                alt="familia em casa"
                width={1100}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Statistics Section */}
      <section className="bg-[#B9DF4C] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#1A524F] md:text-4xl">
              Por que escolher a BGomes Consórcio?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#1A524F]/80">
              Somos líderes em contemplações e satisfação do cliente
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <StatisticsCard
              number={5752}
              label="Contemplações no último mês"
              delay={0}
            />
            <StatisticsCard
              number={422747}
              label="Contemplações totais"
              delay={1}
            />
            <StatisticsCard number={389288} label="Clientes ativos" delay={2} />
            <StatisticsCard
              number={348}
              label="Grupos em andamento"
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-[#1A524F] md:text-4xl">
              Entenda o consórcio em 4 passos
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Veja como é simples realizar seu sonho com a BGomes
            </p>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-custom-dark bg-custom-gradient-pattern bg-custom-pattern section-padding px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Vantagens da{" "}
              <span className="text-[#B9DF4C]">BGomes Consórcio</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              Descubra por que somos a escolha certa para realizar seus
              objetivos
            </p>
          </div>
          <AdvantagesGrid />
        </div>
      </section>

      <PartnersSection />

      {/* Solutions Section */}
      <section className="section-padding bg-custom-yellow bg-custom-yellow-pattern w-full sm:px-4 py-24">
        <div className="mx-auto px-6 sm:px-1 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-1.5 text-4xl font-bold text-[#1A524F] md:text-5xl">
              Soluções Personalizadas para Cada Sonho
            </h2>
            <p className="mx-auto max-w-4xl text-xl text-[#1A524F]/90">
              Descubra o consórcio ideal para realizar seus objetivos, seja qual
              for o seu projeto
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                    <solution.icon className="h-8 w-8" />
                    <h3 className="text-2xl font-semibold">{solution.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-lg text-gray-700">
                    {solution.description}
                  </p>
                  <p className="mb-4 text-2xl font-medium text-[#1A524F]">
                    {solution.value}
                  </p>
                  <ul className="mb-6 space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Check className="mr-2 h-5 w-5 text-[#B9DF4C]" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="default"
                        size="xl"
                        className="group w-full bg-[#1A524F] text-lg text-white hover:bg-[#1A524F]/90"
                      >
                        Simular Agora
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </DialogTrigger>
                    <SimulationDialog
                      open={isSimulationOpen}
                      onOpenChange={setIsSimulationOpen}
                    />
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-custom-dark bg-custom-gradient-pattern bg-custom-pattern px-4 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="md:w-1/2">
              <h2 className="mb-4 text-4xl text-center sm:text-left font-bold md:text-5xl">
                Cansado de esperar para realizar seus sonhos?
              </h2>
              <p className="mb-6 text-xl text-white/80">
                Não deixe que a burocracia e as altas taxas de juros te impeçam
                de conquistar o que você merece. Com o consórcio BGomes, você
                pode:
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start">
                  <Check className="mr-2 h-6 w-6 text-[#B9DF4C]" />
                  <span>
                    Planejar seu futuro com parcelas que cabem no seu bolso
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-6 w-6 text-[#B9DF4C]" />
                  <span>
                    Ter a liberdade de escolher o bem que deseja, quando for
                    contemplado
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-6 w-6 text-[#B9DF4C]" />
                  <span>
                    Contar com o suporte de especialistas em todas as etapas
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg bg-white p-8 shadow-xl">
                <h3 className="mb-4 text-2xl font-semibold text-[#1A524F]">
                  Fale com um Especialista Agora
                </h3>
                <p className="mb-6 text-gray-600">
                  Nossos consultores estão prontos para te ajudar a encontrar o
                  melhor plano para realizar seu sonho.
                </p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Seu telefone"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-[#B9DF4C] text-lg font-semibold text-[#1A524F] hover:bg-[#B9DF4C]/90"
                  >
                    Quero Falar com um Especialista
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reels Section */}
      <section className="section-padding bg-white px-8 sm:px-4">
        <div className="mx-auto max-w-6xl px-5 sm:px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-[#1A524F] md:text-4xl">
              Aprenda Mais Sobre Consórcios
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Assista nossos vídeos explicativos e tire suas dúvidas
            </p>
          </div>
          <ReelsSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-gradient px-4 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <img
                src="https://i.ibb.co/S3PMyMZ/logo.png"
                alt="BGomes Logo"
                width={120}
                height={40}
                className="mb-6"
              />
              <p className="text-sm opacity-80">
                Transformando sonhos em realidade há mais de 10 anos.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold text-[#B9DF4C]">
                Contato
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#B9DF4C]" />
                  <span className="text-sm opacity-80">(00) 0000-0000</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#B9DF4C]" />
                  <span className="text-sm opacity-80">
                    contato@bgomes.com.br
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#B9DF4C]" />
                  <span className="text-sm opacity-80">São Paulo, SP</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold text-[#B9DF4C]">
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm opacity-80 hover:opacity-100">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm opacity-80 hover:opacity-100">
                    Nossos Produtos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm opacity-80 hover:opacity-100">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold text-[#B9DF4C]">
                Newsletter
              </h4>
              <p className="mb-4 text-sm opacity-80">
                Receba novidades e ofertas exclusivas
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 rounded-lg bg-white/10 px-4 py-2 text-sm placeholder:text-white/50"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="bg-[#B9DF4C] text-[#1A524F] hover:bg-[#B9DF4C]/90"
                >
                  Enviar
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center">
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} BGomes Consórcios. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
