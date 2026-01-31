import { Phone, Instagram, Facebook } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    text: "+57 (300) 344-6228",
  },
  {
    icon: Instagram,
    text: "@villasuarezabogados",
  },
  {
    icon: Facebook,
    text: "@villasuarezabogados",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Contáctanos</h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((item) => (
            <div key={item.text} className="text-center">
              <div className="flex items-center justify-center gap-3 text-slate-300">
                <item.icon className="w-5 h-5" />
                <span className="font-sans">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
