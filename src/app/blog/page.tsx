"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { safeFetch, supabase } from "@/lib/supabase";
import Link from "next/link";
import { Search, Tag, Calendar, User, ArrowRight, Heart } from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author_name: string;
  featured_image_url: string | null;
  category: string;
  view_count: number;
  published_at: string;
}

const categories = ["All", "POS Tips", "Retail Advice", "Success Stories", "Updates"];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [newsLetterMsg, setNewsLetterMsg] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await safeFetch(
        supabase
          .from("blog_posts")
          .select("*")
          .eq("is_published", true)
          .order("published_at", { ascending: false }),
        []
      );
      setPosts(result);
      setFilteredPosts(result);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Filter posts based on category and search
  useEffect(() => {
    let filtered = posts;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchQuery, posts]);

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email, is_active: true }]);

    if (error) {
      setNewsLetterMsg("Email already subscribed or error occurred.");
    } else {
      setNewsLetterMsg("✓ Successfully subscribed!");
      setEmail("");
      setTimeout(() => setNewsLetterMsg(""), 3000);
    }
  };

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* ── HERO SECTION ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-[#E0F2FE] to-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="container-xl relative z-10 text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-6 md:mb-8 font-heading">
            POS Insights & <br className="hidden sm:block" />
            <span style={{ color: "#0EA5E9" }}>Retail Success Stories</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium text-slate-600 leading-relaxed">
            Learn from industry experts, discover best practices, and stay updated with the latest retail technology trends.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white px-4 sm:px-6 md:px-0">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* FEATURED POST */}
            {featuredPost && (
              <div className="lg:col-span-2">
                <div 
                  className="rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 h-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.9) 100%)",
                    border: "2px solid rgba(14, 165, 233, 0.2)",
                    boxShadow: "0 20px 50px rgba(14, 165, 233, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = "0 30px 70px rgba(14, 165, 233, 0.2)";
                    el.style.borderColor = "rgba(14, 165, 233, 0.4)";
                    el.style.transform = "translateY(-8px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = "0 20px 50px rgba(14, 165, 233, 0.1)";
                    el.style.borderColor = "rgba(14, 165, 233, 0.2)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {/* Featured Badge */}
                  <div className="relative">
                    <div 
                      className="h-40 sm:h-52 md:h-64 bg-cover bg-center relative overflow-hidden"
                      style={{
                        backgroundImage: `url('${featuredPost.featured_image_url || 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'}')`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span 
                          className="px-4 py-2 rounded-full text-white text-xs font-bold"
                          style={{ background: "#0EA5E9" }}
                        >
                          ⭐ FEATURED
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4 flex-wrap">
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-bold text-white"
                          style={{ background: "#0EA5E9" }}
                        >
                          {featuredPost.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-slate-500">
                          <Calendar size={14} />
                          {new Date(featuredPost.published_at).toLocaleDateString()}
                        </span>
                      </div>

                      <h2 className="heading-lg mb-4 text-slate-900 line-clamp-2">{featuredPost.title}</h2>
                      <p className="text-slate-600 mb-6 line-clamp-3">{featuredPost.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm text-slate-500">
                          <User size={14} />
                          {featuredPost.author_name}
                        </span>
                        <Link
                          href={`/blog/${featuredPost.slug}`}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all duration-300"
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
                          Read More
                          <ArrowRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SIDEBAR */}
            <div className="lg:col-span-1 space-y-6">
              {/* SEARCH */}
              <div className="p-6 rounded-2xl border-2 border-slate-200 bg-white">
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#0EA5E9]"
                  />
                </div>
              </div>

              {/* CATEGORIES */}
              <div className="p-6 rounded-2xl border-2 border-slate-200 bg-white">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Tag size={18} style={{ color: "#0EA5E9" }} />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                        selectedCategory === cat
                          ? "bg-blue-100 text-blue-900"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                      style={{
                        backgroundColor: selectedCategory === cat ? "rgba(14, 165, 233, 0.15)" : undefined,
                        color: selectedCategory === cat ? "#0EA5E9" : undefined,
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* NEWSLETTER */}
              <form onSubmit={handleNewsletterSignup} className="p-6 rounded-2xl border-2" 
                style={{
                  borderColor: "#0EA5E9",
                  background: "linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(6, 182, 212, 0.05) 100%)",
                }}
              >
                <h3 className="font-bold text-slate-900 mb-4">📧 Newsletter</h3>
                <p className="text-sm text-slate-600 mb-4">Get weekly insights on POS, retail, and business growth.</p>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 mb-3 focus:outline-none focus:border-[#0EA5E9] text-sm"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg font-bold text-white text-sm transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
                    boxShadow: "0 8px 20px rgba(14, 165, 233, 0.25)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  Subscribe
                </button>
                {newsLetterMsg && (
                  <p className="text-xs text-center mt-2" style={{ color: newsLetterMsg.includes("✓") ? "#10b981" : "#ef4444" }}>
                    {newsLetterMsg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG GRID ── */}
      <section className="section-pad bg-slate-50">
        <div className="container-xl">
          <h2 className="heading-lg mb-12 text-slate-900">Latest Articles</h2>

          {loading ? (
            <div className="text-center py-12 text-slate-500">Loading blog posts...</div>
          ) : otherPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <div 
                    className="rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 h-full flex flex-col"
                    style={{
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.9) 100%)",
                      border: "1.5px solid rgba(14, 165, 233, 0.2)",
                      boxShadow: "0 10px 30px rgba(14, 165, 233, 0.08)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "0 20px 50px rgba(14, 165, 233, 0.15)";
                      el.style.borderColor = "rgba(14, 165, 233, 0.4)";
                      el.style.transform = "translateY(-6px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "0 10px 30px rgba(14, 165, 233, 0.08)";
                      el.style.borderColor = "rgba(14, 165, 233, 0.2)";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    {/* Image */}
                    <div 
                      className="h-40 bg-cover bg-center overflow-hidden relative"
                      style={{
                        backgroundImage: `url('${post.featured_image_url || 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'}')`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-bold text-white"
                          style={{ background: "#0EA5E9" }}
                        >
                          {post.category}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(post.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </span>
                      </div>

                      <h3 className="font-bold text-slate-900 mb-2 line-clamp-2 text-base group-hover:text-[#0EA5E9] transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-1">{post.excerpt}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <User size={12} />
                          {post.author_name}
                        </span>
                        <span className="text-xs text-slate-400">{post.view_count} views</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500">
              No articles found. Try a different search or category.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
