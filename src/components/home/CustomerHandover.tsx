"use client";

import { motion } from "framer-motion";
import { MessageSquare, Package, Wrench, Users, Shield } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Premium animations setup
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes stepFadeIn {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes numberPulse {
        0%, 100% { 
          box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.4);
        }
        50% { 
          box-shadow: 0 0 0 8px rgba(14, 165, 233, 0);
        }
      }

      .step-animate {
        animation: stepFadeIn 0.6s ease-out forwards;
      }

      .number-pulse {
        animation: numberPulse 2s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15" 
          style={{ background: "radial-gradient(circle, #0EA5E9 0%, transparent 70%)" }}
        />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)" }}
        />
        
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
        
        {/* Glass effect background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/80 backdrop-blur-2xl" />
      </div>

      <div className="container-xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="heading-lg mb-4 text-slate-900">Customer Handover Process</h2>
          <div className="flex justify-center gap-2">
            <div className="w-16 h-1.5 bg-gradient-to-r from-sky-500 to-transparent rounded-full"></div>
            <div className="w-16 h-1.5 bg-gradient-to-r from-cyan-500 to-transparent rounded-full"></div>
          </div>
          <p className="mt-6 text-slate-600 font-medium text-lg">
            How we deliver our systems to you, step by step.
          </p>
        </motion.div>

        <div className="relative max-w-[1400px] mx-auto">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[5.5rem] left-[6%] right-[6%] h-[1px] bg-slate-200" />
          
          <motion.div 
            className="hidden lg:block absolute top-[5.5rem] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500 origin-left"
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
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="step-animate relative group h-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, rgba(14, 165, 233, 0.15), transparent 60%)",
                    filter: "blur(20px)",
                    pointerEvents: "none",
                  }}
                />

                <div 
                  className="relative flex flex-col items-center text-center p-8 rounded-2xl border transition-all duration-300 relative z-10 h-full overflow-hidden group"
                  style={{
                    background: hoveredIndex === index
                      ? "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.9) 100%)"
                      : "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 252, 255, 0.85) 100%)",
                    borderColor: hoveredIndex === index 
                      ? "rgba(14, 165, 233, 0.4)"
                      : "rgba(14, 165, 233, 0.15)",
                    boxShadow: hoveredIndex === index
                      ? "0 15px 40px rgba(14, 165, 233, 0.15), 0 0 30px rgba(14, 165, 233, 0.08)"
                      : "0 8px 24px rgba(0, 0, 0, 0.06), 0 0 20px rgba(14, 165, 233, 0.05)",
                    transform: hoveredIndex === index ? "translateY(-8px)" : "translateY(0)",
                  }}
                >
                  {/* Inner light reflection */}
                  <div 
                    className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ pointerEvents: "none" }}
                  />
                  
                  {/* Icon Circle */}
                  <div 
                    className={`w-20 h-20 shrink-0 flex items-center justify-center mb-6 relative transition-all duration-300 border-2`}
                    style={{
                      borderRadius: "50%",
                      background: hoveredIndex === index
                        ? "linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(6, 182, 212, 0.15) 100%)"
                        : "linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)",
                      borderColor: hoveredIndex === index ? "rgba(14, 165, 233, 0.5)" : "rgba(14, 165, 233, 0.2)",
                      color: hoveredIndex === index ? "#0EA5E9" : "#64748B",
                      boxShadow: hoveredIndex === index
                        ? "0 8px 20px rgba(14, 165, 233, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.4)"
                        : "0 4px 12px rgba(14, 165, 233, 0.1)",
                      transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    <step.icon 
                      size={32} 
                      style={{
                        transition: "transform 0.3s ease-out",
                        transform: hoveredIndex === index ? "scale(1.15) rotate(5deg)" : "scale(1) rotate(0deg)",
                      }}
                    />
                    
                    {/* Number Badge */}
                    <div 
                      className={`absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white shadow-lg transition-all duration-300 ${hoveredIndex === index ? "number-pulse" : ""}`}
                      style={{
                        background: hoveredIndex === index
                          ? "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)"
                          : "linear-gradient(135deg, #0EA5E9 0%, #0EA5E9 100%)",
                      }}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold mb-3 text-slate-900 text-[1.05rem] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Bottom accent */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
