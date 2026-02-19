'use client';
import { useEffect, useRef } from 'react';
import { Search, Workflow, Rocket, BarChart2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico',
    description:
      'Mapeamos sua operação atual, identificamos gargalos, processos manuais e oportunidades de automação com uma análise profunda do seu negócio.',
    highlight: 'Grátis e sem compromisso',
  },
  {
    number: '02',
    icon: Workflow,
    title: 'Desenho do Fluxo',
    description:
      'Desenhamos o fluxo ideal para sua operação: escolha das ferramentas certas, arquitetura da solução e validação com sua equipe antes de codar.',
    highlight: 'Tudo documentado e validado',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Implementação',
    description:
      'Desenvolvemos e conectamos as automações com agilidade, testes e entregas iterativas — mantendo você informado em cada etapa.',
    highlight: 'Entrega rápida e iterativa',
  },
  {
    number: '04',
    icon: BarChart2,
    title: 'Otimização Contínua',
    description:
      'Após o go-live, monitoramos os fluxos, ajustamos o que for necessário e evoluímos continuamente para maximizar seus resultados.',
    highlight: 'Suporte pós-entrega incluso',
  },
];

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

export default function Process() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section
      id="como-funciona"
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
            Como Funciona
          </div>
          <h2
            className="reveal delay-1 text-3xl md:text-4xl lg:text-5xl font-black mb-5"
            style={{ color: '#F4F4F5', letterSpacing: '-0.02em' }}
          >
            Do diagnóstico ao{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #FD4E0C, #ff7a45)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              resultado real
            </span>
          </h2>
          <p
            className="reveal delay-2 text-lg max-w-2xl mx-auto"
            style={{ color: '#71717A' }}
          >
            Um processo claro, eficiente e transparente — do primeiro contato à operação rodando no piloto automático.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(253,78,12,0.3) 20%, rgba(253,78,12,0.3) 80%, transparent)',
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`reveal delay-${i + 1} group flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300`}
                  style={{
                    background: '#141418',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(253,78,12,0.3)';
                    e.currentTarget.style.background = '#17171c';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.background = '#141418';
                  }}
                >
                  {/* Number + icon */}
                  <div className="relative mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, rgba(253,78,12,0.2), rgba(253,78,12,0.05))',
                        border: '1.5px solid rgba(253,78,12,0.3)',
                        boxShadow: '0 0 20px rgba(253,78,12,0.1)',
                      }}
                    >
                      <Icon size={24} style={{ color: '#FD4E0C' }} />
                    </div>
                    {/* Step number badge */}
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
                      style={{
                        background: '#FD4E0C',
                        color: '#ffffff',
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: '#F4F4F5' }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: '#71717A' }}
                  >
                    {step.description}
                  </p>

                  {/* Highlight badge */}
                  <span
                    className="inline-block mt-auto text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{
                      background: 'rgba(253,78,12,0.08)',
                      border: '1px solid rgba(253,78,12,0.2)',
                      color: '#FD4E0C',
                    }}
                  >
                    {step.highlight}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
