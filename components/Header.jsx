'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import logoOficial from '@/app/imgs/Ativo 1.png';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navLinks = [
  { label: 'Início', href: '#inicio', type: 'scroll' },
  { label: 'Soluções', href: '#solucoes', type: 'scroll' },
  { label: 'Serviços', href: '#servicos', type: 'scroll' },
  { label: 'Como Funciona', href: '#como-funciona', type: 'scroll' },
  { label: 'Cases', href: '#cases', type: 'scroll' },
  { label: 'Conteúdos', href: '#conteudos', type: 'scroll' },
  { label: 'Contato', href: '#contato', type: 'scroll' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname !== '/') return;

      const sections = navLinks
        .filter((l) => l.type === 'scroll')
        .map((l) => l.href.replace('#', ''));

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
  }, [pathname]);

  const handleNavClick = (link) => {
    setMenuOpen(false);

    if (link.type === 'link') return; // handled by Link component

    if (pathname === '/') {
      const id = link.href.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/' + link.href);
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(11, 11, 13, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(253, 78, 12, 0.12)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group cursor-pointer" aria-label="Asynnc">
          <Image src={logoOficial} alt="Asynnc" height={36} style={{ objectFit: 'contain', width: 'auto' }} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = pathname === '/' && activeSection === id;
            const isLinkActive = pathname === '/blog' && link.href === '/blog';

            if (link.type === 'link') {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer group"
                  style={{ color: isLinkActive ? '#FD4E0C' : '#A1A1AA' }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-3 right-3 h-px transition-all duration-300"
                    style={{ background: '#FD4E0C', transform: isLinkActive ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left' }}
                  />
                </Link>
              );
            }

            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link)}
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer group"
                style={{ color: isActive ? '#FD4E0C' : '#A1A1AA' }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-3 right-3 h-px transition-all duration-300"
                  style={{ background: '#FD4E0C', transform: isActive ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left' }}
                />
                <span
                  className="absolute bottom-0 left-3 right-3 h-px transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-x-100"
                  style={{ background: '#FD4E0C', transform: 'scaleX(0)', transformOrigin: 'left' }}
                />
              </button>
            );
          })}
        </nav>

        {/* CTA button desktop */}
        <button
          onClick={() => handleNavClick({ href: '#contato', type: 'scroll' })}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 cursor-pointer"
          style={{ background: '#FD4E0C', color: '#ffffff' }}
          onMouseEnter={e => e.currentTarget.style.background = '#D93E08'}
          onMouseLeave={e => e.currentTarget.style.background = '#FD4E0C'}
        >
          Diagnóstico gratuito
        </button>

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
          {navLinks.map((link) => {
            if (link.type === 'link') {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-left text-sm font-medium transition-colors duration-200 border-b"
                  style={{ color: '#A1A1AA', borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link)}
                className="py-3 text-left text-sm font-medium transition-colors duration-200 cursor-pointer border-b"
                style={{ color: '#A1A1AA', borderColor: 'rgba(255,255,255,0.06)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#FD4E0C'}
                onMouseLeave={e => e.currentTarget.style.color = '#A1A1AA'}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => handleNavClick({ href: '#contato', type: 'scroll' })}
            className="mt-4 py-3 px-4 rounded-lg text-center text-sm font-semibold cursor-pointer"
            style={{ background: '#FD4E0C', color: '#ffffff' }}
          >
            Diagnóstico gratuito
          </button>
        </nav>
      </div>
    </header>
  );
}
