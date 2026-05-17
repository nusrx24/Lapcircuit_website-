import { safeFetch, supabase } from "@/lib/supabase";
import { Metadata } from "next";
import { Star, CheckCircle2, Shield, Settings, Wrench, Clock, Users, Laptop, Briefcase, Quote } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomerHandover from "@/components/home/CustomerHandover";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Success Stories | LapCircuit",
  description: "See what our clients say about LapCircuit's POS and laptop services along with project handover photos.",
};

const mockTestimonials = [
  {
    id: "1",
    client_name: "Ruwan Wijesinghe",
    business_name: "FreshMart Supermarkets",
    location: "Colombo",
    review: "LapCircuit completely overhauled our 5-branch network. The POS systems are incredibly fast, and their lifetime support promise is real. They answer the phone at 2 AM. Highly recommend their services to any expanding retail business.",
    rating: 5,
    project_type: "Supermarket POS Network",
    image_url: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=800&auto=format&fit=crop",
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
    review: "We purchased 10 business laptops for our back office along with our front-desk POS. Excellent hardware quality and unbeatable pricing.",
    rating: 5,
    project_type: "Corporate Laptops",
    image_url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    client_name: "Amila Perera",
    business_name: "Perera & Sons",
    location: "Negombo",
    review: "The lifetime maintenance guarantee gives us immense peace of mind. Whenever there is a minor glitch, their remote support fixes it in minutes.",
    rating: 5,
  },
  {
    id: "5",
    client_name: "Nadeeka Silva",
    business_name: "Style Boutique",
    location: "Kurunegala",
    review: "We upgraded our old cash registers to their modern POS systems. The inventory management integration saved us hours of manual work every week.",
    rating: 4,
  },
  {
    id: "6",
    client_name: "Mohammed Fazil",
    business_name: "Fazil Hardware",
    location: "Trincomalee",
    review: "Superb hardware quality. The laptops we bought for our accounting team are fast and reliable. The customer service from LapCircuit is exceptional.",
    rating: 5,
  }
];

export default async function TestimonialsPage() {
  const testimonials = await safeFetch(
    supabase.from("testimonials").select("*").eq('is_approved', true).order("created_at", { ascending: false }),
    mockTestimonials
  );

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-secondary)]">
      <Header />
      
      {/* ── Header Area with Dark Slate bg for contrast ── */}
      <div className="pt-40 pb-24 bg-[var(--bg-deep)] relative overflow-hidden isolate">
        <div className="glow-bg top-0 left-1/2 -translate-x-1/2 opacity-50"></div>
        <div className="container-xl relative z-10 text-center max-w-4xl mx-auto">
          <span className="section-label-dark">Success Stories</span>
          <h1 className="heading-xl text-white mb-6">Customer Handovers & Reviews</h1>
          <p className="text-slate-300 text-lg md:text-xl font-medium">
            Don&apos;t just take our word for it. See real-world projects we have completed
            and hear what our partners have to say about our hardware and lifetime support across Sri Lanka.
          </p>
        </div>
      </div>

      <div className="-mt-12 pb-24 relative z-20">
        <div className="container-xl">

          {/* Customer Handover Process */}
          <div className="mb-24">
            <CustomerHandover />
          </div>

          <div className="text-center mb-16 relative z-10">
            <span className="section-label">Real Projects</span>
            <h2 className="heading-lg">Recent Success Stories</h2>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-24">
            <div className="stat-card">
              <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">
                <span className="text-gradient">4.9</span><span className="text-blue-500 text-3xl ml-1">★</span>
              </div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Average Rating</p>
            </div>
            <div className="stat-card">
              <div className="text-4xl md:text-5xl font-bold mb-2 font-heading text-gradient">156+</div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Verified Reviews</p>
            </div>
            <div className="stat-card">
              <div className="text-4xl md:text-5xl font-bold mb-2 font-heading text-gradient">2000+</div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Happy Customers</p>
            </div>
            <div className="stat-card">
              <div className="text-4xl md:text-5xl font-bold mb-2 font-heading text-gradient">25</div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Districts Covered</p>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto mb-32">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="review-card group overflow-hidden flex flex-col p-0">
                {/* Image Section */}
                {testimonial.image_url ? (
                  <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
                    <Image 
                      src={testimonial.image_url} 
                      alt={`${testimonial.client_name} - ${testimonial.business_name} Handover`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {testimonial.project_type && (
                      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10 shadow-xl">
                        <Briefcase size={12} />
                        {testimonial.project_type}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="relative w-full h-32 bg-gradient-to-br from-sky-50 to-blue-50/50 flex flex-col p-6 items-start justify-center border-b border-sky-100/50">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center -mb-6 z-10 border border-slate-100">
                      <Quote size={20} className="text-sky-500" />
                    </div>
                  </div>
                )}

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="stars flex gap-0.5 transition-transform group-hover:scale-105">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill={i < (testimonial.rating || 5) ? "currentColor" : "none"} 
                          className={i < (testimonial.rating || 5) ? "text-blue-500" : "text-slate-200"}
                        />
                      ))}
                    </div>
                    <span className="badge-verified"><CheckCircle2 size={14} /> Verified</span>
                  </div>
                  
                  <p className="text-slate-700 leading-relaxed text-[15px] font-medium flex-grow mb-6 isolate relative">
                    <span className="hidden opacity-0">&quot;</span>{testimonial.review}<span className="hidden opacity-0">&quot;</span>
                  </p>
                  
                  <div className="border-t border-slate-100 pt-5 mt-auto flex items-center gap-4">
                    {!testimonial.image_url && (
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold font-heading text-lg flex-shrink-0">
                        {testimonial.client_name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-blue-600 transition-colors">{testimonial.client_name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{testimonial.business_name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Businesses Trust Us */}
          <div className="max-w-[1400px] mx-auto bg-white rounded-3xl p-10 md:p-16 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="text-center mb-16 relative z-10">
              <span className="section-label">Our Guarantee</span>
              <h2 className="heading-lg">Why Businesses Trust Us</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
              {[
                { icon: Shield, title: "Lifetime Maintenance", desc: "We provide ongoing support for the entire lifespan of your POS hardware." },
                { icon: Wrench, title: "Free Installation", desc: "Our team handles the complete setup and networking at no extra cost." },
                { icon: Clock, title: "24/7 Remote Support", desc: "Technical issues don't sleep, and neither does our dedicated support team." },
                { icon: Users, title: "Staff Training", desc: "We ensure your team is fully comfortable with the system before we leave." },
                { icon: Laptop, title: "Premium Hardware", desc: "We only supply tested, enterprise-grade laptops and POS terminals." },
                { icon: Settings, title: "Custom Configuration", desc: "Systems pre-loaded with your inventory and tailored to your workflow." }
              ].map((feature, idx) => (
                <div key={idx} className="flex flex-col items-start group">
                  <div className="icon-box mb-6">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-[1.125rem] text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
