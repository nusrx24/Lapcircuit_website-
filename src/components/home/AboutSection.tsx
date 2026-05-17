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
            {/* Animated border glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-b from-blue-500/50 to-cyan-500/50 rounded-3xl opacity-50 group-hover:opacity-100 transition duration-500 blur"></div>
            
            <div className="relative bg-[#111827]/80 backdrop-blur-xl border border-white/10 p-10 rounded-3xl h-full flex flex-col justify-center space-y-10">
              
              <div className="text-center border-b border-white/5 pb-8">
                <div className="w-16 h-16 mx-auto bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mb-4">
                  <Trophy size={32} />
                </div>
                <h4 className="text-white font-bold text-lg mb-1">Award-Winning Innovation</h4>
                <p className="text-slate-400 text-sm">Sri Lanka&apos;s 1st AI-Integrated POS System</p>
              </div>
              
              <div className="text-center border-b border-white/5 pb-8">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2 font-heading">
                  {globalUsers}
                </div>
                <h4 className="text-white font-bold mb-1">Active Users Globally</h4>
                <p className="text-slate-400 text-sm">Across nine countries worldwide</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2 font-heading">
                  {localUsers}
                </div>
                <h4 className="text-white font-bold mb-1">Sri Lankan Active Users</h4>
                <p className="text-slate-400 text-sm">Growing local user community</p>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Bottom 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              color: "text-rose-400",
              bg: "bg-rose-400/10",
              title: "Our Mission",
              desc: "Empower Sri Lankan retailers with world-class software solutions that drive growth, efficiency, and innovation."
            },
            {
              icon: Zap,
              color: "text-blue-400",
              bg: "bg-blue-400/10",
              title: "Why Choose Us",
              desc: "Custom-built solutions designed specifically for your business, with unmatched local support and global standards."
            },
            {
              icon: Globe,
              color: "text-blue-400",
              bg: "bg-blue-400/10",
              title: "Global Partner",
              desc: "From local roots to international reach, serving businesses from Sri Lanka to South Asia and beyond."
            }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 text-center group"
            >
              <div className={`w-14 h-14 mx-auto ${card.bg} ${card.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <card.icon size={28} />
              </div>
              <h4 className="text-white font-bold text-lg mb-3">{card.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
