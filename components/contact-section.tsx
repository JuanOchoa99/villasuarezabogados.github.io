import { Phone, Instagram, Facebook } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "+57 (300) 344-6228",
    href: "tel:+573003446228",
  },
  {
    icon: Instagram,
    label: "@villasuarezabogados",
    href: "https://instagram.com/villasuarezabogados",
  },
  {
    icon: Facebook,
    label: "@villasuarezabogados",
    href: "https://facebook.com/villasuarezabogados",
  },
];

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-center mb-4">
          Contáctanos
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16" />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-sans">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
