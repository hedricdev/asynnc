'use client';
import { useEffect, useRef } from 'react';
import {
  Stethoscope,
  Briefcase,
  ShoppingBag,
  GraduationCap,
  Building2,
  Scale,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';

const sectors = [
  {
    icon: Stethoscope,
    name: 'Clínicas & Saúde',
    problems: ['Agendamentos manuais e faltas sem aviso', 'Recepção sobrecarregada com tarefas repetitivas', 'Histórico de pacientes descentralizado'],
    automations: ['Chatbot de agendamento 24/7', 'Confirmação automática de consultas', 'CRM e histórico integrados'],
  },
  {
    icon: Briefcase,
    name: 'Empresas de Serviços',
    problems: ['Leads esfriando por falta de follow-up', 'Propostas demoradas e inconsistentes', 'Funil comercial sem visibilidade'],
    automations: ['Nutrição automática por estágio', 'Propostas geradas automaticamente', 'Pipeline atualizado em tempo real'],
  },
  {
    icon: ShoppingBag,
    name: 'E-commerce & Varejo',
    problems: ['Estoque desatualizado entre plataformas', 'Inadimplência e cobranças manuais', 'Atendimento lento no pós-venda'],
    automations: ['Integração com ERP e plataformas', 'Régua de cobrança automática', 'Atendimento via chatbot 24/7'],
  },
  {
    icon: GraduationCap,
    name: 'Educação & Cursos',
    problems: ['Matrículas e renovações manuais', 'Alunos sem suporte ágil', 'Comunicação descentralizada com turmas'],
    automations: ['Fluxo de matrícula automático', 'Suporte e FAQ via chatbot', 'Notificações e lembretes automáticos'],
  },
  {
    icon: Building2,
    name: 'Imobiliárias',
    problems: ['Leads sem qualificação chegando ao corretor', 'Agendamento de visitas descoordenado', 'Contratos e propostas manuais'],
    automations: ['Qualificação automática de leads', 'Agendamento de visitas integrado', 'Propostas e contratos digitais'],
  },
  {
    icon: Scale,
    name: 'Jurídico & Advocacia',
    problems: ['Gestão de prazos feita manualmente', 'Clientes sem atualização do andamento', 'Onboarding de novos clientes lento'],
    automations: ['Alertas automáticos de prazo', 'Updates automáticos para clientes', 'Onboarding digital padronizado'],
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
      id="setores"
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
            Setores que atendemos
          </div>
          <h2
            className="reveal delay-1 text-3xl md:text-4xl lg:text-5xl font-black mb-5"
            style={{ color: '#F4F4F5', letterSpacing: '-0.02em' }}
          >
            Seu setor tem{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #FD4E0C, #ff7a45)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              solução aqui
            </span>
          </h2>
          <p
            className="reveal delay-2 text-lg max-w-2xl mx-auto"
            style={{ color: '#71717A' }}
          >
            Cada segmento tem suas próprias dores. Nós conhecemos elas — e sabemos exatamente o que automatizar.
          </p>
        </div>

        {/* Sectors grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.name}
                className={`reveal delay-${(i % 6) + 1} card-shine group flex flex-col p-6 rounded-2xl transition-all duration-300 cursor-default`}
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
                {/* Icon + name */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(253,78,12,0.15), rgba(253,78,12,0.05))',
                      border: '1px solid rgba(253,78,12,0.2)',
                    }}
                  >
                    <Icon size={20} style={{ color: '#FD4E0C' }} />
                  </div>
                  <h3 className="text-base font-bold" style={{ color: '#F4F4F5' }}>
                    {sector.name}
                  </h3>
                </div>

                {/* Problems */}
                <div className="mb-4">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#52525B' }}
                  >
                    Dores comuns
                  </span>
                  <ul className="mt-2 space-y-1.5">
                    {sector.problems.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm" style={{ color: '#71717A' }}>
                        <AlertCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#52525B' }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="my-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />

                {/* Automations */}
                <div className="mt-auto">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#FD4E0C' }}
                  >
                    O que automatizamos
                  </span>
                  <ul className="mt-2 space-y-1.5">
                    {sector.automations.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm" style={{ color: '#A1A1AA' }}>
                        <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#22C55E' }} />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
