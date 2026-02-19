'use client';

import { ArrowRight, ChevronDown } from 'lucide-react';

function WhatsAppSvg({ size = 18 }) {
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

function TechAbstract() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute animate-pulse-glow"
        style={{
          width: '600px',
          height: '600px',
          top: '-100px',
          right: '-150px',
          background: 'radial-gradient(circle, rgba(253,78,12,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      <div
        className="absolute animate-pulse-glow"
        style={{
          width: '400px',
          height: '400px',
          bottom: '0',
          left: '-100px',
          background: 'radial-gradient(circle, rgba(253,78,12,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          animationDelay: '1.5s',
        }}
      />
      <svg
        className="absolute top-0 right-0 w-full h-full opacity-30"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <line x1="600" y1="0" x2="1200" y2="200" stroke="rgba(253,78,12,0.2)" strokeWidth="0.5"/>
        <line x1="700" y1="0" x2="1200" y2="300" stroke="rgba(253,78,12,0.15)" strokeWidth="0.5"/>
        <line x1="800" y1="0" x2="1200" y2="100" stroke="rgba(253,78,12,0.1)" strokeWidth="0.5"/>
        <circle cx="1000" cy="200" r="120" stroke="rgba(253,78,12,0.12)" strokeWidth="1" fill="none"/>
        <circle cx="1000" cy="200" r="80" stroke="rgba(253,78,12,0.1)" strokeWidth="1" fill="none"/>
        <circle cx="1000" cy="200" r="40" stroke="rgba(253,78,12,0.15)" strokeWidth="1" fill="none"/>
        {Array.from({ length: 8 }).map((_, i) =>
          Array.from({ length: 5 }).map((_, j) => (
            <circle
              key={`${i}-${j}`}
              cx={650 + i * 70}
              cy={50 + j * 90}
              r="1.5"
              fill="rgba(253,78,12,0.25)"
            />
          ))
        )}
        <path d="M 900 50 L 850 50 L 850 100" stroke="rgba(253,78,12,0.4)" strokeWidth="1.5" fill="none"/>
        <path d="M 1150 350 L 1150 400 L 1100 400" stroke="rgba(253,78,12,0.3)" strokeWidth="1.5" fill="none"/>
        <line x1="580" y1="400" x2="780" y2="600" stroke="rgba(253,78,12,0.08)" strokeWidth="0.5"/>
      </svg>
      <div
        className="absolute animate-float"
        style={{ width: '8px', height: '8px', top: '30%', right: '20%', background: '#FD4E0C', borderRadius: '50%', boxShadow: '0 0 16px rgba(253,78,12,0.8)', animationDelay: '0s' }}
      />
      <div
        className="absolute animate-float"
        style={{ width: '5px', height: '5px', top: '50%', right: '35%', background: '#FD4E0C', borderRadius: '50%', boxShadow: '0 0 10px rgba(253,78,12,0.6)', animationDelay: '1s' }}
      />
      <div
        className="absolute animate-float"
        style={{ width: '6px', height: '6px', top: '20%', right: '45%', background: 'rgba(253,78,12,0.6)', borderRadius: '50%', boxShadow: '0 0 12px rgba(253,78,12,0.4)', animationDelay: '2s' }}
      />
    </div>
  );
}

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center bg-grid"
      style={{ background: '#0B0B0D', paddingTop: '80px' }}
    >
      <TechAbstract />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-8"
            style={{ background: 'rgba(253, 78, 12, 0.1)', border: '1px solid rgba(253, 78, 12, 0.25)', color: '#FD4E0C' }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#FD4E0C' }} />
            Automação + Digital + Inteligência
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
            style={{ color: '#F4F4F5', letterSpacing: '-0.02em' }}
          >
            Automação e soluções{' '}
            <span style={{ background: 'linear-gradient(90deg, #FD4E0C, #ff7a45)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              digitais
            </span>{' '}
            para escalar sua operação
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: '#A1A1AA' }}>
            Atendimento, processos, comercial, financeiro e integrações —{' '}
            <span style={{ color: '#D4D4D8' }}>tudo conectado</span>.
            Pare de depender de planilhas e retrabalho. Escale com consistência.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll('contato')}
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold transition-all duration-200 hover:scale-105 cursor-pointer"
              style={{ background: '#FD4E0C', color: '#ffffff', boxShadow: '0 0 30px rgba(253,78,12,0.35)' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#D93E08'; e.currentTarget.style.boxShadow = '0 0 40px rgba(253,78,12,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#FD4E0C'; e.currentTarget.style.boxShadow = '0 0 30px rgba(253,78,12,0.35)'; }}
            >
              Solicitar diagnóstico
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <a
              href="https://wa.me/5531971289112"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold transition-all duration-200 hover:scale-105"
              style={{ background: 'transparent', border: '1.5px solid #FD4E0C', color: '#FD4E0C' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(253,78,12,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              <WhatsAppSvg size={18} />
              Falar no WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-12">
            {[
              { value: '+50', label: 'projetos entregues' },
              { value: '-40%', label: 'tempo operacional médio' },
              { value: '+25%', label: 'conversão em clientes' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="text-2xl font-black" style={{ color: '#FD4E0C' }}>{stat.value}</span>
                <span className="text-sm" style={{ color: '#71717A' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => handleScroll('solucoes')}
        aria-label="Ir para próxima seção"
      >
        <span className="text-xs" style={{ color: '#52525B' }}>role para baixo</span>
        <ChevronDown size={20} style={{ color: '#FD4E0C' }} className="animate-bounce" />
      </div>
    </section>
  );
}
