'use client';

import { useEffect, useRef } from 'react';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';

function useReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
}

export default function BlogPreview({ posts }) {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section
      id="conteudos"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ background: '#0F0F12' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div
              className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ background: 'rgba(253, 78, 12, 0.1)', border: '1px solid rgba(253, 78, 12, 0.2)', color: '#FD4E0C' }}
            >
              Conteúdos
            </div>
            <h2
              className="reveal delay-1 text-3xl md:text-4xl lg:text-5xl font-black"
              style={{ color: '#F4F4F5', letterSpacing: '-0.02em' }}
            >
              Aprenda a operar{' '}
              <span style={{ background: 'linear-gradient(90deg, #FD4E0C, #ff7a45)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                no piloto automático
              </span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="reveal delay-2 flex-shrink-0 flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
            style={{ color: '#FD4E0C' }}
          >
            Ver todos os conteúdos
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`reveal delay-${i + 1} card-shine group flex flex-col p-6 rounded-2xl transition-all duration-300`}
              style={{ background: '#141418', border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(253,78,12,0.3)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(253,78,12,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Tag row */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(253,78,12,0.08)', border: '1px solid rgba(253,78,12,0.15)', color: '#FD4E0C' }}
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
              <h3
                className="text-base font-bold mb-3 transition-colors duration-200 group-hover:text-orange-400"
                style={{ color: '#F4F4F5' }}
              >
                {post.title}
              </h3>

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
  );
}
