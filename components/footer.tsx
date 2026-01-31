import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-2">
          Copyright &copy; {new Date().getFullYear()} - Villa Suárez Abogados
        </p>
        <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
          <MapPin className="w-4 h-4" />
          Cra.13 #48-26
        </p>
      </div>
    </footer>
  );
}
