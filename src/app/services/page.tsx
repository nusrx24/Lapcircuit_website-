import { safeFetch, supabase } from "@/lib/supabase";
import { Monitor, Wrench, ShieldCheck, Clock, Settings, Laptop, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Our Services | LapCircuit",
  description: "POS System Handover, Maintenance, and Laptop Sales across Sri Lanka.",
};

const mockServices = [
  {
    id: "1",
    title: "POS System Handover",
    description: "Complete end-to-end POS supply and installation for retail, restaurants, and supermarkets.",
    icon: "Monitor"
  },
  {
    id: "2",
    title: "Lifetime Maintenance",
    description: "24/7 technical support, hardware repairs, and software troubleshooting for all our POS systems.",
    icon: "Wrench"
  },
  {
    id: "3",
    title: "Laptop Sales (New & Used)",
    description: "Premium grade laptops for personal, student, and heavy business use. Certified and guaranteed.",
    icon: "Laptop"
  },
  {
    id: "4",
    title: "System Configuration",
    description: "Custom software setup, inventory import, and staff training before we hand over the system.",
    icon: "Settings"
  }
];

const getIcon = (iconName: string) => {
  switch (iconName?.toLowerCase()) {
    case "monitor": return <Monitor size={24} />;
    case "wrench": return <Wrench size={24} />;
    case "laptop": return <Laptop size={24} />;
    case "settings": return <Settings size={24} />;
    case "clock": return <Clock size={24} />;
    default: return <ShieldCheck size={24} />;
  }
};

export default async function ServicesPage() {
  const services = await safeFetch(
    supabase.from("services").select("*").order("created_at", { ascending: true }),
    mockServices
  );

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-secondary)]">
      <Header />
      
      <div className="pt-40 pb-20">
        <div className="container-xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
            
            <span className="section-label">Our Services</span>
            <h1 className="heading-xl mb-6">
              Everything you need to <span className="text-gradient">run your business</span>
            </h1>
            <p className="text-body text-lg font-medium">
              From complete POS setups to high-performance laptops, LapCircuit provides the hardware
              and lifetime support to keep your operations running smoothly.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32 max-w-[1400px] mx-auto">
            {services.map((service) => (
              <div key={service.id} className="card p-10 group">
                <div className="icon-box mb-8">
                  {getIcon(service.icon || "shield")}
                </div>
                <h3 className="heading-md mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium text-[15px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Process Banner */}
          <div className="bg-[var(--bg-deep)] rounded-[2rem] p-12 md:p-20 relative overflow-hidden text-center max-w-[1400px] mx-auto shadow-2xl isolate">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] opacity-50 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[100px] opacity-50 -ml-32 -mb-32"></div>
            
            <span className="section-label-dark mb-6">Methodology</span>
            <h2 className="heading-lg mb-16 text-white relative z-10">Our Simple 3-Step Process</h2>
            
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 -z-10" />

              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl font-bold font-heading text-white mx-auto shadow-[0_0_30px_rgba(59,130,246,0.3)]">1</div>
                <h4 className="heading-md text-xl text-white">Consultation</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">We analyze your business needs and recommend the perfect hardware.</p>
              </div>
              
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl font-bold font-heading text-white mx-auto shadow-[0_0_30px_rgba(59,130,246,0.3)]">2</div>
                <h4 className="heading-md text-xl text-white">Install & Configure</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">Our experts install the system on-site and train your staff.</p>
              </div>

              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl font-bold font-heading text-white mx-auto shadow-[0_0_30px_rgba(59,130,246,0.3)]">3</div>
                <h4 className="heading-md text-xl text-white">Lifetime Support</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">You focus on your business, we handle any technical issues 24/7.</p>
              </div>
            </div>

            <div className="mt-16 relative z-10">
              <Link href="/contact" className="btn-primary !px-8 !py-4 !text-lg">
                Start Your Setup <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
