import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Monitor, Laptop, Star, Trophy, Target, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative selection:bg-blue-500/30">
      <Header />

      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 bg-[var(--bg-deep)] overflow-hidden isolate">
        <div className="glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        <div className="container-xl relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="heading-xl text-white mb-8">
            Sri Lanka&apos;s Trusted <br className="hidden md:block" />
            <span className="text-gradient">POS &amp; Laptop Partner</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            We supply, install, and maintain enterprise-grade POS systems and high-performance laptops for retail, restaurants, and corporate offices — backed by our <span className="text-white font-medium">lifetime maintenance guarantee</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link href="/contact" className="btn-primary !px-8 !py-4 !text-lg">
              Get Free Demo <ArrowRight size={20} />
            </Link>
            <a href="https://wa.me/94773457424" target="_blank" rel="noopener noreferrer" className="btn-whatsapp !px-8 !py-4 !text-lg">
              WhatsApp Us
            </a>
          </div>

          <p className="text-sm font-medium text-slate-400 tracking-wide flex items-center justify-center gap-3">
            <CheckCircle2 size={16} className="text-green-500" /> Island-wide coverage
            <span className="text-slate-600 px-2">•</span>
            <CheckCircle2 size={16} className="text-green-500" /> No hidden fees
            <span className="text-slate-600 px-2">•</span>
            <CheckCircle2 size={16} className="text-green-500" /> 24/7 Support
          </p>
        </div>
      </section>

      {/* ── SECTION 2: STATISTICS ROW ── */}
      <section className="-mt-12 relative z-20 pb-24">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="stat-card">
              <div className="text-4xl md:text-5xl font-bold mb-2 font-heading text-gradient">500+</div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Businesses Served</p>
            </div>
            <div className="stat-card">
              <div className="text-4xl md:text-5xl font-bold mb-2 font-heading text-gradient">1200+</div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Laptops Sold</p>
            </div>
            <div className="stat-card">
              <div className="text-4xl md:text-5xl font-bold mb-2 font-heading text-gradient">750+</div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">POS Installed</p>
            </div>
            <div className="stat-card">
              <div className="text-4xl md:text-5xl font-bold mb-2 font-heading text-gradient">99%</div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SERVICES ── */}
      <section className="pb-32 relative z-10">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4 text-slate-900">Our Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto group/grid">
            <div className="card p-10 flex flex-col items-start relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-500 group-hover:bg-blue-500/10"></div>
              
              <div className="icon-box mb-8 relative z-10">
                <Monitor size={24} />
              </div>
              <h3 className="heading-md mb-4 relative z-10">POS Implementations</h3>
              <p className="text-body mb-8 relative z-10">
                End-to-end point of sale setups for supermarkets, pharmacies, and restaurants. 
                We handle the networking, hardware placement, and software configuration.
              </p>
              <ul className="space-y-4 mb-10 text-left w-full relative z-10 flex-grow">
                {['Touchscreen Terminals', 'Thermal Printers & Scanners', 'Cash Drawer Integration'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/services#pos" className="btn-secondary w-full justify-center relative z-10 mt-auto">
                Learn More
              </Link>
            </div>

            <div className="card p-10 flex flex-col items-start relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-500 group-hover:bg-cyan-500/10"></div>
              
              <div className="icon-box mb-8 relative z-10">
                <Laptop size={24} />
              </div>
              <h3 className="heading-md mb-4 relative z-10">Corporate IT & Laptops</h3>
              <p className="text-body mb-8 relative z-10">
                High-performance computing solutions for back-office management, 
                development teams, and mobile executives. Guaranteed reliability.
              </p>
              <ul className="space-y-4 mb-10 text-left w-full relative z-10 flex-grow">
                {['Premium Business Laptops', 'Server Configuration', 'Network Infrastructure'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/services#laptops" className="btn-secondary w-full justify-center relative z-10 mt-auto">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: APPROACH / PROCESS ── */}
      <section className="py-24 bg-white/60 border-y border-slate-200 backdrop-blur-sm">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="heading-lg mb-4 text-slate-900">Our Proven Approach</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
            <div className="hidden md:block absolute top-6 left-12 right-12 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />
            
            {[
              { num: "01", title: "Understand", desc: "We consult with your team to audit current bottlenecks and map out exact hardware requirements." },
              { num: "02", title: "Strategize", desc: "We design a tailored architecture, selecting the right POS bundles or laptops for your budget." },
              { num: "03", title: "Implement", desc: "Our engineers deliver, install, and configure everything on-site, including staff training." },
              { num: "04", title: "Measure", desc: "We monitor uptime and provide 24/7 lifetime preventative support for total peace of mind." }
            ].map((step) => (
              <div key={step.num} className="relative pt-6 group px-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 w-12 h-12 bg-white border-2 border-blue-500 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg -mt-6 shadow-sm transition-transform group-hover:scale-110 group-hover:bg-blue-50">
                  {step.num}
                </div>
                
                <div className="text-center md:text-left mt-10 md:ml-6">
                  <h3 className="heading-md mb-3 text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: TESTIMONIALS ── */}
      <section className="py-32">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4 text-slate-900">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                id: "1",
                client_name: "Ruwan Wijesinghe",
                business_name: "FreshMart Supermarkets",
                location: "Colombo",
                review: "LapCircuit completely overhauled our 5-branch network. The POS systems are incredibly fast, and their lifetime support promise is real. They answer the phone at 2 AM.",
                rating: 5,
              },
              {
                id: "2",
                client_name: "Sarah Fernando",
                business_name: "Cafe Colombo",
                location: "Kandy",
                review: "As a small cafe owner, I was intimidated by complex systems. The LapCircuit team set everything up, trained my staff in one day, and the touchscreens work flawlessly.",
                rating: 5,
              },
              {
                id: "3",
                client_name: "Dinesh Kumar",
                business_name: "MediCare Pharmacy",
                location: "Galle",
                review: "We purchased 10 business laptops for our back office along with our front-desk POS. Excellent hardware quality and unbeatable pricing. Highly recommended.",
                rating: 5,
              }
            ].map((testimonial) => (
              <div key={testimonial.id} className="review-card group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[var(--star-gold)]">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <span className="badge-verified"><CheckCircle2 size={12} /> Verified</span>
                </div>
                
                <p className="text-slate-700 italic flex-grow text-[15px] leading-relaxed font-medium mb-6">
                  &quot;{testimonial.review}&quot;
                </p>
                
                <div className="mt-auto pt-5 border-t border-slate-200 flex flex-col gap-1">
                  <p className="font-bold text-slate-900 text-sm">{testimonial.client_name}</p>
                  <p className="text-xs font-semibold text-slate-500 tracking-wide uppercase">{testimonial.business_name}</p>
                  <p className="text-xs font-medium text-slate-400">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/testimonials" className="btn-secondary bg-white inline-flex">
              View All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CALL TO ACTION ── */}
      <section className="py-24 bg-slate-100 border-t border-slate-200">
        <div className="container-xl text-center max-w-3xl mx-auto">
          <h2 className="heading-lg text-slate-900 mb-4">
            Ready to upgrade your business?
          </h2>
          <p className="text-slate-600 text-lg mb-10 font-medium">
            Get a free consultation — no commitment, no hidden charges.
          </p>
          <div className="flex justify-center">
             <Link href="/contact" className="btn-primary !px-10 !py-4 !text-lg">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FOOTER ── */}
      <Footer />
    </main>
  );
}
