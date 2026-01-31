import { MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-muted-foreground text-sm font-sans mb-2">
          Copyright © 2024 - Villa Suarez Abogados
        </p>
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <MapPin className="w-4 h-4" />
          <span className="font-sans">Cra.13 #48-26</span>
        </div>
      </div>
    </footer>
  )
}
