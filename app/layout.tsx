import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Le Jardinier du Vignoble — Entretien de jardin à Vallet et Vignoble Nantais",
  description:
    "Votre jardinier de confiance à Vallet. Tonte, taille, désherbage — crédit d'impôt 50 %. Devis gratuit, réponse sous 24h.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
