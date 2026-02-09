import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Le Jardinier du Vignoble — Entretien de jardin à Vallet",
  description:
    "Votre jardinier de proximité pour l'entretien de jardin à Vallet et dans le Vignoble Nantais. Tonte, taille de haies, désherbage écoresponsable. Crédit d'impôt 50%. Devis gratuit.",
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
