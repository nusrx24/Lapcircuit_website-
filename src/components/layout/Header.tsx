"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/#features", label: "Features" },
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/hardware", label: "Hardware" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.335 11.897-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

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
          scrolled ? "bg-white/95 backdrop-blur-sm py-3 shadow-md border-b" : "bg-white/80 backdrop-blur-sm py-4 border-b"
        }`}
        style={{
          borderBottomColor: scrolled ? "#0EA5E9" : "#0EA5E920"
        }}
      >
        <div className="container-xl flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
            <img src="/logo.png" alt="LapCircuit" className="w-10 h-10 object-contain" />
            <div className="font-heading font-black text-2xl tracking-tight">
              <span style={{ color: "#0EA5E9" }}>Lap</span>
              <span style={{ color: "#111827" }}>Circuit</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={`font-body font-medium text-[13px] px-3 py-2 rounded-full transition-all duration-200 ${
                      isActive 
                        ? "font-semibold" 
                        : "hover:text-slate-900"
                    }`}
                    style={{ 
                      textDecoration: "none",
                      color: isActive ? "#0EA5E9" : "#4B5563"
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = "#0EA5E9";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = "#4B5563";
                    }}
                  >
                    {link.label}
                  </Link>
                  {isActive && (
                    <div
                      className="absolute bottom-0 left-3 right-3 h-1 rounded-full transition-all duration-200"
                      style={{ backgroundColor: "#0EA5E9" }}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://wa.me/94711249740" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white transition-all duration-200 shadow-md hover:shadow-lg"
              style={{ backgroundColor: "#25D366" }}
            >
              <WhatsAppIcon /> WhatsApp
            </a>
            <Link 
              href="/contact" 
              className="flex items-center gap-2 px-6 py-2.5 rounded-[8px] text-sm font-medium text-white transition-all duration-200 hover:shadow-lg"
              style={{ 
                backgroundColor: "#0EA5E9",
                color: "white"
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#0284C7"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#0EA5E9"}
            >
              Get Quote <ArrowRight size={16} />
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
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-heading font-semibold text-lg px-6 py-3 rounded-2xl transition-all ${
                  isActive ? "bg-blue-50" : "text-gray-900 hover:bg-gray-50"
                }`}
                style={{ 
                  textDecoration: "none",
                  color: isActive ? "#0EA5E9" : "#4B5563"
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto flex flex-col gap-3">
          <a 
            href="https://wa.me/94711249740" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-full text-base font-medium text-white transition-all duration-200 shadow-md hover:shadow-lg"
            style={{ backgroundColor: "#25D366" }}
          >
            <WhatsAppIcon /> WhatsApp Us
          </a>
          <Link 
            href="/contact" 
            onClick={() => setMobileOpen(false)} 
            className="flex items-center justify-center gap-2 w-full py-4 rounded-[8px] text-base font-medium text-white transition-all duration-200 hover:shadow-lg"
            style={{ backgroundColor: "#0EA5E9" }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#0284C7"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#0EA5E9"}
          >
            Get Quote <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
}
