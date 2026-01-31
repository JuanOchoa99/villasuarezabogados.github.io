import { Star } from "lucide-react";

const specialties = [
  {
    title: "Delitos contra las personas",
    items: [
      "Homicidios",
      "Delitos sexuales",
      "Feminicidios",
      "Violencia intrafamiliar",
      "Secuestro",
      "Trata de personas",
      "Extorsión",
    ],
  },
  {
    title: "Delitos contra el orden público",
    items: [
      "Concierto para delinquir",
      "Hurto agravado y calificado",
      "Tráfico de estupefacientes",
      "Fraude procesal",
    ],
  },
  {
    title: "Delitos contra la administración pública",
    items: [
      "Delitos ambientales",
      "Lavado de activos",
      "Contra la administración pública",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="especialidades" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-20 text-black">
          Nuestras Especialidades
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {specialties.map((specialty, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <Star
                  className="w-12 h-12 text-[#EEDFC5]"
                  fill="#EEDFC5"
                  strokeWidth={0}
                />
              </div>
              <h3 className="font-serif text-lg mb-6 text-black">
                {specialty.title}
              </h3>
              <ul className="space-y-2">
                {specialty.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
