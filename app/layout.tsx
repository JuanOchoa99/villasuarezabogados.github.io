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
  title: "Villa Suárez Abogados | Derecho Penal, Civil y Disciplinario",
  description:
    "Equipo de abogados especializados en derecho penal, derecho civil, derecho de familia y derecho disciplinario en Colombia. Asesoría y representación legal personalizada.",
  keywords: [
    "abogados",
    "derecho penal",
    "derecho civil",
    "derecho disciplinario",
    "abogados Colombia",
    "Villa Suárez",
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
