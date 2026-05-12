"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/testimonials", label: "Testimonials" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav py-3 shadow-sm border-b border-slate-200/80" : "bg-white/80 backdrop-blur-md py-4 border-b border-slate-200/30"
        }`}
      >
        <div className="container-xl flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
            <img src="/logo.png" alt="LapCircuit Logo" className="w-8 h-8 object-contain" />
            <span className="font-heading font-black text-2xl tracking-tight text-slate-900">
              Lap<span className="text-gradient">Circuit</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2 bg-slate-50/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body font-medium text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive 
                      ? "bg-blue-50 text-blue-600 shadow-sm" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+94711249740" className="font-body font-medium text-sm text-slate-600 hover:text-slate-900 transition-colors" style={{ textDecoration: "none" }}>
              +94 71 124 9740
            </a>
            <Link href="/contact" className="btn-primary !px-6 !py-2.5 !text-sm">
              Get Started <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 text-gray-900 bg-gray-100/50 rounded-lg"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-heading font-semibold text-lg px-6 py-4 rounded-2xl transition-all ${
                  isActive ? "bg-blue-50 text-blue-600" : "text-gray-900 hover:bg-gray-50"
                }`}
                style={{ textDecoration: "none" }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto flex flex-col gap-4">
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center !py-4">
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
}
