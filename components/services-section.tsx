import { Users, ShieldAlert, Building2 } from "lucide-react";

const specialties = [
  {
    icon: Users,
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
    icon: ShieldAlert,
    title: "Delitos contra el orden público",
    items: [
      "Concierto para delinquir",
      "Hurto agravado y calificado",
      "Tráfico de estupefacientes",
      "Fraude procesal",
    ],
  },
  {
    icon: Building2,
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
    <section id="especialidades" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
          Nuestras Especialidades
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-border"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-primary/10 rounded-full">
                  <specialty.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif font-bold text-xl mb-6 text-foreground">
                  {specialty.title}
                </h3>
                <ul className="space-y-2 text-left w-full">
                  {specialty.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
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
