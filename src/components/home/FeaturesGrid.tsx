import { Layers, Clock, Lock, Code, Headset, Box } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Cloud-Based Infrastructure",
    description: "Access your business data from anywhere, anytime. Our cloud platform ensures 99.9% uptime with automatic backups and enterprise-grade security."
  },
  {
    icon: Clock,
    title: "Real-Time Analytics",
    description: "Make informed decisions with live sales data, inventory insights, and customer behavior analytics. Track performance across all locations instantly."
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    description: "Protect your business and customers with PCI DSS compliance, end-to-end encryption, and multi-factor authentication built into every transaction."
  },
  {
    icon: Code,
    title: "Seamless Integration",
    description: "Connect with your favorite business tools. Integrate with accounting software, e-commerce platforms, payment processors, and more."
  },
  {
    icon: Headset,
    title: "24/7 Expert Support",
    description: "Never face issues alone. Our dedicated support team is available round-the-clock to help you succeed with live chat, phone, and email support."
  },
  {
    icon: Box,
    title: "Unlimited Scalability",
    description: "Start small and grow. Our platform scales effortlessly from a single store to hundreds, without performance degradation or complexity."
  }
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-[var(--bg-deep)] relative overflow-hidden isolate">
      {/* Background stars/dots effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container-xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="heading-lg text-white mb-4">Enterprise-Grade Features</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-sky-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="group bg-[#151e2e]/80 backdrop-blur-sm border border-slate-700/50 hover:border-sky-500/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-sky-500/10 flex items-center justify-center mb-6 text-sky-400 group-hover:text-sky-300 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all duration-300">
                <feature.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-heading">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
