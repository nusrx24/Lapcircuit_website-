import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans | LapCircuit - Affordable POS Solutions",
  description: "Transparent pricing for POS systems. Choose from Retail, Restaurant, or Enterprise plans. Lifetime support included. No hidden fees.",
  keywords: "POS pricing, POS cost, retail management software, point of sale pricing",
  openGraph: {
    title: "Pricing Plans | LapCircuit",
    description: "Affordable POS solutions for every business size. Starting from 49,000 LKR.",
    type: "website",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
