import { Metadata, ResolvingMetadata } from "next";
import { safeFetch, supabase } from "@/lib/supabase";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  featured_image_url: string | null;
  category: string;
  published_at: string;
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;

  // Fetch blog post data
  const post = await safeFetch(
    supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .single(),
    null
  ) as BlogPost | null;

  if (!post) {
    return {
      title: "Blog Post | LapCircuit",
      description: "Blog post not found",
    };
  }

  return {
    title: `${post.title} | LapCircuit Blog`,
    description: post.excerpt,
    keywords: `${post.category}, POS, retail, business`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.published_at,
      authors: ["LapCircuit Team"],
      images: post.featured_image_url ? [post.featured_image_url] : [],
    },
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
