"use client";

import { Globe, Shield, Headphones } from "lucide-react";
import { useState, useEffect } from "react";

interface TrustBadge {
  icon: React.ReactNode;
  label: string;
  number: string;
}

const badges: TrustBadge[] = [
  {
    icon: <Globe size={40} />,
    label: "Island-wide coverage",
    number: "01"
  },
  {
    icon: <Shield size={40} />,
    label: "No hidden fees",
    number: "02"
  },
  {
    icon: <Headphones size={40} />,
    label: "24/7 Support",
    number: "03"
  }
];

export default function TrustBadges() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  // Add keyframe styles dynamically
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes slideInBounce {
        0% {
          opacity: 0;
          transform: translateY(40px);
        }
        60% {
          opacity: 1;
          transform: translateY(-8px);
        }
        80% {
          transform: translateY(2px);
        }
        100% {
          transform: translateY(0);
        }
      }

      @keyframes float1 {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }

      @keyframes float2 {
        0%, 100% { transform: translateY(-3px); }
        50% { transform: translateY(-11px); }
      }

      @keyframes float3 {
        0%, 100% { transform: translateY(-5px); }
        50% { transform: translateY(-13px); }
      }

      @keyframes globeSpin {
        0% { transform: rotateY(0deg) scale(1); }
        50% { transform: rotateY(180deg) scale(1.05); }
        100% { transform: rotateY(360deg) scale(1); }
      }

      @keyframes shieldShine {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.2) drop-shadow(0 0 8px rgba(14, 165, 233, 0.6)); }
      }

      @keyframes headsetVibrate {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-2px); }
        75% { transform: translateX(2px); }
      }

      @keyframes borderGlow {
        0%, 100% {
          box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.4), 0 10px 30px rgba(14, 165, 233, 0.15);
        }
        50% {
          box-shadow: 0 0 20px 8px rgba(14, 165, 233, 0.1), 0 10px 40px rgba(14, 165, 233, 0.25);
        }
      }

      @keyframes ripple {
        0% {
          box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.7);
        }
        70% {
          box-shadow: 0 0 0 10px rgba(14, 165, 233, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(14, 165, 233, 0);
        }
      }

      .trust-badge {
        animation: slideInBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .trust-badge.float1 {
        animation: float1 3s ease-in-out infinite;
      }

      .trust-badge.float2 {
        animation: float2 3.5s ease-in-out infinite;
      }

      .trust-badge.float3 {
        animation: float3 4s ease-in-out infinite;
      }

      .globe-icon {
        perspective: 1000px;
      }

      .globe-icon.spinning {
        animation: globeSpin 0.8s ease-in-out;
      }

      .shield-icon.shining {
        animation: shieldShine 0.8s ease-in-out;
      }

      .headset-icon.vibrating {
        animation: headsetVibrate 0.4s ease-in-out;
      }

      .badge-glow {
        animation: borderGlow 2s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const getFloatClass = (index: number) => {
    switch(index) {
      case 0: return 'float1';
      case 1: return 'float2';
      case 2: return 'float3';
      default: return '';
    }
  };

  const getIconAnimation = (index: number) => {
    switch(index) {
      case 0: return hoveredIndex === 0 ? 'spinning' : '';
      case 1: return hoveredIndex === 1 ? 'shining' : '';
      case 2: return hoveredIndex === 2 ? 'vibrating' : '';
      default: return '';
    }
  };

  const getIconClass = (index: number) => {
    switch(index) {
      case 0: return 'globe-icon';
      case 1: return 'shield-icon';
      case 2: return 'headset-icon';
      default: return '';
    }
  };

  return (
    <div id="trust-badges" className="w-full py-16">
      <div className="container-xl">
        {/* Divider */}
        <div className="flex items-center gap-4 mb-12 max-w-6xl mx-auto">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #0EA5E9, transparent)' }}></div>
          <span 
            className="text-sm font-semibold whitespace-nowrap tracking-wide"
            style={{ color: '#0EA5E9' }}
          >
            TRUSTED BY 2000+ BUSINESSES
          </span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #0EA5E9, transparent)' }}></div>
        </div>

        {/* Desktop & Tablet Layout */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`trust-badge ${getFloatClass(index)} ${
                isVisible ? 'opacity-100' : 'opacity-0'
              } relative group`}
              style={{
                opacity: isVisible ? 1 : 0,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 70%)',
                  zIndex: 0
                }}
              ></div>

              {/* Card */}
              <div
                className={`relative z-10 p-8 rounded-2xl backdrop-blur-md transition-all duration-300 cursor-default ${
                  hoveredIndex === index ? 'scale-105' : 'scale-100'
                } ${hoveredIndex === index ? 'badge-glow' : ''}`}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(224, 242, 254, 0.4) 100%)',
                  border: `2px solid`,
                  borderImage: hoveredIndex === index 
                    ? 'linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%) 1'
                    : 'linear-gradient(135deg, #0EA5E9 0%, #0EA5E9 100%) 1',
                  boxShadow: hoveredIndex === index
                    ? '0 20px 40px rgba(14, 165, 233, 0.25)'
                    : '0 10px 30px rgba(14, 165, 233, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Number badge */}
                <div
                  className="absolute top-4 right-4 text-xs font-black opacity-20"
                  style={{ color: '#0EA5E9', fontSize: '24px' }}
                >
                  {badge.number}
                </div>

                {/* Icon */}
                <div 
                  className={`${getIconClass(index)} ${getIconAnimation(index)} mb-6 flex justify-center`}
                >
                  <div
                    className="p-4 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: hoveredIndex === index ? '#0EA5E9' : '#0EA5E9',
                      color: 'white',
                      filter: hoveredIndex === index ? 'drop-shadow(0 0 12px rgba(14, 165, 233, 0.6))' : 'drop-shadow(0 0 0px rgba(14, 165, 233, 0))',
                    }}
                  >
                    {badge.icon}
                  </div>
                </div>

                {/* Text */}
                <h3 
                  className="text-center font-heading font-bold text-lg transition-colors duration-300"
                  style={{ 
                    color: hoveredIndex === index ? '#0EA5E9' : '#1F2937',
                  }}
                >
                  {badge.label}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden space-y-4 max-w-md mx-auto">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`trust-badge ${getFloatClass(index)} ${
                isVisible ? 'opacity-100' : 'opacity-0'
              } relative group`}
              style={{
                opacity: isVisible ? 1 : 0,
              }}
              onTouchStart={() => setHoveredIndex(index)}
              onTouchEnd={() => setHoveredIndex(null)}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 rounded-xl blur-2xl opacity-0 group-active:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 70%)',
                  zIndex: 0
                }}
              ></div>

              {/* Card */}
              <div
                className="relative z-10 p-6 rounded-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(224, 242, 254, 0.4) 100%)',
                  border: '2px solid #0EA5E9',
                  boxShadow: '0 10px 30px rgba(14, 165, 233, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Number badge */}
                <div
                  className="absolute top-3 right-3 text-xs font-black opacity-20"
                  style={{ color: '#0EA5E9', fontSize: '20px' }}
                >
                  {badge.number}
                </div>

                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div
                    className="p-3 rounded-full"
                    style={{
                      backgroundColor: '#0EA5E9',
                      color: 'white',
                    }}
                  >
                    {badge.icon}
                  </div>
                </div>

                {/* Text */}
                <h3 
                  className="text-center font-heading font-bold text-base"
                  style={{ color: '#1F2937' }}
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
