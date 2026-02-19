'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5531971289112"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 hover:scale-110"
      style={{
        background: '#25D366',
        boxShadow: '0 4px 24px rgba(37, 211, 102, 0.45)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#1ea855';
        e.currentTarget.style.boxShadow = '0 6px 32px rgba(37, 211, 102, 0.6)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = '#25D366';
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(37, 211, 102, 0.45)';
      }}
    >
      {/* WhatsApp official SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.824.736 5.476 2.027 7.782L0 32l8.418-2.006A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.773-1.853l-.486-.29-5.002 1.193 1.215-4.863-.317-.498A13.24 13.24 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.77c-.398-.2-2.355-1.162-2.72-1.295-.366-.133-.632-.2-.899.2-.266.398-1.032 1.295-1.265 1.561-.233.266-.466.3-.864.1-.398-.2-1.681-.619-3.202-1.977-1.183-1.057-1.982-2.362-2.215-2.76-.233-.398-.025-.613.175-.811.18-.178.398-.466.598-.698.199-.233.265-.398.398-.664.133-.266.066-.499-.034-.698-.1-.2-.899-2.163-1.232-2.96-.324-.778-.654-.673-.899-.686-.232-.012-.499-.015-.765-.015s-.699.1-.1065.499c-.366.398-1.398 1.367-1.398 3.33s1.431 3.863 1.631 4.13c.199.265 2.815 4.296 6.82 6.027.953.411 1.697.657 2.277.841.956.304 1.826.261 2.515.158.767-.114 2.355-.963 2.688-1.893.333-.93.333-1.727.233-1.893-.1-.166-.366-.266-.765-.466z" />
      </svg>
    </a>
  );
}
