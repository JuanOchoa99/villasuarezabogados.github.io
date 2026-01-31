import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <header
      id="who"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/assets/img/bg-masthead.jpg')`,
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-white font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
            ¿Quiénes Somos?
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 text-pretty">
            En Villa Suarez Abogados, contamos con un equipo de profesionales altamente calificados y
            con amplia experiencia en las áreas de derecho penal, derecho civil, civil familia y
            derecho disciplinario. Nos caracterizamos por ofrecer un servicio personalizado y de alta
            calidad, siempre enfocados en defender los derechos e intereses de nuestros clientes.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold px-8 py-6 text-lg"
          >
            <Link
              href="https://wa.me/+573003446228?text=Estoy%20interesado%20en%20alguno%20de%20los%20servicios."
              target="_blank"
              rel="noopener noreferrer"
            >
              Contáctanos
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
