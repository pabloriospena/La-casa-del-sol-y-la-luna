import React from 'react';

const FloatingWhatsApp = () => (
    <a 
        href="https://wa.me/573113863086" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-4 rounded-full bg-[#FF784B] text-white font-bold shadow-2xl hover:scale-105 transition-transform"
    >
        <span className="material-symbols-outlined">chat</span>
        ¿Dudas? Escríbenos por WhatsApp
    </a>
);

export default FloatingWhatsApp;
