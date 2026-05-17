"use client";

import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingComparison from "@/components/pricing/PricingComparison";
import { 
  Store, Utensils, Pill, Coffee, Bed, Shirt, 
  CheckCircle2, ArrowRight, Phone, Mail, HelpCircle, 
  TrendingUp, Clock, Package, Zap, CreditCard, Wallet,
  ChevronDown, ChevronUp
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const industries = [
  {
    title: "Retail Shops & Supermarkets",
    price: "49,000",
    icon: Store,
    features: [
      "Advanced Inventory Tracking",
      "Barcode & Label Printing",
      "Supplier Management",
      "Automated Daily Sales Reports",
      "Multiple Payment Method Support"
    ],
    tag: "Best Value"
  },
  {
    title: "Restaurants & Cafes",
    price: "69,000",
    icon: Utensils,
    features: [
      "Dynamic Table Management",
      "Kitchen Display System (KDS)",
      "Recipe & Ingredient Tracking",
      "Split Billing & Custom Tips",
      "Online Order Integration"
    ],
    tag: "Most Popular"
  },
  {
    title: "Pharmacies",
    price: "49,000",
    icon: Pill,
    features: [
      "Expiry Date Alerts",
      "Batch & Lot Management",
      "Prescription History Records",
      "Drug Interaction Warnings",
      "Regulatory Compliance Tools"
    ]
  },
  {
    title: "Bakeries & Confectioneries",
    price: "49,000",
    icon: Coffee,
    features: [
      "Freshness & Waste Tracking",
      "Pre-order & Advance Management",
      "Recipe Costing Analysis",
      "Loyalty Program Integration",
      "Custom Labeling Solutions"
    ]
  },
  {
    title: "Hotels & Resorts",
    price: "69,000",
    icon: Bed,
    features: [
      "PMS Integration Module",
      "Room Service Billing",
      "Laundry & Facility Tracking",
      "Check-in/Check-out Workflows",
      "Comprehensive Guest Profiles"
    ]
  },
  {
    title: "Clothing & Fashion",
    price: "49,000",
    icon: Shirt,
    features: [
      "Size, Color, & Variant Matrix",
      "Thermal Tag Printing",
      "Exchange & Return Handling",
      "Seasonal Discount Manager",
      "Gift Card & Voucher Support"
    ]
  }
];

const whatsIncluded = [
  {
    title: "Software & Licensing",
    icon: Zap,
    points: ["Lifetime Ownership Model", "Regular Security Updates", "Offline-First Functionality", "Cloud Sync Modules"]
  },
  {
    title: "Setup & Support",
    icon: Clock,
    points: ["On-site Professional Install", "Full Staff Training", "Data Import Assistance", "24/7 Technical Support"]
  },
  {
    title: "Hardware Options",
    icon: Package,
    points: ["Heavy-duty Touch Terminals", "Fast Thermal Printers", "Secure Cash Drawers", "2D Barcode Scanners"]
  },
  {
    title: "Advanced Features",
    icon: TrendingUp,
    points: ["Multi-branch Networking", "Mobile Owner Dashboard", "AI-Powered Sales Forecast", "Custom API Access"]
  }
];

const faqs = [
  {
    q: "How long does the installation take?",
    a: "Most standard setups are completed within 4 to 6 hours. We handle everything from hardware placement to staff training in a single visit."
  },
  {
    q: "Do I have to pay a monthly fee?",
    a: "No. With our One-Time Purchase model, you own the software forever. We only offer subscription models for those who prefer lower upfront costs."
  },
  {
    q: "Does the system work without internet?",
    a: "Yes. Our systems are 'Offline-First', meaning you can make sales and track inventory even if your internet goes down. Data syncs to the cloud once you're back online."
  },
  {
    q: "Can I use my existing laptops or hardware?",
    a: "If your hardware meets our minimum specifications (Windows 10+, 8GB RAM), we can install our software on your existing devices."
  },
  {
    q: "Is staff training included in the price?",
    a: "Absolutely. We provide comprehensive training for both your sales staff and management as part of every installation."
  },
  {
    q: "What kind of support do you provide after purchase?",
    a: "We offer 24/7 remote technical support and on-site hardware repairs. Our 'Lifetime Maintenance' guarantee means we're always just a call away."
  },
  {
    q: "Can I manage multiple shops from home?",
    a: "Yes. Our Cloud-Sync module allows you to view real-time sales and inventory from all your branches on your mobile phone or laptop."
  },
  {
    q: "How secure is my business data?",
    a: "We use bank-level encryption for all cloud syncs and perform automatic local backups every hour to ensure your data is never lost."
  },
  {
    q: "Do you offer payment in installments?",
    a: "Yes. We partner with major banks to offer 3, 6, and 12-month interest-free installment plans for our hardware bundles."
  }
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      {/* ── 1. HERO SECTION ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-[#E0F2FE] to-white relative overflow-hidden">
        <div className="bg-mesh absolute inset-0 opacity-40"></div>
        <div className="container-xl relative z-10 text-center px-4 sm:px-6 md:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0EA5E9] mb-3 sm:mb-6 block">Pricing Plans</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-8 font-heading">
            Transparent Pricing for <br className="hidden sm:block" />
            <span style={{ color: "#0EA5E9" }}>Every Industry</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium text-slate-600 leading-relaxed">
            No hidden costs. No monthly traps. Just powerful POS solutions 
            designed to grow your business in Sri Lanka.
          </p>
        </div>
      </section>

      {/* ── 2. INDUSTRY PRICING GRID ── */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative px-4 sm:px-6 md:px-0">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {industries.map((item, i) => (
              <div key={i} className="card p-6 sm:p-8 md:p-10 flex flex-col relative bg-[#F8FAFC]/50 backdrop-blur-sm">
                {item.tag && (
                  <div className="absolute top-6 right-6">
                    <span className="bg-sky-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-sky-500/20">
                      {item.tag}
                    </span>
                  </div>
                )}
                
                <div className="w-16 h-16 rounded-2xl bg-sky-50 text-[#0EA5E9] flex items-center justify-center mb-8">
                  <item.icon size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading heading-accent">{item.title}</h3>
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="price-tag">
                    <span className="text-xs font-bold mr-1">Rs.</span>
                    {item.price}
                  </div>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">One-Time</span>
                </div>

                <ul className="space-y-4 mb-10 flex-grow border-t border-slate-100 pt-8">
                  {item.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#0EA5E9] shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm font-bold leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="btn-primary w-full justify-center !py-4 shadow-sky-500/20">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2.5 PRICING COMPARISON TABLE ── */}
      <PricingComparison />

      {/* ── 3. WHAT'S INCLUDED ── */}
      <section className="section-pad bg-[#F0F9FF]">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="heading-lg mb-4 text-slate-900 heading-accent">What&apos;s Included?</h2>
            <p className="text-slate-500 font-medium mt-6">Every plan is a complete turnkey solution. We handle the technical heavy lifting so you can focus on sales.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {whatsIncluded.map((col, i) => (
              <div key={i} className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#0EA5E9] border border-sky-100">
                  <col.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-heading">{col.title}</h4>
                <ul className="space-y-4">
                  {col.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-bold text-slate-500">
                      <CheckCircle2 size={16} className="text-sky-400 mt-1 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ROI CALCULATOR ── */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center mb-20">
            <span className="section-label mb-6">ROI Analysis</span>
            <h2 className="heading-lg mb-4 text-slate-900 heading-accent">Calculate Your Savings</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { val: "50-65%", label: "Time Saved", desc: "On manual entries & reporting" },
              { val: "30-45%", label: "Inventory Accuracy", desc: "Reduced leakage & waste" },
              { val: "2-3 Mo", label: "Payback Period", desc: "Average time to recover cost" }
            ].map((stat, i) => (
              <div key={i} className="card !bg-[#F0F9FF] p-12 text-center border-sky-100">
                <div className="text-6xl font-black text-[#0EA5E9] mb-4 font-heading">{stat.val}</div>
                <div className="text-slate-900 font-bold text-xl mb-2">{stat.label}</div>
                <p className="text-slate-500 text-sm font-medium">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div className="card p-12 bg-white border-sky-100 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
            <div className="w-24 h-24 rounded-3xl bg-sky-50 flex items-center justify-center shrink-0 border border-sky-100">
              <TrendingUp size={40} className="text-[#0EA5E9]" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Small Retail Shop Example</h4>
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                For a shop with a <strong className="text-sky-600">1M LKR monthly turnover</strong>, manual reconciliation usually takes 15+ hours per week. 
                Our system reduces inventory leakage by <strong className="text-sky-600">5% on average</strong>, meaning the setup pays for itself in 
                <strong className="text-sky-600"> under 90 days</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. PAYMENT OPTIONS ── */}
      <section className="section-pad bg-[#F0F9FF]">
        <div className="container-xl">
          <div className="text-center mb-20">
            <h2 className="heading-lg mb-4 text-slate-900 heading-accent">Flexible Payment Models</h2>
            <p className="text-slate-500 font-medium mt-6">Choose the investment style that fits your business cash flow.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
             <div className="card p-12 bg-white border-slate-100 group">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 text-slate-900 group-hover:bg-sky-500 group-hover:text-white transition-all">
                  <Wallet size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-6 font-heading text-slate-900">One-Time Purchase</h3>
                <p className="text-slate-500 mb-10 font-medium text-lg">Best for long-term stability. Own the license forever with no recurring software fees.</p>
                <ul className="space-y-4 mb-12">
                  {["Full Ownership", "Lifetime Security Updates", "One payment, zero traps"].map(p => (
                    <li key={p} className="flex items-center gap-3 text-base font-bold text-slate-700">
                      <CheckCircle2 size={20} className="text-sky-500" /> {p}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-secondary w-full justify-center !py-4 hover:border-sky-500 hover:text-sky-600">Select Plan</Link>
             </div>

             <div className="card p-12 bg-white border-slate-100 group">
                <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center mb-8 text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all">
                  <CreditCard size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-6 font-heading text-slate-900">Subscription</h3>
                <p className="text-slate-500 mb-10 font-medium text-lg">Low upfront cost. Perfect for startups and seasonal businesses that want to scale slowly.</p>
                <ul className="space-y-4 mb-12">
                  {["Low Initial Entry", "Premium Cloud Modules", "Month-to-month flexibility"].map(p => (
                    <li key={p} className="flex items-center gap-3 text-base font-bold text-slate-700">
                      <CheckCircle2 size={20} className="text-sky-500" /> {p}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-secondary w-full justify-center !py-4 hover:border-sky-500 hover:text-sky-600">Select Plan</Link>
             </div>
          </div>

          <div className="text-center p-12 bg-white rounded-3xl shadow-sm border border-sky-100 max-w-4xl mx-auto">
            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-8">Payment Methods & Partners</p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 text-slate-600 font-black text-sm">
              <span className="hover:text-sky-500 transition-colors cursor-default">BANK TRANSFER</span>
              <span className="hover:text-sky-500 transition-colors cursor-default">VISA / MASTERCARD</span>
              <span className="hover:text-sky-500 transition-colors cursor-default">AMEX</span>
              <span className="hover:text-sky-500 transition-colors cursor-default">0% INSTALLMENTS</span>
              <span className="text-sky-600 underline cursor-pointer">EARLY-BIRD DISCOUNT</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ SECTION ── */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white px-4 sm:px-6 md:px-0">
        <div className="container-xl max-w-4xl">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-slate-900 font-heading mb-4">Pricing FAQ</h2>
            <p className="text-slate-500 font-medium mt-4 sm:mt-6 text-base sm:text-lg">Got questions? We have answers.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full p-6 text-left flex items-center justify-between transition-colors ${openFaq === i ? 'bg-sky-50' : 'bg-white hover:bg-slate-50'}`}
                >
                  <span className="font-bold text-slate-900 text-lg font-heading">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="text-sky-600" /> : <ChevronDown className="text-slate-400" />}
                </button>
                {openFaq === i && (
                  <div className="p-6 bg-white border-t border-sky-50 text-slate-600 font-medium leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CUSTOM QUOTE CTA ── */}
      <section className="section-pad px-6">
        <div className="container-xl">
          <div className="bg-[#0EA5E9] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden isolate shadow-2xl shadow-sky-500/40">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-300/20 rounded-full blur-[80px] -ml-20 -mb-20"></div>
            
            <h2 className="heading-xl text-white mb-8 relative z-10">Need a Custom Quote?</h2>
            <p className="text-sky-50 text-xl mb-16 max-w-2xl mx-auto font-medium relative z-10 opacity-90">
              Every business is unique. We can customize hardware bundles for supermarkets, 
              multi-branch networks, and specialized retail shops.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-16 relative z-10">
              <a href="tel:+94711249740" className="flex flex-col items-center gap-3 group" style={{ textDecoration: "none" }}>
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-sky-600 transition-all">
                  <Phone size={28} />
                </div>
                <span className="text-sky-200 text-xs font-black uppercase tracking-widest">Call Expert</span>
                <span className="text-2xl font-black text-white">+94 71 124 9740</span>
              </a>

              <div className="hidden md:block h-20 w-px bg-white/20"></div>

              <a href="mailto:lapcircuitinfo@gmail.com" className="flex flex-col items-center gap-3 group" style={{ textDecoration: "none" }}>
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-sky-600 transition-all">
                  <Mail size={28} />
                </div>
                <span className="text-sky-200 text-xs font-black uppercase tracking-widest">Email Us</span>
                <span className="text-2xl font-black text-white text-wrap">lapcircuitinfo@gmail.com</span>
              </a>
            </div>

            <div className="flex justify-center relative z-10">
              <Link href="/contact" className="btn-secondary !bg-white !text-[#0EA5E9] !border-none !px-12 !py-5 !text-xl shadow-xl hover:!scale-105 active:scale-95 transition-transform font-black">
                GET YOUR FREE DEMO <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
