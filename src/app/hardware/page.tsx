import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Monitor, Printer, Keyboard, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "POS Hardware | LapCircuit",
  description: "Enterprise-grade POS hardware: Touchscreens, Thermal Printers, Scanners, and more.",
};

const hardwareItems = [
  {
    title: "POS Terminals",
    icon: Monitor,
    description: "Industrial-grade touchscreen terminals with powerful processors and high-durability displays.",
    specs: ["Capacitive Touchscreen", "Intel Core i3/i5 Options", "Aluminum Die-cast Housing", "Multiple I/O Ports"],
  },
  {
    title: "Thermal Printers",
    icon: Printer,
    description: "High-speed thermal receipt printers with auto-cutter and easy paper loading.",
    specs: ["250mm/s Printing Speed", "USB + LAN + Serial", "Auto-cutter Mechanism", "80mm Paper Width"],
  },
  {
    title: "Peripherals",
    icon: Keyboard,
    description: "Essential accessories including barcode scanners, cash drawers, and customer displays.",
    specs: ["2D Barcode Scanners", "Heavy-duty Cash Drawers", "VFD Customer Displays", "MSR Card Readers"],
  },
  {
    title: "Business Laptops",
    icon: Cpu,
    description: "Premium business laptops from Dell, HP, and Lenovo, optimized for office and retail management.",
    specs: ["Core i5 / i7 Processors", "16GB DDR4 RAM", "512GB NVMe SSD", "Military-grade Durability"],
  }
];

export default function HardwarePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow pt-40 pb-32">
        <div className="container-xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-label">Enterprise Hardware</span>
            <h1 className="heading-xl mb-6">
              Built for <span className="text-gradient">Durability</span>
            </h1>
            <p className="text-body text-lg font-medium">
              We supply only the highest quality, industrial-grade hardware designed to withstand 
              the rigors of high-traffic retail and restaurant environments.
            </p>
          </div>

          {/* Hardware Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
            {hardwareItems.map((item, i) => (
              <div 
                key={i} 
                className="card p-10 group hover:border-sky-500/50 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-colors"></div>
                
                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                    <item.icon size={32} />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">{item.title}</h3>
                    <p className="text-slate-500 mb-8 font-medium leading-relaxed">{item.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {item.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-sky-500 shrink-0" />
                          <span className="text-sm font-bold text-slate-700">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hardware Support Banner */}
          <div className="mt-24 bg-slate-900 rounded-[2.5rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden isolate">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-overlay pointer-events-none"></div>
            
            <div className="max-w-xl relative z-10 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Our Lifetime Hardware Guarantee</h2>
              <p className="text-slate-400 font-medium leading-relaxed">
                When you buy hardware from LapCircuit, you get more than just a device. 
                You get lifetime technical support and priority repair services to ensure 
                zero downtime for your business.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 relative z-10 w-full md:w-auto">
              <Link href="/contact" className="btn-primary !px-8 justify-center">
                Request Hardware Catalog
              </Link>
              <Link href="/pricing" className="btn-secondary !bg-white/5 !text-white !border-white/10 hover:!bg-white/10 justify-center">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
