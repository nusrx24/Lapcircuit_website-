import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | LapCircuit - POS Tips, Retail Advice & Success Stories",
  description: "Read insights on POS systems, retail strategies, and business success stories from LapCircuit experts. Learn how to optimize your retail operations.",
  keywords: "POS blog, retail advice, business tips, point of sale systems, retail management",
  openGraph: {
    title: "Blog | LapCircuit - Retail & POS Insights",
    description: "Expert insights on POS systems, retail management, and business growth strategies.",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
