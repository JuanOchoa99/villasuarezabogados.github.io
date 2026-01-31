import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-white">
          Contáctanos
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <Link
            href="tel:+573003446228"
            className="text-[#EEDFC5] hover:text-[#e0d0b5] transition-colors font-serif italic text-lg"
          >
            +57 (300) 344-6228
          </Link>
          <Link
            href="https://instagram.com/villasuarezabogados"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EEDFC5] hover:text-[#e0d0b5] transition-colors font-serif italic text-lg"
          >
            @villasuarezabogados
          </Link>
          <Link
            href="https://facebook.com/villasuarezabogados"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EEDFC5] hover:text-[#e0d0b5] transition-colors font-serif italic text-lg"
          >
            @villasuarezabogados
          </Link>
        </div>
      </div>
    </section>
  );
}
