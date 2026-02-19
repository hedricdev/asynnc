import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Cases', href: '#cases' },
  { label: 'Conteúdos', href: '#conteudos' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(11, 11, 13, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(253, 78, 12, 0.12)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#inicio')}
          className="flex items-center gap-2 group cursor-pointer"
          aria-label="Asynnc"
        >
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
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer group"
                style={{ color: isActive ? '#FD4E0C' : '#A1A1AA' }}
              >
                {link.label}
                {/* Animated underline */}
                <span
                  className="absolute bottom-0 left-3 right-3 h-px transition-all duration-300"
                  style={{
                    background: '#FD4E0C',
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                  }}
                />
                <span
                  className="absolute bottom-0 left-3 right-3 h-px transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-x-100"
                  style={{
                    background: '#FD4E0C',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                  }}
                />
              </button>
            );
          })}
        </nav>

        {/* CTA button desktop */}
        <a
          href="#contato"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contato'); }}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 cursor-pointer"
          style={{
            background: '#FD4E0C',
            color: '#ffffff',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#D93E08'}
          onMouseLeave={e => e.currentTarget.style.background = '#FD4E0C'}
        >
          Diagnóstico gratuito
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors duration-200 cursor-pointer"
          style={{ color: '#F4F4F5' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          background: 'rgba(11, 11, 13, 0.98)',
          borderBottom: menuOpen ? '1px solid rgba(253, 78, 12, 0.12)' : 'none',
        }}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="py-3 text-left text-sm font-medium transition-colors duration-200 cursor-pointer border-b"
              style={{
                color: '#A1A1AA',
                borderColor: 'rgba(255,255,255,0.06)',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#FD4E0C'}
              onMouseLeave={e => e.currentTarget.style.color = '#A1A1AA'}
            >
              {link.label}
            </button>
          ))}
          <a
            href="#contato"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contato'); }}
            className="mt-4 py-3 px-4 rounded-lg text-center text-sm font-semibold cursor-pointer"
            style={{ background: '#FD4E0C', color: '#ffffff' }}
          >
            Diagnóstico gratuito
          </a>
        </nav>
      </div>
    </header>
  );
}
