'use client';
import { useEffect, useRef } from 'react';
import {
  MessageSquare,
  Bot,
  Settings2,
  TrendingUp,
  Wallet,
  Plug,
  Globe,
} from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'Automação de Atendimento',
    description:
      'Organize seus canais, implemente triagem inteligente, automação de agendamentos e integração com CRM para um atendimento consistente em escala.',
    benefits: [
      'Respostas 24/7 sem equipe adicional',
      'Triagem e roteamento automático',
      'CRM atualizado em tempo real',
      'Histórico unificado por cliente',
    ],
    tag: 'Atendimento',
  },
  {
    icon: Bot,
    title: 'Chatbots para WhatsApp',
    description:
      'Chatbots com fluxos personalizados no WhatsApp que qualificam leads, agendam, esclarecem dúvidas e passam para o humano no momento certo.',
    benefits: [
      'Qualificação automática de leads',
      'Agendamento sem intervenção humana',
      'Integração com calendários e CRM',
      'Passagem fluida para atendente',
    ],
    tag: 'WhatsApp',
  },
  {
    icon: Settings2,
    title: 'Automação de Processos',
    description:
      'Automatize fluxos internos como aprovações, notificações, criação de tarefas e relatórios — eliminando retrabalho e padronizando operações.',
    benefits: [
      'Aprovações automáticas por regra',
      'Alertas e notificações em tempo real',
      'Eliminação de tarefas repetitivas',
      'Padrão operacional em todos os times',
    ],
    tag: 'Operacional',
  },
  {
    icon: TrendingUp,
    title: 'Automação Comercial',
    description:
      'Do lead ao pós-venda: nutrição automática, follow-up no tempo certo, propostas padronizadas e acompanhamento contínuo do funil.',
    benefits: [
      'Follow-up automático por estágio',
      'Propostas e contratos automatizados',
      'Pipeline sem esforço manual',
      'Pós-venda estruturado e escalável',
    ],
    tag: 'Comercial',
  },
  {
    icon: Wallet,
    title: 'Automação Financeira',
    description:
      'Lembretes de vencimento, régua de cobranças, gestão de inadimplência e relatórios automáticos — financeiro em ordem sem trabalho manual.',
    benefits: [
      'Lembretes de cobrança automáticos',
      'Régua de inadimplência por etapa',
      'Relatórios periódicos sem esforço',
      'Baixa automática de pagamentos',
    ],
    tag: 'Financeiro',
  },
  {
    icon: Plug,
    title: 'Integrações Inteligentes',
    description:
      'Conectamos seus sistemas via APIs e Webhooks, centralizando dados e eliminando reentradas manuais entre plataformas distintas.',
    benefits: [
      'APIs e Webhooks sob medida',
      'Dados consistentes entre sistemas',
      'Eliminação de redigitação manual',
      'Visão unificada da operação',
    ],
    tag: 'Integrações',
  },
  {
    icon: Globe,
    title: 'Estruturação Digital',
    description:
      'Sites, landing pages, formulários inteligentes e bases digitais que capturam leads, convertem e alimentam automaticamente seus fluxos.',
    benefits: [
      'Sites e LPs focadas em conversão',
      'Formulários conectados ao CRM',
      'Performance e velocidade otimizadas',
      'Base digital para automações',
    ],
    tag: 'Digital',
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

export default function Services() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section
      id="servicos"
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
            Soluções e Serviços
          </div>
          <h2
            className="reveal delay-1 text-3xl md:text-4xl lg:text-5xl font-black mb-5"
            style={{ color: '#F4F4F5', letterSpacing: '-0.02em' }}
          >
            Tudo que você precisa{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #FD4E0C, #ff7a45)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              em um único lugar
            </span>
          </h2>
          <p
            className="reveal delay-2 text-lg max-w-2xl mx-auto"
            style={{ color: '#71717A' }}
          >
            Do atendimento ao financeiro, do digital às integrações — soluções que se conectam e escalam junto com você.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`reveal delay-${(i % 6) + 1} card-shine group flex flex-col p-6 rounded-2xl transition-all duration-300 cursor-default`}
                style={{
                  background: '#141418',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(253,78,12,0.35)';
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(253,78,12,0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Tag + icon */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(253,78,12,0.15), rgba(253,78,12,0.05))',
                      border: '1px solid rgba(253,78,12,0.2)',
                    }}
                  >
                    <Icon size={22} style={{ color: '#FD4E0C' }} />
                  </div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(253,78,12,0.08)',
                      border: '1px solid rgba(253,78,12,0.15)',
                      color: '#FD4E0C',
                    }}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: '#F4F4F5' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: '#71717A' }}
                >
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="mt-auto space-y-2">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm" style={{ color: '#A1A1AA' }}>
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#FD4E0C' }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
