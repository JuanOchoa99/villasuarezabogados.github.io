import Link from "next/link";
import { Scale, ClipboardCheck, FileText } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Derecho Penal",
    description:
      "Defendemos tus derechos en procesos penales, ofreciendo asesoramiento y representación en todas las etapas del proceso.",
  },
  {
    icon: ClipboardCheck,
    title: "Derecho Disciplinario",
    description:
      "Asesoramos y representamos en procesos disciplinarios, garantizando una defensa sólida y estratégica.",
  },
  {
    icon: FileText,
    title: "Derecho Civil - Familia",
    description:
      "Te asesoramos en asuntos de esta rama, desde divorcios, sucesiones, pertenencias, asesoramiento en contratos y todo aquello que se refiera al área civil y civil familia.",
  },
];

export function ServicesSection() {
  return (
    <section id="especialidades" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-center mb-4">
          Especialidades
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16" />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Link
              key={index}
              href="https://wa.me/+573003446228?text=Estoy%20interesado%20en%20alguno%20de%20los%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 transition-transform group-hover:scale-110">
                  <service.icon className="w-16 h-16 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
