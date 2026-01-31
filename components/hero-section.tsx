import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <header id="quienes-somos" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/img/portada1.jpg"
          alt="Oficina de abogados"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-white font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            ¿Quiénes Somos?
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
            En Villa Suárez Abogados, contamos con un equipo de profesionales
            altamente calificados y con amplia experiencia en las áreas de
            derecho penal, derecho civil, civil familia y derecho disciplinario.
            Nos caracterizamos por ofrecer un servicio personalizado y de alta
            calidad, siempre enfocados en defender los derechos e intereses de
            nuestros clientes.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-semibold px-8 py-6 text-lg rounded-full"
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
  );
}
