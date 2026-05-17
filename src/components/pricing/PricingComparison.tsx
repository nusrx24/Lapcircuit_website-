"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, XCircle, Smartphone, Apple, Play } from "lucide-react";
import { safeFetch, supabase } from "@/lib/supabase";
import Link from "next/link";

interface ComparisonRow {
  id?: string;
  feature_name: string;
  desktop_pos: string;
  desktop_cloud: string;
  cloud_based: string;
  display_order: number;
}

const plans = [
  { name: "Desktop POS", price: "Rs. 49,000" },
  { name: "Desktop + Cloud", price: "Rs. 69,000", recommended: true },
  { name: "Cloud-Based", price: "Rs. 29,000" }
];

export default function PricingComparison() {
  const [comparisonData, setComparisonData] = useState<ComparisonRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComparison = async () => {
      const result = await safeFetch(
        supabase
          .from("pricing_comparison")
          .select("*")
          .order("display_order", { ascending: true }),
        []
      );
      setComparisonData(result);
      setLoading(false);
    };

    fetchComparison();
  }, []);

  const renderValue = (value: string) => {
    if (value === "✓") {
      return <CheckCircle2 size={24} className="text-[#0EA5E9] mx-auto" />;
    }
    if (value === "X") {
      return <XCircle size={24} className="text-slate-300 mx-auto" />;
    }
    return <span className="text-slate-600 font-medium text-center">{value}</span>;
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container-xl">
        {/* MOBILE APP HIGHLIGHT BANNER */}
        <div className="mb-20 relative">
          <div 
            className="rounded-2xl p-8 md:p-12 overflow-hidden relative group"
            style={{
              background: "linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)",
              border: "2px solid #0EA5E9",
              boxShadow: "0 20px 50px rgba(14, 165, 233, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
            }}
          >
            {/* Animated background effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "radial-gradient(circle at 30% 30%, rgba(14, 165, 233, 0.1), transparent 50%)",
                filter: "blur(20px)",
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Left side: Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone size={28} style={{ color: "#0EA5E9" }} />
                  <h3 className="text-2xl md:text-3xl font-bold font-heading" style={{ color: "#0EA5E9" }}>
                    📱 Mobile App Included
                  </h3>
                </div>
                <p className="text-lg text-slate-700 mb-6 font-medium">
                  Manage your business from your phone. Real-time sales, inventory, and reports at your fingertips.
                </p>
                <div className="flex flex-wrap gap-6 text-sm font-bold text-slate-600">
                  <div className="flex items-center gap-2">
                    ✓ Real-time sales tracking
                  </div>
                  <div className="flex items-center gap-2">
                    ✓ Staff monitoring
                  </div>
                  <div className="flex items-center gap-2">
                    ✓ Inventory alerts
                  </div>
                </div>
              </div>

              {/* Right side: App store badges */}
              <div className="flex flex-col gap-4 w-full md:w-auto">
                <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg border-2 border-slate-200 hover:border-[#0EA5E9] transition-colors cursor-pointer">
                  <Apple size={24} />
                  <div className="text-left">
                    <div className="text-xs text-slate-500">Download on the</div>
                    <div className="text-sm font-bold text-slate-900">App Store</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg border-2 border-slate-200 hover:border-[#0EA5E9] transition-colors cursor-pointer">
                  <Play size={24} />
                  <div className="text-left">
                    <div className="text-xs text-slate-500">Get it on</div>
                    <div className="text-sm font-bold text-slate-900">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRICING COMPARISON TABLE */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4 text-slate-900">Feature Comparison</h2>
            <p className="text-slate-600 font-medium text-lg">
              Choose the plan that fits your business needs
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto rounded-2xl border-2 border-slate-200">
            <table className="w-full">
              {/* Header */}
              <thead>
                <tr className="bg-gradient-to-r from-[#0EA5E9]/15 via-[#0EA5E9]/10 to-[#06B6D4]/10">
                  <th className="px-6 py-6 text-left font-bold text-slate-900 text-base border-r border-slate-200">
                    Feature
                  </th>
                  {plans.map((plan, idx) => (
                    <th 
                      key={idx}
                      className="px-6 py-6 text-center font-bold text-slate-900 text-base border-r border-slate-200 last:border-r-0"
                    >
                      <div className="mb-2">{plan.name}</div>
                      <div className="text-lg font-black" style={{ color: "#0EA5E9" }}>
                        {plan.price}
                      </div>
                      {plan.recommended && (
                        <div className="mt-3 inline-block bg-[#0EA5E9] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          ⭐ RECOMMENDED
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                      Loading comparison data...
                    </td>
                  </tr>
                ) : (
                  comparisonData.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`border-t border-slate-200 hover:bg-slate-50/50 transition-colors ${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50/30"
                      }`}
                    >
                      <td className="px-6 py-5 font-bold text-slate-900 border-r border-slate-200 text-sm">
                        {row.feature_name}
                      </td>
                      <td className="px-6 py-5 text-center border-r border-slate-200">
                        {renderValue(row.desktop_pos)}
                      </td>
                      <td className="px-6 py-5 text-center border-r border-slate-200">
                        {renderValue(row.desktop_cloud)}
                      </td>
                      <td className="px-6 py-5 text-center">
                        {renderValue(row.cloud_based)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {!loading && comparisonData.length > 0 && (
              <div className="space-y-4">
                {plans.map((plan, planIdx) => (
                  <div key={planIdx} className="border-2 border-slate-200 rounded-2xl overflow-hidden">
                    {/* Plan Header */}
                    <div 
                      className="p-6 text-center"
                      style={{
                        background: "linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)",
                      }}
                    >
                      <h3 className="font-bold text-slate-900 text-lg mb-2">{plan.name}</h3>
                      <div className="text-2xl font-black mb-2" style={{ color: "#0EA5E9" }}>
                        {plan.price}
                      </div>
                      {plan.recommended && (
                        <div className="inline-block bg-[#0EA5E9] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          ⭐ RECOMMENDED
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="divide-y divide-slate-200">
                      {comparisonData.map((row, idx) => (
                        <div key={idx} className="p-4 flex items-center justify-between">
                          <span className="font-bold text-slate-700 text-sm">{row.feature_name}</span>
                          <div>
                            {planIdx === 0 && renderValue(row.desktop_pos)}
                            {planIdx === 1 && renderValue(row.desktop_cloud)}
                            {planIdx === 2 && renderValue(row.cloud_based)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* TRUST STRIP */}
        <div className="py-12 border-t border-b border-slate-200 bg-slate-50/50">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {[
              { title: "24/7 Service", icon: "🌍" },
              { title: "Lifetime Guarantee", icon: "✨" },
              { title: "Life Support Included", icon: "🤝" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-center md:text-left">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <div className="font-bold text-slate-900">{item.title}</div>
                  <div className="text-sm text-slate-600">Peace of mind guaranteed</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-16">
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
              boxShadow: "0 10px 30px rgba(14, 165, 233, 0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 15px 40px rgba(14, 165, 233, 0.4)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(14, 165, 233, 0.3)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Get Started Today
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
