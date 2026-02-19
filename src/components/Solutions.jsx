import { useEffect, useRef } from 'react';
import {
  FileSpreadsheet,
  UserX,
  Clock,
  AlertTriangle,
  BarChart2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const problems = [
  {
    icon: FileSpreadsheet,
    problem: 'Planilhas manuais e dados desatualizados',
    solution: 'Fluxos automatizados mantêm informações centralizadas e em tempo real.',
  },
  {
    icon: UserX,
    problem: 'Leads perdidos por falta de follow-up',
    solution: 'Sequências automáticas ativam contatos no momento certo, sem perder oportunidades.',
  },
  {
    icon: Clock,
    problem: 'Demora e inconsistência no atendimento',
    solution: 'Chatbots e triagem inteligente respondem 24/7 com qualidade e agilidade.',
  },
  {
    icon: AlertTriangle,
    problem: 'Retrabalho por processos sem padrão',
    solution: 'Automação de fluxos internos elimina erros repetitivos e padroniza operações.',
  },
  {
    icon: BarChart2,
    problem: 'Cobranças inconsistentes e inadimplência',
    solution: 'Lembretes, réguas de cobrança e relatórios automáticos para financeiro em dia.',
  },
];

function useReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);
}

export default function Solutions() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section
      id="solucoes"
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
            O que a Asynnc resolve
          </div>
          <h2
            className="reveal delay-1 text-3xl md:text-4xl lg:text-5xl font-black mb-5"
            style={{ color: '#F4F4F5', letterSpacing: '-0.02em' }}
          >
            Sua operação travada?{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #FD4E0C, #ff7a45)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Nós destrancamos.
            </span>
          </h2>
          <p
            className="reveal delay-2 text-lg max-w-2xl mx-auto"
            style={{ color: '#71717A' }}
          >
            Mapeamos os gargalos mais comuns e entregamos soluções que realmente funcionam.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.problem}
                className={`reveal delay-${i + 1} card-shine group p-6 rounded-2xl transition-all duration-300 cursor-default`}
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
                {/* Problem */}
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                    style={{
                      background: 'rgba(253, 78, 12, 0.1)',
                      border: '1px solid rgba(253, 78, 12, 0.2)',
                    }}
                  >
                    <Icon size={18} style={{ color: '#FD4E0C' }} />
                  </div>
                  <div>
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: '#52525B' }}
                    >
                      Problema
                    </span>
                    <p
                      className="text-sm font-semibold mt-1"
                      style={{ color: '#D4D4D8' }}
                    >
                      {item.problem}
                    </p>
                  </div>
                </div>

                {/* Arrow divider */}
                <div className="flex items-center gap-2 mb-4 pl-1">
                  <ArrowRight size={14} style={{ color: '#FD4E0C' }} />
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#FD4E0C' }}
                  >
                    Solução
                  </span>
                </div>

                {/* Solution */}
                <div className="flex items-start gap-2 pl-1">
                  <CheckCircle2
                    size={16}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: '#22C55E' }}
                  />
                  <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>
                    {item.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
