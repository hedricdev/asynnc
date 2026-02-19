import { Inter } from 'next/font/google';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Asynnc — Soluções Inteligentes e Digitais',
  description:
    'Automação e soluções digitais para escalar sua operação. Atendimento, processos, comercial, financeiro e integrações — tudo conectado.',
  openGraph: {
    title: 'Asynnc — Soluções Inteligentes e Digitais',
    description:
      'Automação e soluções digitais para escalar sua operação. Atendimento, processos, comercial, financeiro e integrações — tudo conectado.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body style={{ fontFamily: 'var(--font-inter), system-ui, -apple-system, sans-serif' }}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
