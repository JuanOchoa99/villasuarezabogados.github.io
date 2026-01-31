import { FileCheck, Scale, FileText, Briefcase } from "lucide-react";

const audienceCategories = [
  {
    icon: FileCheck,
    title: "Preliminares",
    items: [
      "Legalización de captura",
      "Imputación de cargos",
      "Medida de aseguramiento",
    ],
  },
  {
    icon: Scale,
    title: "Dentro del proceso",
    items: [
      "Formulación de acusación",
      "Preparatoria",
      "Juicio oral",
    ],
  },
  {
    icon: FileText,
    title: "Otras audiencias",
    items: [
      "Vencimiento de términos",
      "Revocatoria de medida",
      "Sustitución de medida",
    ],
  },
  {
    icon: Briefcase,
    title: "Otros trámites",
    items: [
      "Preclusión",
      "Principios de oportunidad",
      "Preacuerdos",
    ],
  },
];

export function AudiencesSection() {
  return (
    <section id="audiencias" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
          Audiencias
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {audienceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  <category.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif font-bold text-lg mb-4 text-foreground">
                  {category.title}
                </h3>
                <ul className="space-y-2 text-sm">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
