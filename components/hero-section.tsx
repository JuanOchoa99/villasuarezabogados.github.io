import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <header id="inicio" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/img/portada1.jpg"
          alt="Oficina de abogados"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-primary font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            Tu libertad es nuestra prioridad: Asesoría y defensa en Derecho Penal con resultados comprobados.
          </h1>
          <p className="text-primary font-serif text-xl md:text-2xl mb-10">
            95% de casos exitosos
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-semibold px-10 py-6 text-lg rounded-full"
          >
            <Link
              href="https://wa.me/+573003446228?text=Estoy%20interesado%20en%20alguno%20de%20los%20servicios."
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactanos
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
