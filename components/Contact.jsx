'use client';
import { useState, useRef, useEffect } from 'react';
import { Send, Linkedin, Instagram, CheckCircle2, Loader2 } from 'lucide-react';

function WhatsAppSvg({ size = 18, style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill={style?.color || 'currentColor'}
      aria-hidden="true"
    >
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.824.736 5.476 2.027 7.782L0 32l8.418-2.006A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.773-1.853l-.486-.29-5.002 1.193 1.215-4.863-.317-.498A13.24 13.24 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.77c-.398-.2-2.355-1.162-2.72-1.295-.366-.133-.632-.2-.899.2-.266.398-1.032 1.295-1.265 1.561-.233.266-.466.3-.864.1-.398-.2-1.681-.619-3.202-1.977-1.183-1.057-1.982-2.362-2.215-2.76-.233-.398-.025-.613.175-.811.18-.178.398-.466.598-.698.199-.233.265-.398.398-.664.133-.266.066-.499-.034-.698-.1-.2-.899-2.163-1.232-2.96-.324-.778-.654-.673-.899-.686-.232-.012-.499-.015-.765-.015s-.699.1-.1065.499c-.366.398-1.398 1.367-1.398 3.33s1.431 3.863 1.631 4.13c.199.265 2.815 4.296 6.82 6.027.953.411 1.697.657 2.277.841.956.304 1.826.261 2.515.158.767-.114 2.355-.963 2.688-1.893.333-.93.333-1.727.233-1.893-.1-.166-.366-.266-.765-.466z" />
    </svg>
  );
}

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

const socialLinks = [
  {
    icon: WhatsAppSvg,
    label: 'WhatsApp',
    handle: '+55 (31) 97128-9112',
    href: 'https://wa.me/5531971289112',
    color: '#25D366',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: '@asynnc',
    href: 'https://linkedin.com/company/asynnc',
    color: '#0A66C2',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    handle: '@asynncbr',
    href: 'https://instagram.com/asynncbr',
    color: '#E1306C',
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://formspree.io/f/xlgwwewp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', whatsapp: '', message: '' });
      } else {
        setStatus('idle');
        alert('Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.');
      }
    } catch {
      setStatus('idle');
      alert('Erro ao enviar. Verifique sua conexão e tente novamente.');
    }
  };

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-24 px-6 bg-grid"
      style={{ background: '#0B0B0D' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              background: 'rgba(253, 78, 12, 0.1)',
              border: '1px solid rgba(253, 78, 12, 0.2)',
              color: '#FD4E0C',
            }}
          >
            Vamos conversar
          </div>
          <h2
            className="reveal delay-1 text-3xl md:text-4xl lg:text-5xl font-black mb-5"
            style={{ color: '#F4F4F5', letterSpacing: '-0.02em' }}
          >
            Agende um{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #FD4E0C, #ff7a45)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              diagnóstico gratuito
            </span>
          </h2>
          <p
            className="reveal delay-2 text-lg max-w-2xl mx-auto"
            style={{ color: '#71717A' }}
          >
            Fale com a Asynnc e descubra como automatizar sua operação em menos tempo do que você imagina.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 reveal delay-1">
            <div
              className="p-8 rounded-2xl"
              style={{
                background: '#141418',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)' }}
                  >
                    <CheckCircle2 size={32} style={{ color: '#22C55E' }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#F4F4F5' }}>
                    Mensagem enviada!
                  </h3>
                  <p className="text-sm" style={{ color: '#71717A' }}>
                    Entraremos em contato em breve para agendar seu diagnóstico gratuito.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer"
                    style={{ background: 'rgba(253,78,12,0.1)', color: '#FD4E0C', border: '1px solid rgba(253,78,12,0.2)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(253,78,12,0.2)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(253,78,12,0.1)'}
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-2"
                      style={{ color: '#D4D4D8' }}
                    >
                      Nome completo <span style={{ color: '#FD4E0C' }}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: '#0F0F12',
                        border: '1.5px solid rgba(255,255,255,0.08)',
                        color: '#F4F4F5',
                      }}
                      onFocus={e => e.target.style.borderColor = 'rgba(253,78,12,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2"
                      style={{ color: '#D4D4D8' }}
                    >
                      E-mail <span style={{ color: '#FD4E0C' }}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: '#0F0F12',
                        border: '1.5px solid rgba(255,255,255,0.08)',
                        color: '#F4F4F5',
                      }}
                      onFocus={e => e.target.style.borderColor = 'rgba(253,78,12,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="block text-sm font-semibold mb-2"
                      style={{ color: '#D4D4D8' }}
                    >
                      WhatsApp <span style={{ color: '#FD4E0C' }}>*</span>
                    </label>
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      value={formState.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: '#0F0F12',
                        border: '1.5px solid rgba(255,255,255,0.08)',
                        color: '#F4F4F5',
                      }}
                      onFocus={e => e.target.style.borderColor = 'rgba(253,78,12,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2"
                      style={{ color: '#D4D4D8' }}
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Conte brevemente sobre seu negócio e o que você quer automatizar..."
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        background: '#0F0F12',
                        border: '1.5px solid rgba(255,255,255,0.08)',
                        color: '#F4F4F5',
                      }}
                      onFocus={e => e.target.style.borderColor = 'rgba(253,78,12,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading' || !formState.name || !formState.email || !formState.whatsapp}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-base font-bold transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: '#FD4E0C',
                      color: '#ffffff',
                      boxShadow: '0 0 30px rgba(253,78,12,0.3)',
                    }}
                    onMouseEnter={e => {
                      if (status !== 'loading') e.currentTarget.style.background = '#D93E08';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '#FD4E0C';
                    }}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Solicitar diagnóstico gratuito
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: '#52525B' }}>
                    Sem spam. Entraremos em contato em até 24 horas.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Social + info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* CTA card */}
            <div
              className="reveal delay-2 p-6 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(253,78,12,0.12), rgba(253,78,12,0.04))',
                border: '1px solid rgba(253,78,12,0.2)',
              }}
            >
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: '#F4F4F5' }}
              >
                Resposta rápida?
              </h3>
              <p className="text-sm mb-5" style={{ color: '#A1A1AA' }}>
                Prefere falar direto? Nossa equipe está pronta no WhatsApp para um atendimento ágil.
              </p>
              <a
                href="https://wa.me/5531971289112"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
                style={{
                  background: '#25D366',
                  color: '#ffffff',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#1ea855'}
                onMouseLeave={e => e.currentTarget.style.background = '#25D366'}
              >
                <WhatsAppSvg size={17} style={{ color: '#ffffff' }} />
                Falar no WhatsApp
              </a>
            </div>

            {/* Social links */}
            <div
              className="reveal delay-3 p-6 rounded-2xl"
              style={{
                background: '#141418',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <h3
                className="text-sm font-bold mb-5"
                style={{ color: '#71717A' }}
              >
                Nos acompanhe
              </h3>
              <div className="space-y-4">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group transition-all duration-200"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                        style={{
                          background: `${s.color}15`,
                          border: `1px solid ${s.color}30`,
                        }}
                      >
                        <Icon size={18} style={{ color: s.color }} />
                      </div>
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: '#D4D4D8' }}
                        >
                          {s.label}
                        </p>
                        <p className="text-xs" style={{ color: '#52525B' }}>
                          {s.handle}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
