"use client";

import { motion } from "framer-motion";
import { MessageSquare, Package, Wrench, Users, Shield } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Consultation & Assessment",
    description: "We analyze your business needs, evaluating current bottlenecks and specific hardware requirements.",
    icon: MessageSquare,
  },
  {
    id: "02",
    title: "Custom Hardware Selection",
    description: "We source and customize the optimal POS systems and laptops that fit your operational budget.",
    icon: Package,
  },
  {
    id: "03",
    title: "Installation & Configuration",
    description: "Our experts handle the complete physical setup and software configuration on-site.",
    icon: Wrench,
  },
  {
    id: "04",
    title: "Staff Training",
    description: "We provide comprehensive training to ensure your team is confident with the new system.",
    icon: Users,
  },
  {
    id: "05",
    title: "Lifetime Maintenance",
    description: "Full handover with our guarantee of 24/7 lifetime preventative support and maintenance.",
    icon: Shield,
  },
];

export default function CustomerHandover() {
  return (
    <section className="py-24 bg-white/60 border-y border-slate-200 backdrop-blur-sm relative z-10 overflow-hidden">
      <div className="container-xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="heading-lg mb-4 text-slate-900">Customer Handover Process</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 font-medium text-lg">
            How we deliver our systems to you, step by step.
          </p>
        </motion.div>

        <div className="relative max-w-[1400px] mx-auto">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[4rem] left-[10%] right-[10%] h-[2px] bg-slate-200" />
          
          <motion.div 
            className="hidden lg:block absolute top-[4rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group h-full"
              >
                <div className="flex flex-col items-center text-center bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 relative z-10 h-full">
                  
                  {/* Icon Circle */}
                  <div className="w-20 h-20 shrink-0 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 shadow-sm mb-6 relative group-hover:border-blue-500 group-hover:text-blue-500 transition-colors duration-300">
                    <step.icon size={32} />
                    
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {step.id}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="heading-md mb-3 text-slate-900 text-[1.1rem]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
