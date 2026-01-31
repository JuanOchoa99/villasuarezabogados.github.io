import Link from "next/link"
import { Scale, ClipboardCheck, Users } from "lucide-react"

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
    icon: Users,
    title: "Derecho Civil - Familia",
    description:
      "Te asesoramos en asuntos de esta rama, desde divorcios, sucesiones, pertenencias, asesoramiento en contratos y todo aquello que se refiera al área civil y civil familia.",
  },
]

const whatsappLink =
  "https://wa.me/+573003446228?text=Estoy%20interesado%20en%20alguno%20de%20los%20servicios."

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-center text-foreground mb-4">
          Especialidades
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => (
            <div key={service.title} className="text-center group">
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4 transition-transform group-hover:scale-110"
              >
                <service.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-sans font-semibold text-xl text-foreground mb-3 hover:text-primary transition-colors"
              >
                {service.title}
              </Link>
              <p className="text-muted-foreground leading-relaxed text-pretty">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
