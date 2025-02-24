import { partners } from "@/constants";

export function PartnersSection() {
  return (
    <section className="bg-white px-4 py-14 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-[#1A524F] md:text-4xl">
          Grandes Nomes do Consórcio
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
          Representamos as 4 gigantes mais confiáveis e reconhecidas no mercado
          de consórcios, garantindo qualidade e segurança para nossos clientes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 items-center justify-center gap-8 px-2 md:gap-14">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                width={partner.widht}
                className="h-auto max-h-20 object-contain transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
