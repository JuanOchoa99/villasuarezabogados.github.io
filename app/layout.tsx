import type { Metadata } from "next"
import { Merriweather, Merriweather_Sans } from "next/font/google"
import "./globals.css"

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
})

const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather-sans",
})

export const metadata: Metadata = {
  title: "Villa Suarez Abogados",
  description:
    "En Villa Suarez Abogados, contamos con un equipo de profesionales altamente calificados y con amplia experiencia en las areas de derecho penal, derecho civil, civil familia y derecho disciplinario.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${merriweather.variable} ${merriweatherSans.variable} font-serif antialiased`}>
        {children}
      </body>
    </html>
  )
}
