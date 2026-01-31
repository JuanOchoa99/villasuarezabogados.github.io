import type { Metadata } from "next";
import { Merriweather, Merriweather_Sans } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
});

const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-merriweather-sans",
});

export const metadata: Metadata = {
  title: "Villa Suárez Abogados",
  description:
    "Tu libertad es nuestra prioridad: Asesoría y defensa en Derecho Penal con resultados comprobados. 95% de casos exitosos.",
  keywords: [
    "abogados penalistas",
    "derecho penal",
    "abogados Colombia",
    "Villa Suárez",
    "defensa penal",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${merriweather.variable} ${merriweatherSans.variable} font-serif antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
