"use client";

import { useState } from "react";
import { supabase, hasSupabaseKeys } from "@/lib/supabase";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const inquiry = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      business_type: formData.get("business_type") as string,
      service_interest: formData.get("service_interest") as string,
      message: formData.get("message") as string,
    };

    if (!hasSupabaseKeys) {
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      }, 1000);
      return;
    }

    const { error } = await supabase.from("inquiries").insert([inquiry]);

    setIsSubmitting(false);

    if (error) {
      console.error(error);
      setError("Something went wrong. Please try again or reach us via WhatsApp.");
    } else {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-secondary)]">
      <Header />
      
      <div className="pt-40 pb-20">
        <div className="container-xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

            <span className="section-label">Get in Touch</span>
            <h1 className="heading-xl mb-4">
              Let&apos;s build your <span className="text-gradient">business setup</span>
            </h1>
            <p className="text-body text-lg font-medium">
              Whether you need a full POS installation or high-performance laptops,
              our team is ready to help you scale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-[1200px] mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card p-10">
                <h3 className="heading-md mb-10 text-slate-900">
                  Contact Information
                </h3>
                <div className="space-y-10">
                  <a href="tel:+94XXXXXXXXX" className="flex items-start gap-6 text-slate-600 hover:text-blue-600 transition-colors group">
                    <div className="icon-box">
                      <Phone size={22} />
                    </div>
                    <div className="pt-1">
                      <p className="text-xs text-slate-500 mb-1.5 font-bold uppercase tracking-wider">Call Us Directly</p>
                      <p className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">+94 XX XXX XXXX</p>
                    </div>
                  </a>

                  <a href="mailto:info@lapcircuit.lk" className="flex items-start gap-6 text-slate-600 hover:text-blue-600 transition-colors group">
                    <div className="icon-box">
                      <Mail size={22} />
                    </div>
                    <div className="pt-1">
                      <p className="text-xs text-slate-500 mb-1.5 font-bold uppercase tracking-wider">Email Us</p>
                      <p className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">info@lapcircuit.lk</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-6 text-slate-600 group">
                    <div className="icon-box">
                      <MapPin size={22} />
                    </div>
                    <div className="pt-1">
                      <p className="text-xs text-slate-500 mb-1.5 font-bold uppercase tracking-wider">Headquarters</p>
                      <p className="font-bold text-slate-900 text-lg">Colombo, Sri Lanka<br/><span className="text-sm font-medium text-slate-500 mt-2 block">Island-wide installation available</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-10 bg-[var(--bg-deep)] border-slate-800 relative overflow-hidden isolate">
                 <div className="absolute right-0 top-0 w-64 h-64 bg-green-500/10 rounded-full blur-[60px] -mr-20 -mt-20"></div>

                <h3 className="heading-md text-white mb-3 relative z-10">Need an immediate answer?</h3>
                <p className="text-slate-400 text-[15px] mb-8 font-medium relative z-10">Our technical support team is active on WhatsApp.</p>
                <a href="https://wa.me/94XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center relative z-10 !py-4">
                  Message on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[13px] font-bold uppercase tracking-wider text-slate-600">Full Name *</label>
                    <input required type="text" id="name" name="name" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[13px] font-bold uppercase tracking-wider text-slate-600">Phone Number *</label>
                    <input required type="tel" id="phone" name="phone" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 outline-none" placeholder="07X XXX XXXX" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[13px] font-bold uppercase tracking-wider text-slate-600">Email Address *</label>
                  <input required type="email" id="email" name="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 outline-none" placeholder="john@company.com" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="business_type" className="text-[13px] font-bold uppercase tracking-wider text-slate-600">Business Type</label>
                    <select id="business_type" name="business_type" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 outline-none appearance-none">
                      <option value="">Select one...</option>
                      <option value="retail">Retail Shop</option>
                      <option value="restaurant">Restaurant / Cafe</option>
                      <option value="pharmacy">Pharmacy</option>
                      <option value="supermarket">Supermarket</option>
                      <option value="individual">Individual</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service_interest" className="text-[13px] font-bold uppercase tracking-wider text-slate-600">Interested In</label>
                    <select required id="service_interest" name="service_interest" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 outline-none appearance-none">
                      <option value="">Select one...</option>
                      <option value="pos_system">POS System Setup</option>
                      <option value="laptops">Laptop Purchase</option>
                      <option value="maintenance">Maintenance Contract</option>
                      <option value="both">Both POS & Laptops</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[13px] font-bold uppercase tracking-wider text-slate-600">How can we help? *</label>
                  <textarea required id="message" name="message" rows={5} className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 outline-none resize-none" placeholder="Tell us about your requirements..."></textarea>
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-center gap-3 text-red-600 text-sm font-medium">
                    <AlertCircle size={18} />
                    {error}
                  </div>
                )}

                {success ? (
                  <div className="p-8 rounded-xl bg-green-50 border border-green-100 flex flex-col items-center justify-center text-center gap-3 text-green-700">
                    <CheckCircle size={48} className="text-green-500 mb-2" />
                    <p className="font-bold text-xl font-heading">Message Sent Successfully!</p>
                    <p className="text-sm font-medium text-green-600">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary justify-center !py-4 mt-2 disabled:opacity-70 disabled:cursor-not-allowed text-lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send size={20} />}
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
