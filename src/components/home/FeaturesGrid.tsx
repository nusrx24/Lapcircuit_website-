"use client";

import { Layers, Clock, Lock, Code, Headset, Box } from "lucide-react";
import { useState, useEffect } from "react";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Premium animations setup
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes featureFadeIn {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes iconFloat {
        0%, 100% { transform: translateY(0px) rotateZ(-2deg); }
        50% { transform: translateY(-8px) rotateZ(2deg); }
      }

      @keyframes borderGlow {
        0%, 100% { 
          box-shadow: inset 0 0 20px rgba(14, 165, 233, 0);
        }
        50% { 
          box-shadow: inset 0 0 20px rgba(14, 165, 233, 0.1);
        }
      }

      .feature-card {
        animation: featureFadeIn 0.6s ease-out forwards;
      }

      .feature-icon-float {
        animation: iconFloat 3.5s ease-in-out infinite;
      }

      .feature-border-glow {
        animation: borderGlow 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="features" className="py-24 bg-[var(--bg-deep)] relative overflow-hidden isolate">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Multiple gradient orbs */}
        <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full blur-3xl opacity-15" 
          style={{ background: "radial-gradient(circle, #0EA5E9 0%, transparent 70%)" }}
        />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)" }}
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="container-xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="heading-lg text-white mb-6">Enterprise-Grade Features</h2>
          <div className="flex justify-center gap-2">
            <div className="w-16 h-1.5 bg-gradient-to-r from-sky-500 to-transparent rounded-full"></div>
            <div className="w-16 h-1.5 bg-gradient-to-r from-cyan-500 to-transparent rounded-full"></div>
          </div>
          <p className="text-slate-300 mt-6 text-lg">Powerful tools designed for modern businesses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="feature-card feature-border-glow group relative"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Multi-layer background glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at 30% 30%, rgba(14, 165, 233, 0.2), transparent 60%)",
                  filter: "blur(20px)",
                  pointerEvents: "none",
                }}
              />

              {/* Main Card Container */}
              <div 
                className="relative h-full bg-gradient-to-br backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ease-out flex flex-col items-center text-center overflow-hidden"
                style={{
                  background: hoveredIndex === i
                    ? "linear-gradient(135deg, rgba(21, 30, 46, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)"
                    : "linear-gradient(135deg, rgba(21, 30, 46, 0.6) 0%, rgba(15, 23, 42, 0.7) 100%)",
                  borderColor: hoveredIndex === i 
                    ? "rgba(14, 165, 233, 0.6)"
                    : "rgba(14, 165, 233, 0.2)",
                  boxShadow: hoveredIndex === i
                    ? "0 20px 50px rgba(14, 165, 233, 0.15), 0 0 40px rgba(14, 165, 233, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.1)"
                    : "0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
                  transform: hoveredIndex === i 
                    ? "translateY(-12px) scale(1.02)"
                    : "translateY(0) scale(1)",
                  willChange: "transform, box-shadow, border-color",
                }}
              >
                {/* Inner light reflection */}
                <div 
                  className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ pointerEvents: "none" }}
                />

                {/* Icon Container */}
                <div 
                  className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 border ${hoveredIndex === i ? 'feature-icon-float' : ''}`}
                  style={{
                    background: hoveredIndex === i
                      ? "linear-gradient(135deg, rgba(14, 165, 233, 0.3) 0%, rgba(6, 182, 212, 0.2) 100%)"
                      : "linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)",
                    color: hoveredIndex === i ? "#06B6D4" : "#0EA5E9",
                    boxShadow: hoveredIndex === i
                      ? "0 8px 24px rgba(14, 165, 233, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2)"
                      : "0 4px 12px rgba(14, 165, 233, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
                    borderColor: hoveredIndex === i ? "rgba(14, 165, 233, 0.5)" : "rgba(14, 165, 233, 0.2)",
                  }}
                >
                  <feature.icon 
                    size={32} 
                    strokeWidth={1.5}
                    style={{
                      transition: "transform 0.3s ease-out",
                      transform: hoveredIndex === i ? "scale(1.2)" : "scale(1)",
                    }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 font-heading transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed text-[15px] transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Bottom accent line on hover */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
