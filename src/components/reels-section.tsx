"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface Reel {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
}

const reels: Reel[] = [
  {
    id: "CoHwdU6sTYG",
    title: "Entenda o Consórcio",
    description: "Descubra como funciona o consórcio e suas vantagens",
    thumbnail:
      "https://i.ibb.co/m65Yf1P/8c2e2872-8701-449d-ad7b-bd5cae7f0b86.jpg",
    url: "https://www.instagram.com/p/CoHwdU6sTYG/",
  },
  {
    id: "CnmQRUGhhGP",
    title: "Dicas para Contemplação",
    description: "Aprenda as melhores estratégias para ser contemplado",
    thumbnail: "https://i.ibb.co/KKyhMZn/d644e5ba-246f-4483-a40c-0f86f0fcfe32.jpg",
    url: "https://www.instagram.com/p/CnmQRUGhhGP/",
  },
  {
    id: "CnmdadfrF",
    title: "Consórcio é um bom negócio?",
    description: "Aprenda as melhores estratégias para ser contemplado",
    thumbnail: "https://i.ibb.co/HFm0MbG/491397af-22c2-4ac8-8070-6a3f01938f0f.jpg",
    url: "https://www.instagram.com/p/CnmQRUGhhGP/",
  },
];

export function ReelsSection() {
  const [selectedReel, setSelectedReel] = useState<Reel | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reels.map((reel, index) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-white shadow-lg"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <Button
                onClick={() => setSelectedReel(reel)}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B9DF4C] p-4 text-[#1A524F] opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Play className="h-6 w-6 fill-current" />
              </Button>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-[#1A524F]">
                {reel.title}
              </h3>
              <p className="text-gray-600">{reel.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedReel} onOpenChange={() => setSelectedReel(null)}>
        <DialogContent className="max-w-3xl p-0">
          {selectedReel && (
            <div className="aspect-[9/16] w-full">
              <iframe
                src={`${selectedReel.url}embed`}
                className="h-full w-full"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
