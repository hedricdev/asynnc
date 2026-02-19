'use client';

import { Linkedin, Instagram, ArrowRight } from 'lucide-react';

function WhatsAppSvg({ size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.824.736 5.476 2.027 7.782L0 32l8.418-2.006A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.773-1.853l-.486-.29-5.002 1.193 1.215-4.863-.317-.498A13.24 13.24 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.77c-.398-.2-2.355-1.162-2.72-1.295-.366-.133-.632-.2-.899.2-.266.398-1.032 1.295-1.265 1.561-.233.266-.466.3-.864.1-.398-.2-1.681-.619-3.202-1.977-1.183-1.057-1.982-2.362-2.215-2.76-.233-.398-.025-.613.175-.811.18-.178.398-.466.598-.698.199-.233.265-.398.398-.664.133-.266.066-.499-.034-.698-.1-.2-.899-2.163-1.232-2.96-.324-.778-.654-.673-.899-.686-.232-.012-.499-.015-.765-.015s-.699.1-.1065.499c-.366.398-1.398 1.367-1.398 3.33s1.431 3.863 1.631 4.13c.199.265 2.815 4.296 6.82 6.027.953.411 1.697.657 2.277.841.956.304 1.826.261 2.515.158.767-.114 2.355-.963 2.688-1.893.333-.93.333-1.727.233-1.893-.1-.166-.366-.266-.765-.466z" />
    </svg>
  );
}
import Image from 'next/image';
import logoOficial from '@/app/imgs/Ativo 1.png';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const quickLinks = [
  { label: 'Início', href: '#inicio', type: 'scroll' },
  { label: 'Soluções', href: '#solucoes', type: 'scroll' },
  { label: 'Serviços', href: '#servicos', type: 'scroll' },
  { label: 'Como Funciona', href: '#como-funciona', type: 'scroll' },
  { label: 'Setores', href: '#setores', type: 'scroll' },
  { label: 'Projetos', href: '#projetos', type: 'scroll' },
  { label: 'Conteúdos', href: '#conteudos', type: 'scroll' },
  { label: 'Contato', href: '#contato', type: 'scroll' },
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
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (href) => {
    if (pathname === '/') {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/' + href);
    }
  };

  return (
    <footer style={{ background: '#0A0A0C', borderTop: '1px solid rgba(253, 78, 12, 0.1)' }}>
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
              <span style={{ background: 'linear-gradient(90deg, #FD4E0C, #ff7a45)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
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
            style={{ background: '#FD4E0C', color: '#ffffff', boxShadow: '0 0 30px rgba(253,78,12,0.3)' }}
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
            <Link href="/" className="flex items-center mb-4">
              <Image src={logoOficial} alt="Asynnc" height={32} style={{ objectFit: 'contain', width: 'auto' }} />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#52525B' }}>
              Soluções inteligentes e digitais para escalar sua operação com automação, integração e estrutura digital.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: WhatsAppSvg, href: 'https://wa.me/5531971289112', label: 'WhatsApp' },
                { Icon: Linkedin, href: 'https://linkedin.com/company/asynnc', label: 'LinkedIn' },
                { Icon: Instagram, href: 'https://instagram.com/asynncbr', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: '#71717A' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(253,78,12,0.4)'; e.currentTarget.style.color = '#FD4E0C'; e.currentTarget.style.background = 'rgba(253,78,12,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#71717A'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#52525B' }}>Navegação</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  {l.type === 'link' ? (
                    <Link
                      href={l.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: '#71717A' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#FD4E0C'}
                      onMouseLeave={e => e.currentTarget.style.color = '#71717A'}
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleScroll(l.href)}
                      className="text-sm transition-colors duration-200 cursor-pointer text-left"
                      style={{ color: '#71717A' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#FD4E0C'}
                      onMouseLeave={e => e.currentTarget.style.color = '#71717A'}
                    >
                      {l.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#52525B' }}>Serviços</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}><span className="text-sm" style={{ color: '#71717A' }}>{s}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#52525B' }}>Contato</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold mb-1" style={{ color: '#52525B' }}>WhatsApp</p>
                <a href="https://wa.me/5531971289112" className="text-sm transition-colors duration-200" style={{ color: '#A1A1AA' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#FD4E0C'}
                  onMouseLeave={e => e.currentTarget.style.color = '#A1A1AA'}
                >
                  +55 (31) 97128-9112
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold mb-1" style={{ color: '#52525B' }}>E-mail</p>
                <a href="mailto:contato@asynnc.com.br" className="text-sm transition-colors duration-200" style={{ color: '#A1A1AA' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#FD4E0C'}
                  onMouseLeave={e => e.currentTarget.style.color = '#A1A1AA'}
                >
                  contato@asynnc.com.br
                </a>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(253,78,12,0.06)', border: '1px solid rgba(253,78,12,0.15)' }}>
              <p className="text-xs font-medium mb-2" style={{ color: '#A1A1AA' }}>
                Conecte seus sistemas.<br />Automatize sua operação.
              </p>
              <span className="text-xs font-bold" style={{ color: '#FD4E0C' }}>Asynnc — Soluções Inteligentes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-5 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
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
