import { Star } from "lucide-react";

const audienceCategories = [
  {
    title: "Preliminares",
    items: [
      "Legalización de captura",
      "Imputación de cargos",
      "Medida de aseguramiento",
    ],
  },
  {
    title: "Dentro del proceso",
    items: ["Formulación de acusación", "Preparatoria", "Juicio oral"],
  },
  {
    title: "Otras audiencias",
    items: [
      "Vencimiento de términos",
      "Revocatoria de medida",
      "Sustitución de medida",
    ],
  },
  {
    title: "Otros trámites",
    items: ["Preclusión", "Principíos de oportunidad", "Preacuerdos"],
  },
];

export function AudiencesSection() {
  return (
    <section id="audiencias" className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-20 text-black">
          Audiencias
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {audienceCategories.map((category, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <Star
                  className="w-10 h-10 text-[#EEDFC5]"
                  fill="#EEDFC5"
                  strokeWidth={0}
                />
              </div>
              <h4 className="font-serif text-lg mb-4 text-black">
                {category.title}
              </h4>
              <ul className="space-y-1">
                {category.items.map((item, itemIndex) => (
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
