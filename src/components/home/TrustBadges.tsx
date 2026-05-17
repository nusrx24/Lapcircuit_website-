"use client";

import { Globe, Shield, Headphones } from "lucide-react";
import { useState, useEffect } from "react";

interface TrustBadge {
  icon: React.ReactNode;
  label: string;
}

const badges: TrustBadge[] = [
  {
    icon: <Globe size={32} />,
    label: "Island-wide coverage",
  },
  {
    icon: <Shield size={32} />,
    label: "No hidden fees",
  },
  {
    icon: <Headphones size={32} />,
    label: "24/7 Support",
  }
];

export default function TrustBadges() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cardPos, setCardPos] = useState<Record<number, { x: number; y: number }>>({
    0: { x: 0, y: 0 },
    1: { x: 0, y: 0 },
    2: { x: 0, y: 0 },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("trust-badges");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Premium keyframe animations
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeSlideIn {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes subtleFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }

      @keyframes shimmerEffect {
        0% {
          background-position: -1000px 0;
        }
        100% {
          background-position: 1000px 0;
        }
      }

      @keyframes iconRotateFloat {
        0% { 
          transform: translateY(0px) rotateZ(0deg) scale(1);
        }
        25% { 
          transform: translateY(-5px) rotateZ(5deg) scale(1.05);
        }
        50% { 
          transform: translateY(-8px) rotateZ(0deg) scale(1.08);
        }
        75% { 
          transform: translateY(-5px) rotateZ(-5deg) scale(1.05);
        }
        100% { 
          transform: translateY(0px) rotateZ(0deg) scale(1);
        }
      }

      @keyframes iconPulse {
        0%, 100% { 
          box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.6), inset 0 0 15px rgba(6, 182, 212, 0.3);
        }
        50% { 
          box-shadow: 0 0 0 12px rgba(14, 165, 233, 0), inset 0 0 25px rgba(6, 182, 212, 0.5);
        }
      }

      @keyframes borderGlowPremium {
        0%, 100% { 
          border-color: rgba(14, 165, 233, 0.4);
          box-shadow: 
            0 0 20px rgba(14, 165, 233, 0.15), 
            inset 0 0 20px rgba(14, 165, 233, 0.08),
            0 0 40px rgba(6, 182, 212, 0.1);
        }
        50% { 
          border-color: rgba(6, 182, 212, 0.6);
          box-shadow: 
            0 0 35px rgba(14, 165, 233, 0.3), 
            inset 0 0 25px rgba(6, 182, 212, 0.15),
            0 0 60px rgba(6, 182, 212, 0.2);
        }
      }

      @keyframes textGlow {
        0%, 100% { 
          text-shadow: 0 0 0px rgba(224, 242, 254, 0);
        }
        50% { 
          text-shadow: 0 0 8px rgba(224, 242, 254, 0.4), 0 0 16px rgba(14, 165, 233, 0.2);
        }
      }

      .badge-animate {
        animation: fadeSlideIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      .badge-float {
        animation: subtleFloat 5s ease-in-out infinite;
      }

      .badge-glow {
        animation: borderGlowPremium 4s ease-in-out infinite;
      }

      .icon-pulse {
        animation: iconPulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }

      .icon-float {
        animation: iconRotateFloat 4s ease-in-out infinite;
      }

      .text-glow {
        animation: textGlow 4s ease-in-out infinite;
      }

      .badge-shimmer {
        background-image: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.15),
          transparent
        );
        background-size: 200px 100%;
        animation: shimmerEffect 3s infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Magnetic cursor movement on hover
  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (hoveredIndex !== index) return;
    
    const card = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;
    
    const distX = (e.clientX - centerX) * 0.15;
    const distY = (e.clientY - centerY) * 0.15;
    
    setCardPos(prev => ({
      ...prev,
      [index]: { x: distX, y: distY }
    }));
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    setCardPos(prev => ({
      ...prev,
      [index]: { x: 0, y: 0 }
    }));
  };

  return (
    <div id="trust-badges" className="w-full py-16 mb-8">
      <div className="container-xl">
        {/* Premium Background Glow */}
        <div className="absolute inset-0 -z-10 h-96 bg-gradient-to-b from-blue-50/30 via-transparent to-transparent blur-3xl" />
        
        {/* Desktop & Tablet - 3 Columns */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`badge-animate badge-float badge-glow badge-shimmer relative group`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              {/* Multi-layer shadow effect */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at 30% 30%, rgba(14, 165, 233, 0.15), transparent 50%)",
                  filter: "blur(20px)",
                }}
              />

              {/* Premium Card Container */}
              <div
                className="relative p-8 rounded-3xl backdrop-blur-xl transition-all duration-300 ease-out border-2"
                style={{
                  backgroundColor: hoveredIndex === index 
                    ? "rgba(14, 165, 233, 0.12)" 
                    : "rgba(14, 165, 233, 0.06)",
                  borderColor: hoveredIndex === index 
                    ? "rgba(14, 165, 233, 0.5)" 
                    : "rgba(14, 165, 233, 0.25)",
                  background: hoveredIndex === index
                    ? "linear-gradient(135deg, rgba(14, 165, 233, 0.12) 0%, rgba(6, 182, 212, 0.08) 100%)"
                    : "linear-gradient(135deg, rgba(14, 165, 233, 0.06) 0%, rgba(6, 182, 212, 0.04) 100%)",
                  boxShadow: hoveredIndex === index 
                    ? "0 20px 50px rgba(14, 165, 233, 0.25), 0 0 40px rgba(14, 165, 233, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.2)" 
                    : "0 10px 30px rgba(14, 165, 233, 0.1), 0 0 30px rgba(14, 165, 233, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
                  transform: hoveredIndex === index 
                    ? `translateY(-12px) translateX(${cardPos[index]?.x || 0}px) translateZ(0)` 
                    : "translateY(0) translateX(0) translateZ(0)",
                  willChange: "transform, box-shadow",
                }}
              >
                {/* Inner light reflection */}
                <div 
                  className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  style={{
                    pointerEvents: "none",
                  }}
                />

                {/* Icon Container */}
                <div className="mb-6 flex justify-center relative z-10">
                  <div
                    className={`p-4 rounded-full transition-all duration-300 ${hoveredIndex === index ? "icon-float icon-pulse" : ""}`}
                    style={{
                      background: hoveredIndex === index
                        ? "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)"
                        : "linear-gradient(135deg, #0EA5E9 0%, #0EA5E9 100%)",
                      color: "white",
                      transform: hoveredIndex === index ? "scale(1.15)" : "scale(1)",
                      boxShadow: hoveredIndex === index 
                        ? "0 8px 24px rgba(14, 165, 233, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 0 30px rgba(6, 182, 212, 0.3)" 
                        : "0 4px 16px rgba(14, 165, 233, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 0 20px rgba(6, 182, 212, 0.15)",
                    }}
                  >
                    {badge.icon}
                  </div>
                </div>

                {/* Text */}
                <h3 
                  className="text-center font-heading font-semibold text-base lg:text-lg transition-all duration-300 text-glow"
                  style={{ 
                    color: hoveredIndex === index ? "#06B6D4" : "#E0F2FE",
                    letterSpacing: "0.01em",
                  }}
                >
                  {badge.label}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile - Stack */}
        <div className="sm:hidden space-y-4 max-w-sm mx-auto px-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`badge-animate badge-float`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div
                className="flex items-center gap-4 p-6 rounded-2xl transition-all duration-300 backdrop-blur-xl border-2"
                style={{
                  backgroundColor: "rgba(14, 165, 233, 0.06)",
                  borderColor: "rgba(14, 165, 233, 0.25)",
                  background: "linear-gradient(135deg, rgba(14, 165, 233, 0.06) 0%, rgba(6, 182, 212, 0.04) 100%)",
                  boxShadow: "0 10px 30px rgba(14, 165, 233, 0.1), 0 0 30px rgba(14, 165, 233, 0.08)",
                }}
              >
                {/* Icon */}
                <div
                  className="p-3 rounded-full flex-shrink-0 transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)",
                    color: "white",
                    boxShadow: "0 4px 16px rgba(14, 165, 233, 0.25)",
                  }}
                >
                  {badge.icon}
                </div>

                {/* Text */}
                <h3 
                  className="font-heading font-semibold text-base"
                  style={{ color: "#F0F9FF" }}
                >
                  {badge.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
