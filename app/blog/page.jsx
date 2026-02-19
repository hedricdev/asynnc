import Link from 'next/link';
import Image from 'next/image';
import { Clock, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import { getAllPosts, formatDate } from '@/lib/posts';
import logoOficial from '@/app/imgs/Ativo 1.png';

export const metadata = {
  title: 'Blog | Asynnc',
  description:
    'Artigos sobre automação de processos, atendimento inteligente e integrações. Aprenda a operar no piloto automático.',
  openGraph: {
    title: 'Blog | Asynnc',
    description:
      'Artigos sobre automação de processos, atendimento inteligente e integrações.',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

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
          <Link href="/" className="flex items-center group">
            <Image src={logoOficial} alt="Asynnc" height={34} style={{ objectFit: 'contain', width: 'auto' }} />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: '#A1A1AA' }}
          >
            <ArrowLeft size={15} />
            Voltar ao site
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section
        className="pt-32 pb-16 px-6"
        style={{
          background: 'linear-gradient(180deg, #0F0F12 0%, #0B0B0D 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              background: 'rgba(253, 78, 12, 0.1)',
              border: '1px solid rgba(253, 78, 12, 0.2)',
              color: '#FD4E0C',
            }}
          >
            Blog & Conteúdos
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-5"
            style={{ color: '#F4F4F5', letterSpacing: '-0.02em' }}
          >
            Aprenda a operar{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #FD4E0C, #ff7a45)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              no piloto automático
            </span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#71717A' }}>
            Artigos práticos sobre automação, atendimento inteligente e integrações para quem quer escalar sem aumentar a equipe.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-shine group flex flex-col p-6 rounded-2xl transition-all duration-300"
                style={{
                  background: '#141418',
                  border: '1px solid rgba(255,255,255,0.06)',
                  textDecoration: 'none',
                }}
              >
                {/* Tag row */}
                <div className="flex items-center justify-between mb-4">
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
                  <div className="flex items-center gap-3 text-xs" style={{ color: '#52525B' }}>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>

                {/* Title */}
                <h2
                  className="text-base font-bold mb-3 transition-colors duration-200 group-hover:text-orange-400"
                  style={{ color: '#F4F4F5' }}
                >
                  {post.title}
                </h2>

                {/* Summary */}
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#71717A' }}>
                  {post.summary}
                </p>

                {/* Read more */}
                <div
                  className="mt-auto flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                  style={{ color: '#FD4E0C' }}
                >
                  Ler artigo
                  <ArrowRight size={15} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="py-16 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl font-black mb-3"
            style={{ color: '#F4F4F5', letterSpacing: '-0.02em' }}
          >
            Pronto para automatizar sua operação?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#71717A' }}>
            Diagnóstico gratuito para mapear os gargalos do seu negócio.
          </p>
          <Link
            href="/#contato"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold transition-all duration-200 hover:scale-105"
            style={{
              background: '#FD4E0C',
              color: '#ffffff',
              boxShadow: '0 0 30px rgba(253,78,12,0.3)',
            }}
          >
            Agendar diagnóstico gratuito
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
