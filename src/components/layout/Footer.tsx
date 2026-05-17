"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      <div className="container-xl pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block mb-6" style={{ textDecoration: "none" }}>
              <span className="font-heading font-black text-2xl tracking-tight text-white flex items-center gap-3">
                <img src="/logo.png" alt="LapCircuit" className="w-10 h-10 object-contain" />
                LapCircuit
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              POS from Lapcircuit provides modern POS systems, custom desktop software, mobile applications, and business management solutions across Sri Lanka.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FaFacebook, href: "#", label: "Facebook" },
                { Icon: FaInstagram, href: "#", label: "Instagram" },
                { Icon: FaWhatsapp, href: "https://wa.me/94711249740", label: "WhatsApp" },
                { Icon: FaLinkedin, href: "https://linkedin.com/company/lapcircuit", label: "LinkedIn" },
                { Icon: FaGithub, href: "https://github.com/lapcircuit", label: "GitHub" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500/50 hover:bg-slate-700 transition-all shadow-sm"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 1: Services */}
          <div className="lg:col-span-2 lg:col-start-5">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-6">Services</h4>
            <ul className="flex flex-col gap-4">
              {[
                { href: "/services#pos", label: "POS Setup" },
                { href: "/services#laptops", label: "Business Laptops" },
                { href: "/services#maintenance", label: "Lifetime Support" },
                { href: "/services#consulting", label: "Consulting" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors" style={{ textDecoration: "none" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Company */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              {[
                { href: "/about", label: "About Us" },
                { href: "/pricing", label: "Pricing" },
                { href: "/success-stories", label: "Success Stories" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors" style={{ textDecoration: "none" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-6">Get In Touch</h4>
            <div className="flex flex-col gap-4">
              {[
                { Icon: Phone, text: "+94 71 124 9740", href: "tel:+94711249740" },
                { Icon: Mail, text: "lapcircuitinfo@gmail.com", href: "mailto:lapcircuitinfo@gmail.com" },
                { Icon: MapPin, text: "Eravur, Batticaloa Srilanka", href: undefined },
              ].map(({ Icon, text, href }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="text-sky-400 mt-0.5">
                    <Icon size={16} />
                  </div>
                  {href ? (
                    <a href={href} className="text-slate-400 hover:text-white text-sm font-medium transition-colors" style={{ textDecoration: "none" }}>{text}</a>
                  ) : (
                    <span className="text-slate-400 text-sm font-medium">{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Office Hours */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-6">Office Hours</h4>
            <div className="flex flex-col gap-4 text-sm font-medium text-slate-400">
              <div className="flex items-start gap-3">
                <div className="text-sky-400 mt-0.5">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-white mb-1">Mon - Fri</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-2">
                <div className="text-slate-600 mt-0.5">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-white mb-1">Sat - Sun</p>
                  <p>Closed</p>
                  <p className="text-xs text-sky-400 mt-2">* 24/7 Support available for active clients</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Line */}
      <div className="border-t border-slate-800 py-6 relative z-10 bg-slate-900/50">
        <div className="container-xl flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm font-medium text-slate-500">
            © {year} POS from Lapcircuit. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm font-medium text-slate-500 hover:text-white transition-colors" style={{ textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms" className="text-sm font-medium text-slate-500 hover:text-white transition-colors" style={{ textDecoration: "none" }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
