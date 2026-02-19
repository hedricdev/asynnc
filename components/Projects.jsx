'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import imgMaratona from '@/app/imgs/maratona-bh.jpeg';
import imgAtiva from '@/app/imgs/ativa-inclusao.jpeg';
import imgGirassol from '@/app/imgs/parque-girassol.jpeg';
import imgAma from '@/app/imgs/instituto-ama.png';

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

const projects = [
  {
    name: 'Maratona Oficial de BH',
    tag: 'Evento Esportivo',
    description:
      'Site oficial da maior maratona de Belo Horizonte, com inscrições online, categorias de provas e toda a estrutura informativa do evento.',
    url: 'https://maratonaoficialdebh.com.br',
    image: imgMaratona,
  },
  {
    name: 'Ativa Inclusão',
    tag: 'Inclusão & Acessibilidade',
    description:
      'Plataforma institucional que promove inclusão sensorial e acessibilidade para autistas e neurodivergentes em espaços públicos.',
    url: 'https://ativainclusao.com.br',
    image: imgAtiva,
  },
  {
    name: 'Parque Girassol',
    tag: 'Parque Multissensorial',
    description:
      'Site de parque infantil multissensorial e acessível, projetado para incluir crianças de todas as habilidades e necessidades.',
    url: 'https://parquegirassol.com',
    image: imgGirassol,
  },
  {
    name: 'Instituto Ama',
    tag: 'Organização Social',
    description:
      'Site institucional de OSC que fortalece comunidades por meio de iniciativas criativas, culturais e humanizadas.',
    url: 'https://institutoama.com',
    image: imgAma,
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ background: '#0F0F12' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              background: 'rgba(253, 78, 12, 0.1)',
              border: '1px solid rgba(253, 78, 12, 0.2)',
              color: '#FD4E0C',
            }}
          >
            Portfólio
          </div>
          <h2
            className="reveal delay-1 text-3xl md:text-4xl lg:text-5xl font-black mb-5"
            style={{ color: '#F4F4F5', letterSpacing: '-0.02em' }}
          >
            Projetos{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #FD4E0C, #ff7a45)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              entregues
            </span>
          </h2>
          <p
            className="reveal delay-2 text-lg max-w-2xl mx-auto"
            style={{ color: '#71717A' }}
          >
            Sites e soluções digitais construídos para clientes reais, com foco em conversão e performance.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal delay-${i + 1} group flex flex-col rounded-2xl overflow-hidden transition-all duration-300`}
              style={{
                background: '#141418',
                border: '1px solid rgba(255,255,255,0.06)',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(253,78,12,0.3)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(253,78,12,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Screenshot */}
              <div className="relative overflow-hidden" style={{ height: '220px' }}>
                <Image
                  src={project.image}
                  alt={`Preview de ${project.name}`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(11,11,13,0.55)' }}
                >
                  <span
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold"
                    style={{ background: '#FD4E0C', color: '#fff', boxShadow: '0 0 24px rgba(253,78,12,0.4)' }}
                  >
                    Visitar site
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(253,78,12,0.08)',
                      border: '1px solid rgba(253,78,12,0.15)',
                      color: '#FD4E0C',
                    }}
                  >
                    {project.tag}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="transition-colors duration-200 group-hover:text-orange-500"
                    style={{ color: '#52525B' }}
                  />
                </div>
                <h3
                  className="text-lg font-bold mb-2 transition-colors duration-200 group-hover:text-orange-400"
                  style={{ color: '#F4F4F5' }}
                >
                  {project.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
