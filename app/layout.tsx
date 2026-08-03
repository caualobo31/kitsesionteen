import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title:
    "Kit Sesión Teen | Recursos visuales para psicólogas que atienden adolescentes",
  description:
    "+80 recursos terapéuticos listos, organizados por motivo de consulta, hechos para adolescentes. Sin cara de material para niños.",
  openGraph: {
    title:
      "Kit Sesión Teen | Recursos visuales para psicólogas que atienden adolescentes",
    description:
      "+80 recursos terapéuticos listos, organizados por motivo de consulta, hechos para adolescentes.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="bg-cream text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
