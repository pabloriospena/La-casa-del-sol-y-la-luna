import React from 'react';

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF7]/90 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-[1240px] mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
            <span className="material-symbols-outlined">home</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-extrabold text-brand-primary leading-tight font-heading">La Casa del Sol y la Luna</span>
          <span className="text-xs font-semibold text-brand-on-surface-variant font-body">📍 La Ceja, Antioquia 🌙</span>
        </div>
      </div>
      <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-brand-on-surface font-heading">
        <a href="#propuesta" className="hover:text-brand-secondary transition-colors">¿Por qué nosotros?</a>
        <a href="#servicios" className="hover:text-brand-secondary transition-colors">Servicios</a>
        <a href="#metodologia" className="hover:text-brand-secondary transition-colors">Montessori y Respeto</a>
        <a href="#alimentacion" className="hover:text-brand-secondary transition-colors">Alimentación</a>
        <a href="#faq" className="hover:text-brand-secondary transition-colors">Preguntas frecuentes</a>
      </nav>
      <a
        href="https://wa.me/573113863086"
        className="px-6 py-3 text-sm font-bold text-white bg-[#FF784B] rounded-full hover:bg-[#E25B2D] transition-all flex items-center gap-2 shadow-[0_4px_12px_rgba(255,120,75,0.3)]"
      >
        <span className="material-symbols-outlined">chat</span>
        <span className="flex flex-col text-left leading-tight">
          <span className="text-xs font-normal">Agenda tu visita por</span>
          <span className="text-sm font-bold">WhatsApp</span>
        </span>
      </a>
    </div>
  </header>
);

export default Header;
