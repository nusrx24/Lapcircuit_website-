import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      {/* 404 Content */}
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="container-xl text-center">
          {/* Error Code */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] mb-4">
              404
            </h1>
            <p className="text-4xl font-bold text-slate-900 mb-4">
              Page Not Found
            </p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been moved or deleted. Let's get you back on track.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <Link 
              href="/"
              className="p-6 rounded-2xl border-2 border-slate-200 bg-white hover:border-[#0EA5E9] hover:shadow-lg transition-all duration-300 group"
            >
              <Home size={32} className="text-[#0EA5E9] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 mb-1">Home</h3>
              <p className="text-sm text-slate-600">Back to homepage</p>
            </Link>

            <Link 
              href="/blog"
              className="p-6 rounded-2xl border-2 border-slate-200 bg-white hover:border-[#0EA5E9] hover:shadow-lg transition-all duration-300 group"
            >
              <Search size={32} className="text-[#0EA5E9] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 mb-1">Blog</h3>
              <p className="text-sm text-slate-600">Read our articles</p>
            </Link>

            <Link 
              href="/products"
              className="p-6 rounded-2xl border-2 border-slate-200 bg-white hover:border-[#0EA5E9] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-[#0EA5E9] mx-auto mb-3 group-hover:scale-110 transition-transform text-4xl">
                📦
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Products</h3>
              <p className="text-sm text-slate-600">Explore our offerings</p>
            </Link>

            <Link 
              href="/contact"
              className="p-6 rounded-2xl border-2 border-slate-200 bg-white hover:border-[#0EA5E9] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-[#0EA5E9] mx-auto mb-3 group-hover:scale-110 transition-transform text-4xl">
                ✉️
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Contact</h3>
              <p className="text-sm text-slate-600">Get in touch</p>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
                boxShadow: "0 10px 30px rgba(14, 165, 233, 0.3)",
              }}
            >
              <ArrowLeft size={20} />
              Go Back Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold border-2 border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
