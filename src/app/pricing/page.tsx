import { safeFetch, supabase } from "@/lib/supabase";
import { CheckCircle2, Info, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Pricing | LapCircuit",
  description: "Transparent POS system and laptop pricing packages.",
};

const mockPricing = [
  {
    id: "1",
    title: "Basic POS Setup",
    type: "pos",
    price: 85000,
    features: ["Standard POS Terminal", "Receipt Printer", "Cash Drawer", "Basic Configuration", "1 Year Warranty"],
    is_popular: false
  },
  {
    id: "2",
    title: "Standard POS + Lifetime",
    type: "pos",
    price: 135000,
    features: ["Premium POS Terminal", "Thermal Printer", "Barcode Scanner", "Cash Drawer", "Full Configuration & Training", "Lifetime Maintenance Guarantee"],
    is_popular: true
  },
  {
    id: "3",
    title: "Business Laptops",
    type: "laptop",
    price: 110000,
    features: ["Core i5 / i7 Processors", "8GB - 16GB RAM", "Fast SSD Storage", "New & Refurbished Options", "1 Year Comprehensive Warranty"],
    is_popular: false
  }
];

export default async function PricingPage() {
  const packages = await safeFetch(
    supabase.from("pricing_packages").select("*").order("price", { ascending: true }),
    mockPricing
  );

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-secondary)]">
      <Header />
      
      <div className="pt-40 pb-20">
        <div className="container-xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-label">Transparent Pricing</span>
            <h1 className="heading-xl mb-6">
              No hidden fees. <span className="text-gradient">Ever.</span>
            </h1>
            <p className="text-body text-lg font-medium">
              Choose the package that fits your business. All POS systems come with 
              free installation and training.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto mb-24 items-center">
            {packages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`card relative p-10 flex flex-col transition-all duration-300 ${
                  pkg.is_popular 
                    ? "border-transparent bg-white shadow-[0_20px_40px_rgba(59,130,246,0.15)] md:-translate-y-4 hover:-translate-y-6 md:scale-105 z-10" 
                    : "bg-white shadow-sm hover:-translate-y-2"
                }`}
              >
                {/* Gradient Border for Popular */}
                {pkg.is_popular && (
                  <div className="absolute inset-0 rounded-[var(--radius-xl)] p-[2px] bg-gradient-to-br from-blue-500 to-cyan-500 -z-10" />
                )}

                {pkg.is_popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-blue-500/30">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-10">
                  <span className={`text-[11px] font-bold uppercase tracking-widest ${pkg.type === 'pos' ? 'text-blue-600' : 'text-green-600'}`}>
                    {pkg.type === 'pos' ? 'POS System' : 'Hardware'}
                  </span>
                  <h3 className="heading-md mt-2 mb-4 text-slate-900">
                    {pkg.title}
                  </h3>
                  <div className="flex items-end gap-1">
                    <span className="text-slate-500 font-semibold mb-1 text-sm">LKR</span>
                    <span className="text-5xl font-bold text-slate-900 font-heading tracking-tight">
                      {Number(pkg.price).toLocaleString()}
                    </span>
                    {pkg.type === 'laptop' && <span className="text-slate-500 text-sm mb-1 ml-1 font-medium">/ start</span>}
                  </div>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {pkg.features?.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-4">
                      <CheckCircle2 size={20} className={pkg.is_popular ? "text-blue-500" : "text-green-500"} />
                      <span className="text-slate-600 text-[15px] font-medium leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/contact" 
                  className={`w-full justify-center ${pkg.is_popular ? 'btn-primary' : 'btn-secondary'}`}
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ Strip inside Pricing */}
          <div className="max-w-[1200px] mx-auto bg-[var(--bg-deep)] rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl relative overflow-hidden isolate">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -mr-20 -mt-20"></div>

            <div className="flex items-start gap-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Info size={28} />
              </div>
              <div>
                <h4 className="heading-md text-white mb-3">Have specific requirements?</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium max-w-xl">
                  We can customize hardware bundles for supermarkets, multiple-branch networks, 
                  and specialized retail shops. Get in touch for a custom quotation.
                </p>
              </div>
            </div>
            <Link href="/contact" className="btn-primary whitespace-nowrap relative z-10 !bg-white/10 !border !border-white/20 !text-white hover:!bg-white/20 !shadow-none">
              Contact Sales <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
