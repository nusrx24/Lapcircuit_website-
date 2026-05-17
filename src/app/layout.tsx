import type { Metadata } from "next";
import "./globals.css";
import CursorParticles from "@/components/ui/CursorParticles";
import ParticleNetwork from "@/components/ui/ParticleNetwork";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

export const metadata: Metadata = {
  title: {
    default: "POS from Lapcircuit — POS Systems & Software Development in Sri Lanka",
    template: "%s | POS from Lapcircuit",
  },
  description:
    "POS from Lapcircuit provides modern POS systems, custom desktop software, mobile applications, and business management solutions across Sri Lanka. We develop both online and offline software systems with lifetime ownership models.",
  keywords: [
    "POS System Sri Lanka",
    "Best POS Software Sri Lanka",
    "Custom Software Development Sri Lanka",
    "Offline POS System",
    "Online POS System Sri Lanka",
    "Desktop Application Development",
    "Mobile App Development Sri Lanka",
    "Lifetime POS Software",
  ],
  authors: [{ name: "POS from Lapcircuit" }],
  creator: "POS from Lapcircuit",
  metadataBase: new URL("https://lapcircuit.lk"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lapcircuit.lk",
    title: "POS from Lapcircuit — POS Systems & Software Development in Sri Lanka",
    description:
      "POS from Lapcircuit provides modern POS systems, custom desktop software, mobile applications, and business management solutions across Sri Lanka.",
    siteName: "POS from Lapcircuit",
  },
  twitter: {
    card: "summary_large_image",
    title: "POS from Lapcircuit — POS Systems & Software Development in Sri Lanka",
    description:
      "POS from Lapcircuit provides modern POS systems, custom desktop software, mobile applications, and business management solutions across Sri Lanka.",
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
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

