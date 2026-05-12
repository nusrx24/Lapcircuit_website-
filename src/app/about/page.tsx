import { safeFetch, supabase } from "@/lib/supabase";
import { Metadata } from "next";
import { Award, Zap, Shield, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us | LapCircuit",
  description: "Learn about LapCircuit's mission, team, and stats in Sri Lanka.",
};

const mockStats = [
  { id: "1", label: "Businesses Served", value: 500, icon: "Users" },
  { id: "2", label: "POS Installed", value: 750, icon: "Zap" },
  { id: "3", label: "Laptops Sold", value: 1200, icon: "Award" },
  { id: "4", label: "Uptime %", value: 99, icon: "Shield" },
];

const mockTeam = [
  {
    id: "1",
    name: "Nusair",
    role: "Founder & CEO",
    bio: "Tech enthusiast with over 10 years of experience in business IT setups.",
    photo_url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "2",
    name: "Mohammed Tariq",
    role: "Lead Hardware Engineer",
    bio: "Specializes in POS configuration and laptop hardware maintenance.",
    photo_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "3",
    name: "Ayesha Perera",
    role: "Customer Success Manager",
    bio: "Ensures every client receives 24/7 lifetime support.",
    photo_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

const getIcon = (iconName: string) => {
  switch (iconName?.toLowerCase()) {
    case "users": return <Users size={24} />;
    case "award": return <Award size={24} />;
    case "shield": return <Shield size={24} />;
    default: return <Zap size={24} />;
  }
};

export default async function AboutPage() {
  const [stats, team] = await Promise.all([
    safeFetch(supabase.from("stats").select("*").order("created_at"), mockStats),
    safeFetch(supabase.from("team_members").select("*").order("created_at"), mockTeam),
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-secondary)]">
      <Header />
      
      <div className="pt-40 pb-20">
        <div className="container-xl">
          {/* Story Section */}
          <div className="max-w-4xl mx-auto text-center mb-24 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
            
            <span className="section-label">Our Story</span>
            <h1 className="heading-xl mb-8">
              Empowering Sri Lankan businesses with <span className="text-gradient">reliable tech</span>
            </h1>
            <div className="space-y-6 text-body text-lg text-left md:text-center max-w-3xl mx-auto font-medium">
              <p>
                LapCircuit was founded on a simple observation: local businesses struggle with 
                fragmented technical support. You buy a POS system from one vendor, laptops from another, 
                and when something breaks, nobody takes responsibility.
              </p>
              <p>
                We changed that. We provide the complete hardware ecosystem—from the front-desk POS 
                to the back-office laptops—and we back it all up with our signature <span className="font-bold text-slate-900">Lifetime Maintenance Guarantee</span>. 
                When you partner with LapCircuit, you never have to worry about IT downtime again.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 max-w-[1400px] mx-auto">
            {stats.map((stat) => (
              <div key={stat.id} className="stat-card group">
                <div className="icon-box mx-auto mb-6">
                  {getIcon(stat.icon || "zap")}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2 font-heading text-gradient">
                  {stat.value}{stat.label.includes('%') ? '%' : '+'}
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  {stat.label.replace(' %', '')}
                </p>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <div className="max-w-[1400px] mx-auto bg-white rounded-3xl p-10 md:p-16 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="text-center mb-16 relative z-10">
              <span className="section-label">Our People</span>
              <h2 className="heading-lg">Meet the Experts</h2>
              <p className="text-body mt-4 text-lg">The dedicated team keeping your business running.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
              {team.map((member) => (
                <div key={member.id} className="group">
                  <div className="h-80 w-full bg-slate-100 rounded-2xl overflow-hidden mb-6 relative">
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                    <img 
                      src={member.photo_url || "/api/placeholder/400/400"} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="heading-md mb-1">{member.name}</h3>
                    <p className="text-gradient font-bold text-xs uppercase tracking-widest mb-3">{member.role}</p>
                    <p className="text-slate-500 font-medium leading-relaxed text-sm">{member.bio}</p>
                  </div>
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
