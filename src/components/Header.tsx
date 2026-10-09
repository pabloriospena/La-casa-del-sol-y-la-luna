import React, { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF7]/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
          <div className="flex flex-col">
            <span className="text-base sm:text-xl font-extrabold text-brand-primary leading-tight font-heading">La Casa del Sol y la Luna</span>
            <span className="text-[11px] sm:text-xs font-semibold text-brand-on-surface-variant font-body">📍 La Ceja, Antioquia 🌙</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-brand-on-surface font-heading">
          <a href="#propuesta" className="hover:text-brand-secondary transition-colors">¿Por qué nosotros?</a>
          <a href="#servicios" className="hover:text-brand-secondary transition-colors">Servicios</a>
          <a href="#metodologia" className="hover:text-brand-secondary transition-colors">Montessori y Respeto</a>
          <a href="#alimentacion" className="hover:text-brand-secondary transition-colors">Alimentación</a>
          <a href="#faq" className="hover:text-brand-secondary transition-colors">Preguntas frecuentes</a>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop WhatsApp Button */}
          <a
            href="https://wa.me/573113863086"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex px-6 py-3 text-sm font-bold text-white bg-[#FF784B] rounded-full hover:bg-[#E25B2D] transition-all items-center gap-2 shadow-[0_4px_12px_rgba(255,120,75,0.3)]"
          >
            <span className="material-symbols-outlined">chat</span>
            <span className="flex flex-col text-left leading-tight">
              <span className="text-xs font-normal">Agenda tu visita por</span>
              <span className="text-sm font-bold">WhatsApp</span>
            </span>
          </a>

          {/* Mobile WhatsApp Icon Button */}
          <a
            href="https://wa.me/573113863086"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="lg:hidden w-10 h-10 rounded-full bg-[#FF784B] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(255,120,75,0.3)] hover:bg-[#E25B2D] transition-all"
          >
            <span className="material-symbols-outlined text-xl">chat</span>
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            className="lg:hidden w-10 h-10 rounded-full bg-gray-100 text-brand-navy flex items-center justify-center hover:bg-gray-200 transition-all"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-[#FFFDF7] border-b border-gray-200 shadow-xl py-6 px-6 flex flex-col gap-4">
          <a
            href="#propuesta"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-bold text-brand-navy py-2 border-b border-gray-100 hover:text-[#FF784B] transition-colors"
          >
            ¿Por qué nosotros?
          </a>
          <a
            href="#servicios"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-bold text-brand-navy py-2 border-b border-gray-100 hover:text-[#FF784B] transition-colors"
          >
            Servicios
          </a>
          <a
            href="#metodologia"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-bold text-brand-navy py-2 border-b border-gray-100 hover:text-[#FF784B] transition-colors"
          >
            Montessori y Respeto
          </a>
          <a
            href="#alimentacion"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-bold text-brand-navy py-2 border-b border-gray-100 hover:text-[#FF784B] transition-colors"
          >
            Alimentación
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-bold text-brand-navy py-2 hover:text-[#FF784B] transition-colors"
          >
            Preguntas frecuentes
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
