import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | LapCircuit - Get in Touch",
  description: "Contact LapCircuit for inquiries, support, or to schedule a demo. Available in Colombo, Kandy, and nationwide in Sri Lanka.",
  keywords: "contact, support, inquiry, POS demo, consultation",
  openGraph: {
    title: "Contact Us | LapCircuit",
    description: "Reach out to our team for POS system inquiries or support.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
