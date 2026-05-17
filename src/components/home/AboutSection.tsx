"use client";

import { motion } from "framer-motion";
import { Trophy, Target, Zap, Globe } from "lucide-react";

export default function AboutSection({ 
  globalUsers = "5,000+", 
  localUsers = "1,500+" 
}: { 
  globalUsers?: string; 
  localUsers?: string; 
}) {
  return (
    <section className="py-24 relative overflow-hidden isolate bg-[#0a0f1a]">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      
      <div className="container-xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6"
          >
            <Trophy size={16} /> AWARD-WINNING | SINCE 2020
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg text-white mb-6"
          >
            Sri Lanka&apos;s Leading Retail Software Specialists
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Delivering award-winning, custom-built solutions that bridge the gap between expensive foreign software and the unique needs of the Sri Lankan market.
          </motion.p>
        </div>

        {/* Middle Section: Text + Stats Card */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-slate-300"
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-heading">
              Who We Are
            </h3>
            <p className="leading-relaxed">
              <strong className="text-white">POS from Lapcircuit</strong> is a premier information technology provider dedicated to high-performance retail software and hardware solutions tailored for Sri Lankan businesses.
            </p>
            <p className="leading-relaxed">
              Since 2020, we&apos;ve been dedicated to revolutionizing Sri Lankan retail with our modern POS systems. Our innovation has set us apart as the leading retail software provider in the country. We&apos;re big enough to scale with enterprise growth, yet nimble enough to move fast and adapt to your specific needs.
            </p>
            <p className="leading-relaxed">
              By combining technical proficiency with innovative business expertise, we&apos;ve grown from a local vision into a trusted partner serving businesses across the region.
            </p>
          </motion.div>

          {/* Right Stats Card (Glassmorphism) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Premium animated border glow */}
            <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/60 via-cyan-500/30 to-blue-500/20 rounded-3xl opacity-60 group-hover:opacity-100 transition duration-500 blur-xl"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/40 to-cyan-500/30 rounded-3xl opacity-40 group-hover:opacity-80 transition duration-500 blur"></div>
            
            <div className="relative bg-gradient-to-br from-[#111827]/95 via-[#0f1419]/90 to-[#0a0f1a]/95 backdrop-blur-xl border border-white/15 p-12 rounded-3xl h-full flex flex-col justify-center space-y-12 shadow-[0_20px_60px_rgba(14,165,233,0.1), inset_0_1px_1px_rgba(255,255,255,0.1)]">
              {/* Inner light reflection */}
              <div 
                className="absolute top-0 left-0 w-96 h-64 bg-gradient-to-br from-white/15 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{ pointerEvents: "none" }}
              />

              {/* Section 1 */}
              <div className="text-center border-b border-white/10 pb-12 relative z-10">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500/30 to-cyan-500/20 text-transparent bg-clip-text text-blue-400 rounded-full flex items-center justify-center mb-6 border border-blue-500/30 shadow-[0_0_20px_rgba(14,165,233,0.2)]">
                  <Trophy size={40} style={{ color: "#0EA5E9" }} />
                </div>
                <h4 className="text-white font-bold text-xl mb-2 font-heading">Award-Winning Innovation</h4>
                <p className="text-slate-400 text-sm">Sri Lanka&apos;s 1st AI-Integrated POS System</p>
              </div>
              
              {/* Section 2 */}
              <div className="text-center border-b border-white/10 pb-12 relative z-10">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mb-3 font-heading drop-shadow-lg">
                  {globalUsers}
                </div>
                <h4 className="text-white font-bold text-lg mb-1">Active Users Globally</h4>
                <p className="text-slate-400 text-sm">Across nine countries worldwide</p>
              </div>

              {/* Section 3 */}
              <div className="text-center relative z-10">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-3 font-heading drop-shadow-lg">
                  {localUsers}
                </div>
                <h4 className="text-white font-bold text-lg mb-1">Sri Lankan Active Users</h4>
                <p className="text-slate-400 text-sm">Growing local user community</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom 3 Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              color: "text-rose-400",
              bg: "bg-gradient-to-br from-rose-400/20 to-rose-400/5",
              title: "Our Mission",
              desc: "Empower Sri Lankan retailers with world-class software solutions that drive growth, efficiency, and innovation.",
              gradient: "from-rose-400 to-rose-500"
            },
            {
              icon: Zap,
              color: "text-blue-400",
              bg: "bg-gradient-to-br from-blue-400/20 to-blue-400/5",
              title: "Why Choose Us",
              desc: "Custom-built solutions designed specifically for your business, with unmatched local support and global standards.",
              gradient: "from-blue-400 to-cyan-400"
            },
            {
              icon: Globe,
              color: "text-cyan-400",
              bg: "bg-gradient-to-br from-cyan-400/20 to-cyan-400/5",
              title: "Global Partner",
              desc: "From local roots to international reach, serving businesses from Sri Lanka to South Asia and beyond.",
              gradient: "from-cyan-400 to-blue-400"
            }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative"
            >
              {/* Background glow on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2), transparent 60%)`,
                  filter: "blur(20px)",
                }}
              />

              {/* Card */}
              <div 
                className="relative backdrop-blur-md border rounded-2xl p-8 text-center transition-all duration-300 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${card.bg.includes("rose") ? "rgba(225, 29, 72, 0.05)" : card.bg.includes("blue") ? "rgba(59, 130, 246, 0.05)" : "rgba(34, 197, 238, 0.05)"} 0%, rgba(255, 255, 255, 0.03) 100%)`,
                  border: "1.5px solid",
                  borderColor: `rgba(${card.bg.includes("rose") ? "225, 29, 72" : card.bg.includes("blue") ? "59, 130, 246" : "34, 197, 238"}, 0.2)`,
                  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `rgba(${card.bg.includes("rose") ? "225, 29, 72" : card.bg.includes("blue") ? "59, 130, 246" : "34, 197, 238"}, 0.4)`;
                  el.style.boxShadow = `0 15px 40px rgba(59, 130, 246, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.15)`;
                  el.style.transform = "translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `rgba(${card.bg.includes("rose") ? "225, 29, 72" : card.bg.includes("blue") ? "59, 130, 246" : "34, 197, 238"}, 0.2)`;
                  el.style.boxShadow = `0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)`;
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Icon */}
                <div 
                  className={`w-16 h-16 mx-auto ${card.bg} ${card.color} rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-125 border`}
                  style={{
                    borderColor: `rgba(${card.bg.includes("rose") ? "225, 29, 72" : card.bg.includes("blue") ? "59, 130, 246" : "34, 197, 238"}, 0.3)`,
                  }}
                >
                  <card.icon size={28} />
                </div>

                {/* Title & Desc */}
                <h4 className="text-white font-bold text-lg mb-3 font-heading">{card.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{card.desc}</p>

                {/* Bottom accent */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{
                    backgroundImage: `linear-gradient(to right, transparent, rgba(${card.bg.includes("rose") ? "225, 29, 72" : card.bg.includes("blue") ? "59, 130, 246" : "34, 197, 238"}, 1), transparent)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
