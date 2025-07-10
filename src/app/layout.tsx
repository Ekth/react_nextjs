import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Développeur Full Stack",
  description: "Portfolio de développeur Full Stack spécialisé dans React, Next.js, Node.js et les applications web modernes.",
  keywords: ["développeur", "full stack", "react", "next.js", "portfolio"],
  authors: [{ name: "Votre Nom" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main style={{ paddingTop: '70px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
