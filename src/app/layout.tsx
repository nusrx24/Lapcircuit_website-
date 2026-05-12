import type { Metadata } from "next";
import "./globals.css";
import CursorParticles from "@/components/ui/CursorParticles";
import ParticleNetwork from "@/components/ui/ParticleNetwork";

export const metadata: Metadata = {
  title: {
    default: "LapCircuit — POS Systems & Laptop Sales in Sri Lanka",
    template: "%s | LapCircuit",
  },
  description:
    "LapCircuit is Sri Lanka's trusted partner for POS system handover, installation, configuration, and lifetime maintenance. We also supply new & refurbished laptops island-wide.",
  keywords: [
    "POS system Sri Lanka",
    "point of sale Sri Lanka",
    "laptop sales Sri Lanka",
    "POS installation Colombo",
    "retail POS system",
    "restaurant POS",
    "LapCircuit",
  ],
  authors: [{ name: "LapCircuit" }],
  creator: "LapCircuit",
  metadataBase: new URL("https://lapcircuit.lk"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lapcircuit.lk",
    title: "LapCircuit — POS Systems & Laptop Sales in Sri Lanka",
    description:
      "Sri Lanka's trusted partner for POS system supply, installation and lifetime maintenance, plus new & refurbished laptop sales.",
    siteName: "LapCircuit",
  },
  twitter: {
    card: "summary_large_image",
    title: "LapCircuit — POS Systems & Laptop Sales in Sri Lanka",
    description:
      "Sri Lanka's trusted partner for POS system supply, installation and lifetime maintenance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ParticleNetwork />
        <CursorParticles />
        {children}
      </body>
    </html>
  );
}

