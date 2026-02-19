import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Tag, Zap, ArrowRight } from 'lucide-react';
import { getAllPosts, getPostBySlug, formatDate } from '@/lib/posts';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Asynnc`,
    description: post.summary,
    openGraph: {
      title: `${post.title} | Asynnc`,
      description: post.summary,
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <div style={{ background: '#0B0B0D', minHeight: '100vh' }}>
      {/* Top nav */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'rgba(11, 11, 13, 0.92)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(253, 78, 12, 0.12)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #FD4E0C, #ff7040)' }}
            >
              <Zap size={16} color="white" fill="white" />
            </div>
            <span className="text-xl font-bold tracking-tight" style={{ color: '#F4F4F5' }}>
              Asynnc
            </span>
          </Link>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: '#A1A1AA' }}
          >
            <ArrowLeft size={15} />
            Todos os artigos
          </Link>
        </div>
      </header>

      {/* Post content */}
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs mb-8" style={{ color: '#52525B' }}>
            <Link href="/" style={{ color: '#52525B' }} className="hover:text-orange-500 transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link href="/blog" style={{ color: '#52525B' }} className="hover:text-orange-500 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span style={{ color: '#A1A1AA' }}>{post.tag}</span>
          </div>

          {/* Tag + meta */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: 'rgba(253,78,12,0.08)',
                border: '1px solid rgba(253,78,12,0.15)',
                color: '#FD4E0C',
              }}
            >
              <Tag size={10} />
              {post.tag}
            </span>
            <span className="flex items-center gap-1 text-xs" style={{ color: '#52525B' }}>
              <Clock size={11} />
              {post.readTime}
            </span>
            <span className="text-xs" style={{ color: '#52525B' }}>
              {formatDate(post.date)}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl md:text-4xl font-black mb-6 leading-tight"
            style={{ color: '#F4F4F5', letterSpacing: '-0.02em' }}
          >
            {post.title}
          </h1>

          {/* Summary */}
          <p
            className="text-lg leading-relaxed mb-10 pb-10"
            style={{
              color: '#A1A1AA',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {post.summary}
          </p>

          {/* Content */}
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* CTA */}
          <div
            className="mt-16 p-8 rounded-2xl text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(253,78,12,0.1), rgba(253,78,12,0.03))',
              border: '1px solid rgba(253,78,12,0.2)',
            }}
          >
            <h2 className="text-xl font-black mb-3" style={{ color: '#F4F4F5' }}>
              Pronto para implementar?
            </h2>
            <p className="text-sm mb-6" style={{ color: '#A1A1AA' }}>
              A Asynnc oferece um diagnóstico gratuito para mapear o potencial de automação do seu negócio.
            </p>
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
              style={{
                background: '#FD4E0C',
                color: '#ffffff',
                boxShadow: '0 0 24px rgba(253,78,12,0.3)',
              }}
            >
              Agendar diagnóstico gratuito
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Back link */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: '#71717A' }}
            >
              <ArrowLeft size={15} />
              Ver todos os artigos
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
