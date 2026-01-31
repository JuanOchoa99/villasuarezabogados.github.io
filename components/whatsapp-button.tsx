import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/+573003446228?text=Estoy%20interesado%20en%20alguno%20de%20los%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" fill="currentColor" />
    </Link>
  );
}
