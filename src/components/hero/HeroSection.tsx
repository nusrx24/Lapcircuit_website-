"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 lg:pt-48 md:pb-20 lg:pb-32 bg-white overflow-hidden">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient glow sphere - left */}
        <div 
          className="absolute -left-40 top-20 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, #0EA5E9 0%, transparent 70%)",
          }}
        />
        
        {/* Gradient glow sphere - right */}
        <div 
          className="absolute -right-40 -bottom-20 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)",
          }}
        />
        
        {/* Subtle mesh pattern for texture */}
        <div 
          className="absolute inset-0 opacity-30" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E5E7EB 1px, transparent 1px)', 
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-xl relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-6 relative inline-block font-heading">
              Sri Lanka&apos;s Trusted <br className="hidden sm:block" />
              <span 
                style={{ 
                  color: "#0EA5E9",
                  backgroundImage: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                POS &amp; Laptop Partner
              </span>
            </h1>
          </motion.div>

          {/* Body Text with better typography */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed" style={{ color: "#475569" }}>
              We supply, install, and maintain POS systems for retail, restaurants, pharmacies &amp; more — with lifetime support.
            </p>
          </motion.div>

          {/* CTAs with premium styling */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link 
              href="/contact" 
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3 text-base sm:text-base font-semibold text-white transition-all duration-300 overflow-hidden rounded-lg flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
                boxShadow: "0 10px 30px rgba(14, 165, 233, 0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 15px 40px rgba(14, 165, 233, 0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(14, 165, 233, 0.3)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Get Free Demo
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/pricing" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3 text-base sm:text-base font-semibold transition-all duration-300 rounded-lg flex items-center justify-center"
              style={{
                border: "2px solid #0EA5E9",
                color: "#0EA5E9",
                backgroundColor: "rgba(14, 165, 233, 0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(14, 165, 233, 0.1)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(14, 165, 233, 0.05)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              View Pricing
            </Link>
          </motion.div>

          {/* Premium Trust Indicators */}
          <motion.div 
            className="pt-8 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {[
                { icon: CheckCircle2, label: "500+ Businesses Served" },
                { icon: CheckCircle2, label: "1200+ Laptops Sold" },
                { icon: CheckCircle2, label: "750+ POS Installed" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 hover:bg-blue-50"
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon size={20} style={{ color: "#0EA5E9" }} />
                  <span className="font-semibold text-gray-700">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
