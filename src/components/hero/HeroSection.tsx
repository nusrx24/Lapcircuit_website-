"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="container-xl relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Headline */}
          <h1 className="heading-xl mb-6">
            Sri Lanka&apos;s Trusted <br />
            <span style={{ color: "var(--accent-blue)" }}>POS &amp; Laptop Partner</span>
          </h1>

          {/* Body Text */}
          <p className="text-body text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            We supply, install, and maintain POS systems for retail, restaurants, pharmacies &amp; more — with lifetime support.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/contact" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.125rem" }}>
              Get Free Demo
            </Link>
            <Link href="/pricing" className="btn-secondary" style={{ padding: "1rem 2rem", fontSize: "1.125rem" }}>
              View Pricing
            </Link>
          </div>

          {/* Trust Indicators Strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-green-600" />
              <span className="font-semibold text-gray-700">500+ Businesses Served</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-green-600" />
              <span className="font-semibold text-gray-700">1200+ Laptops Sold</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-green-600" />
              <span className="font-semibold text-gray-700">750+ POS Installed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
