import { useEffect, useRef } from 'react';
import { TrendingDown, TrendingUp, Clock, ArrowUpRight } from 'lucide-react';

const cases = [
  {
    sector: 'Clínica Médica',
    title: 'Atendimento automatizado e agenda integrada',
    challenge:
      'A equipe perdia horas diárias com confirmação manual de consultas por WhatsApp, resultando em faltas e retrabalho.',
    solution:
      'Chatbot de agendamento, confirmação automática 24h antes e triagem inicial — integrado ao sistema de gestão.',
    metrics: [
      { icon: TrendingDown, value: '-40%', label: 'tempo operacional da recepção' },
      { icon: Clock, value: '-60%', label: 'taxa de faltas nas consultas' },
      { icon: TrendingUp, value: '+18%', label: 'capacidade de atendimento' },
    ],
  },
  {
    sector: 'Empresa de Serviços',
    title: 'Funil comercial automatizado do zero',
    challenge:
      'Leads chegavam por múltiplos canais mas sem processo de follow-up — a maioria esfriava sem resposta adequada.',
    solution:
      'Centralização de leads, automação de nutrição por estágio e propostas geradas automaticamente após qualificação.',
    metrics: [
      { icon: TrendingUp, value: '+25%', label: 'taxa de conversão de leads' },
      { icon: Clock, value: '-70%', label: 'tempo para enviar proposta' },
      { icon: TrendingDown, value: '-35%', label: 'custo por aquisição' },
    ],
  },
  {
    sector: 'E-commerce / Varejo',
    title: 'Integração e cobrança automática',
    challenge:
      'Pedidos no e-commerce não sincronizavam com estoque e ERP, gerando erros manuais e inadimplência fora de controle.',
    solution:
      'Integrações via API entre plataformas, régua de cobrança automática e relatórios financeiros diários no email.',
    metrics: [
      { icon: TrendingDown, value: '-85%', label: 'erros de sincronização de estoque' },
      { icon: TrendingDown, value: '-30%', label: 'inadimplência mensal' },
      { icon: Clock, value: '4h/dia', label: 'economizadas em tarefas manuais' },
    ],
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

export default function Cases() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section
      id="cases"
      ref={sectionRef}
      className="py-24 px-6 bg-grid"
      style={{ background: '#0B0B0D' }}
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
            Cases & Resultados
          </div>
          <h2
            className="reveal delay-1 text-3xl md:text-4xl lg:text-5xl font-black mb-5"
            style={{ color: '#F4F4F5', letterSpacing: '-0.02em' }}
          >
            Resultados que{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #FD4E0C, #ff7a45)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              falam por si
            </span>
          </h2>
          <p
            className="reveal delay-2 text-lg max-w-2xl mx-auto"
            style={{ color: '#71717A' }}
          >
            Empresas que pararam de operar no modo manual e passaram a escalar com automação inteligente.
          </p>
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className={`reveal delay-${i + 1} card-shine group flex flex-col p-6 rounded-2xl transition-all duration-300`}
              style={{
                background: '#141418',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(253,78,12,0.3)';
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(253,78,12,0.08)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Sector badge */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: 'rgba(253,78,12,0.08)',
                    border: '1px solid rgba(253,78,12,0.15)',
                    color: '#FD4E0C',
                  }}
                >
                  {c.sector}
                </span>
                <ArrowUpRight size={16} style={{ color: '#52525B' }} className="group-hover:text-orange-500 transition-colors" />
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold mb-4"
                style={{ color: '#F4F4F5' }}
              >
                {c.title}
              </h3>

              {/* Challenge + Solution */}
              <div className="space-y-4 mb-6">
                <div>
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#52525B' }}
                  >
                    Desafio
                  </span>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: '#71717A' }}>
                    {c.challenge}
                  </p>
                </div>
                <div>
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#FD4E0C' }}
                  >
                    Solução
                  </span>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: '#A1A1AA' }}>
                    {c.solution}
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div
                className="mt-auto pt-5 space-y-3"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                {c.metrics.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div key={m.label} className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(253,78,12,0.1)' }}
                      >
                        <Icon size={14} style={{ color: '#FD4E0C' }} />
                      </div>
                      <div>
                        <span
                          className="text-lg font-black"
                          style={{ color: '#FD4E0C' }}
                        >
                          {m.value}
                        </span>
                        <span
                          className="text-xs ml-1.5"
                          style={{ color: '#71717A' }}
                        >
                          {m.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
