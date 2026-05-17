import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Store, Utensils, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | LapCircuit",
  description: "Explore our specialized POS solutions for Retail, Restaurants, and Enterprises.",
};

const productCategories = [
  {
    title: "Retail POS",
    icon: Store,
    description: "Perfect for retail stores, boutiques, and shops. Manage inventory, track sales, and handle customer transactions with ease.",
    features: ["Inventory Management", "Customer Profiles", "Multi-location Support", "Real-time Analytics"],
    isPopular: false
  },
  {
    title: "Restaurant POS",
    icon: Utensils,
    description: "Designed specifically for restaurants, cafes, and food services. Streamline orders, kitchen management, and table service.",
    features: ["Table Management", "Kitchen Display System", "Online Ordering Integration", "Menu Customization"],
    isPopular: true
  },
  {
    title: "Enterprise POS",
    icon: Building2,
    description: "For large businesses and chains. Advanced features, unlimited locations, and enterprise-grade support and security.",
    features: ["Unlimited Locations", "Advanced Analytics", "Custom Integrations", "24/7 Priority Support"],
    isPopular: false
  }
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow pt-40 pb-32">
        <div className="container-xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-label">Tailored Solutions</span>
            <h1 className="heading-xl mb-6">
              Specialized <span className="text-gradient">POS Ecosystems</span>
            </h1>
            <p className="text-body text-lg font-medium">
              We don&apos;t believe in one-size-fits-all. Our products are purpose-built 
              for your specific industry needs.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto items-stretch">
            {productCategories.map((product, i) => (
              <div 
                key={i} 
                className={`relative group p-10 flex flex-col rounded-[2.5rem] transition-all duration-500 border h-full ${
                  product.isPopular 
                    ? "bg-[#0a0f1a] border-sky-500/50 shadow-[0_20px_50px_rgba(14,165,233,0.15)] lg:-translate-y-6 lg:scale-105" 
                    : "bg-white border-slate-100 hover:border-sky-200 shadow-sm hover:shadow-xl hover:-translate-y-2"
                }`}
              >
                {/* Popular Badge */}
                {product.isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <span className="bg-sky-500 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-sky-500/40 border border-white/20">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 ${
                    product.isPopular ? "bg-sky-500/10 text-sky-400" : "bg-sky-50 text-sky-600"
                  }`}>
                    <product.icon size={40} strokeWidth={1.5} />
                  </div>

                  <h3 className={`text-3xl font-bold mb-6 font-heading ${
                    product.isPopular ? "text-white" : "text-slate-900"
                  }`}>
                    {product.title}
                  </h3>

                  <p className={`mb-10 text-[15px] leading-relaxed font-medium ${
                    product.isPopular ? "text-slate-400" : "text-slate-500"
                  }`}>
                    {product.description}
                  </p>

                  <div className={`space-y-5 mb-12 flex-grow ${
                    product.isPopular ? "border-t border-white/5 pt-8" : "border-t border-slate-100 pt-8"
                  }`}>
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          product.isPopular ? "bg-sky-500/20 text-sky-400" : "bg-sky-100 text-sky-600"
                        }`}>
                          <CheckCircle2 size={12} strokeWidth={3} />
                        </div>
                        <span className={`text-[15px] font-bold tracking-tight ${
                          product.isPopular ? "text-slate-300" : "text-slate-700"
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-6">
                    <Link 
                      href="/pricing" 
                      className={`btn-primary !px-0 flex-1 justify-center !text-[13px] !py-4 ${
                        product.isPopular ? "" : ""
                      }`}
                    >
                      See Pricing Plans
                    </Link>
                    <Link 
                      href="/hardware" 
                      className={`btn-secondary !px-0 flex-1 justify-center !text-[13px] !py-4 ${
                        product.isPopular ? "!bg-transparent !border-white/20 !text-white hover:!bg-white/10" : ""
                      }`}
                    >
                      POS Hardware
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-32 max-w-4xl mx-auto p-12 rounded-[3rem] bg-slate-50 border border-slate-200 text-center relative overflow-hidden">
             <div className="absolute -right-20 -top-20 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl"></div>
             <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Not sure which one is right for you?</h2>
             <p className="text-slate-500 mb-10 font-medium text-lg">Our experts can provide a personalized demo based on your business operations.</p>
             <Link href="/contact" className="btn-primary !px-10 !py-4">
               Get Personalised Demo <ArrowRight size={20} className="ml-2" />
             </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
