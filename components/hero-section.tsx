import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <header
      id="inicio"
      className="relative min-h-screen flex items-center justify-center"
    >
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
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-[#EEDFC5] font-serif text-2xl md:text-3xl lg:text-4xl mb-6 leading-relaxed">
            Tu libertad es nuestra prioridad: Asesoría y defensa en Derecho
            Penal con resultados comprobados.
          </h4>
          <h6 className="text-[#EEDFC5] font-serif text-base md:text-lg mb-10">
            95% de casos exitosos
          </h6>
          <Link
            href="https://wa.me/+573003446228?text=Estoy%20interesado%20en%20alguno%20de%20los%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#EEDFC5] text-black font-sans font-semibold px-8 py-3 rounded-full hover:bg-[#e0d0b5] transition-colors text-sm uppercase tracking-wider"
          >
            Contactanos
          </Link>
        </div>
      </div>
    </header>
  );
}
