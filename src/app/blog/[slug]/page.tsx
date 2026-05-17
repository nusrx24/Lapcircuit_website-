"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { safeFetch, supabase } from "@/lib/supabase";
import Link from "next/link";
import { Calendar, User, Eye, Share2, MessageCircle, Copy, ArrowLeft } from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author_name: string;
  featured_image_url: string | null;
  category: string;
  view_count: number;
  published_at: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogDetailPage({ params }: PageProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    };
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      // Fetch the specific post
      const result = await safeFetch<BlogPost | null>(
        supabase
          .from("blog_posts")
          .select("*")
          .eq("slug", slug)
          .eq("is_published", true)
          .single(),
        null as BlogPost | null
      );

      if (result) {
        // Increment view count
        await supabase
          .from("blog_posts")
          .update({ view_count: (result.view_count || 0) + 1 })
          .eq("id", result.id);

        setPost({ ...result, view_count: (result.view_count || 0) + 1 });

        // Fetch related posts (same category, but not this one)
        const related = await safeFetch<BlogPost[]>(
          supabase
            .from("blog_posts")
            .select("*")
            .eq("category", result.category)
            .eq("is_published", true)
            .neq("id", result.id)
            .limit(3),
          []
        );
        setRelatedPosts(related);
      }

      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  const sharePost = (platform: string) => {
    const title = encodeURIComponent(post?.title || "");
    const url = typeof window !== "undefined" ? window.location.href : "";

    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      whatsapp: `https://wa.me/?text=${title}%20${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  const copyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-slate-500">Loading article...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <div className="flex-1 flex items-center justify-center flex-col gap-4">
          <p className="text-slate-500">Article not found</p>
          <Link href="/blog" className="text-[#0EA5E9] font-bold hover:underline">
            ← Back to blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* ── BACK LINK ── */}
      <section className="pt-32 pb-8">
        <div className="container-xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#0EA5E9] font-bold hover:gap-3 transition-all">
            <ArrowLeft size={18} />
            Back to blog
          </Link>
        </div>
      </section>

      {/* ── FEATURED IMAGE ── */}
      {post.featured_image_url && (
        <section className="pb-12">
          <div className="container-xl">
            <div 
              className="h-96 rounded-2xl overflow-hidden bg-cover bg-center relative"
              style={{
                backgroundImage: `url('${post.featured_image_url}')`,
                boxShadow: "0 20px 50px rgba(14, 165, 233, 0.15)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </section>
      )}

      {/* ── ARTICLE CONTENT ── */}
      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <span 
                  className="px-4 py-2 rounded-full text-white text-xs font-bold"
                  style={{ background: "#0EA5E9" }}
                >
                  {post.category}
                </span>
                <span className="flex items-center gap-2 text-slate-500 text-sm">
                  <Calendar size={16} />
                  {new Date(post.published_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-2 text-slate-500 text-sm">
                  <Eye size={16} />
                  {post.view_count} views
                </span>
              </div>

              <h1 className="heading-xl text-slate-900 mb-4">{post.title}</h1>

              <div className="flex items-center gap-2 text-slate-600 pb-6 border-b border-slate-200">
                <User size={18} style={{ color: "#0EA5E9" }} />
                <span className="font-bold">{post.author_name}</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              {post.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-slate-700 leading-relaxed mb-4 font-medium">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share Section */}
            <div className="py-8 px-6 rounded-2xl border-2 border-slate-200 bg-slate-50">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Share2 size={20} style={{ color: "#0EA5E9" }} />
                Share This Article
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => sharePost("facebook")}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all duration-200"
                >
                  <Share2 size={16} />
                  Facebook
                </button>
                <button
                  onClick={() => sharePost("whatsapp")}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition-all duration-200"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </button>
                <button
                  onClick={() => sharePost("linkedin")}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white font-bold text-sm hover:bg-blue-800 transition-all duration-200"
                >
                  <Share2 size={16} />
                  LinkedIn
                </button>
                <button
                  onClick={copyLink}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-300 text-slate-900 font-bold text-sm hover:bg-slate-400 transition-all duration-200"
                >
                  <Copy size={16} />
                  {copied ? "Copied!" : "Copy Link"}
                </button>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1">
            {/* About Author */}
            <div className="p-6 rounded-2xl border-2 border-slate-200 bg-white mb-8">
              <h3 className="font-bold text-slate-900 mb-3">About Author</h3>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] mb-3" />
              <p className="font-bold text-slate-900 text-sm mb-2">{post.author_name}</p>
              <p className="text-xs text-slate-600">
                Expert in POS systems, retail operations, and business technology solutions.
              </p>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="p-6 rounded-2xl border-2 border-slate-200 bg-white sticky top-32">
                <h3 className="font-bold text-slate-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relPost) => (
                    <Link key={relPost.id} href={`/blog/${relPost.slug}`}>
                      <div className="p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors cursor-pointer group">
                        <p className="text-xs font-bold text-[#0EA5E9] mb-1">{relPost.category}</p>
                        <h4 className="text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-[#0EA5E9] transition-colors">
                          {relPost.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-2">
                          {new Date(relPost.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-16 bg-gradient-to-r from-[#0EA5E9]/10 to-[#06B6D4]/10">
        <div className="container-xl text-center">
          <h2 className="heading-lg mb-6 text-slate-900">Ready to Transform Your Business?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Discover how LapCircuit can help your business grow with enterprise-grade POS solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white transition-all duration-300"
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
            Get in Touch Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
