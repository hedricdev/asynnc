import { Zap, MessageCircle, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Cases', href: '#cases' },
  { label: 'Conteúdos', href: '#conteudos' },
  { label: 'Contato', href: '#contato' },
];

const services = [
  'Automação de Atendimento',
  'Chatbots para WhatsApp',
  'Automação de Processos',
  'Automação Comercial',
  'Automação Financeira',
  'Integrações Inteligentes',
  'Estruturação Digital',
];

export default function Footer() {
  const handleScroll = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#0A0A0C',
        borderTop: '1px solid rgba(253, 78, 12, 0.1)',
      }}
    >
      {/* CTA Banner */}
      <div
        className="py-14 px-6"
        style={{
          background: 'linear-gradient(135deg, rgba(253,78,12,0.08) 0%, transparent 60%)',
          borderBottom: '1px solid rgba(253, 78, 12, 0.08)',
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-2xl md:text-3xl font-black mb-2"
              style={{ color: '#F4F4F5', letterSpacing: '-0.02em' }}
            >
              Pronto para operar no{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #FD4E0C, #ff7a45)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                piloto automático?
              </span>
            </h3>
            <p style={{ color: '#71717A' }} className="text-sm">
              Agende um diagnóstico gratuito e veja o potencial da sua operação.
            </p>
          </div>
          <button
            onClick={() => handleScroll('#contato')}
            className="flex-shrink-0 flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105 cursor-pointer"
            style={{
              background: '#FD4E0C',
              color: '#ffffff',
              boxShadow: '0 0 30px rgba(253,78,12,0.3)',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#D93E08'}
            onMouseLeave={e => e.currentTarget.style.background = '#FD4E0C'}
          >
            Solicitar diagnóstico
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #FD4E0C, #ff7040)' }}
              >
                <Zap size={16} color="white" fill="white" />
              </div>
              <span
                className="text-xl font-bold tracking-tight"
                style={{ color: '#F4F4F5' }}
              >
                Asynnc
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: '#52525B' }}
            >
              Soluções inteligentes e digitais para escalar sua operação com automação, integração e estrutura digital.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { Icon: MessageCircle, href: 'https://wa.me/5500000000000', label: 'WhatsApp' },
                { Icon: Linkedin, href: 'https://linkedin.com/company/asynnc', label: 'LinkedIn' },
                { Icon: Instagram, href: 'https://instagram.com/asynnc', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#71717A',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(253,78,12,0.4)';
                    e.currentTarget.style.color = '#FD4E0C';
                    e.currentTarget.style.background = 'rgba(253,78,12,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = '#71717A';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: '#52525B' }}
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleScroll(l.href)}
                    className="text-sm transition-colors duration-200 cursor-pointer text-left"
                    style={{ color: '#71717A' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#FD4E0C'}
                    onMouseLeave={e => e.currentTarget.style.color = '#71717A'}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: '#52525B' }}
            >
              Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span
                    className="text-sm"
                    style={{ color: '#71717A' }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: '#52525B' }}
            >
              Contato
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold mb-1" style={{ color: '#52525B' }}>
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/5500000000000"
                  className="text-sm transition-colors duration-200"
                  style={{ color: '#A1A1AA' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#FD4E0C'}
                  onMouseLeave={e => e.currentTarget.style.color = '#A1A1AA'}
                >
                  +55 (00) 00000-0000
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold mb-1" style={{ color: '#52525B' }}>
                  E-mail
                </p>
                <a
                  href="mailto:contato@asynnc.com.br"
                  className="text-sm transition-colors duration-200"
                  style={{ color: '#A1A1AA' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#FD4E0C'}
                  onMouseLeave={e => e.currentTarget.style.color = '#A1A1AA'}
                >
                  contato@asynnc.com.br
                </a>
              </div>
            </div>

            {/* Mini CTA */}
            <div
              className="mt-6 p-4 rounded-xl"
              style={{
                background: 'rgba(253,78,12,0.06)',
                border: '1px solid rgba(253,78,12,0.15)',
              }}
            >
              <p className="text-xs font-medium mb-2" style={{ color: '#A1A1AA' }}>
                Conecte seus sistemas.
                <br />Automatize sua operação.
              </p>
              <span
                className="text-xs font-bold"
                style={{ color: '#FD4E0C' }}
              >
                Asynnc — Soluções Inteligentes
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="py-5 px-6"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#3F3F46' }}>
            © {new Date().getFullYear()} Asynnc — Soluções Inteligentes e Digitais. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: '#3F3F46' }}>
            Automatize mais. Trabalhe menos. Escale sempre.
          </p>
        </div>
      </div>
    </footer>
  );
}
