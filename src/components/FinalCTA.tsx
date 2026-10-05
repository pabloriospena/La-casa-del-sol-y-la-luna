import React from 'react';

const FinalCTA = () => (
    <section className="relative py-20 bg-[#1E2238] text-white overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-20">
            <span className="material-symbols-outlined text-6xl">nights_stay</span>
        </div>
        <div className="max-w-[1040px] mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 text-xs font-bold mb-8 border border-white/20">
                <span className="material-symbols-outlined text-sm">location_on</span> Calle 22 #19-31 • La Ceja, Antioquia
            </div>
            <h2 className="text-4xl font-extrabold mb-6 font-heading">La Casa del Sol y la Luna</h2>
            <p className="text-sm text-gray-300 mb-10 max-w-xl mx-auto font-body">Agenda para observar cómo interactúan los niños, conocer a las maestras y resolver cualquier inquietud antes de tomar tu decisión.</p>
            <a href="https://wa.me/573113863086" className="px-8 py-4 rounded-full bg-[#FF784B] text-white font-bold text-sm shadow-xl hover:bg-[#E25B2D] transition-all flex items-center justify-center gap-2 max-w-fit mx-auto">
                <span className="material-symbols-outlined">chat</span>
                Agenda tu visita por WhatsApp (+57 311 386 3086)
            </a>
            <div className="flex flex-wrap justify-center gap-8 mt-10 text-xs text-gray-400 font-bold">
                <span className="flex items-center gap-2">✓ Atención personalizada inmediata</span>
                <span className="flex items-center gap-2">✓ Grupos reducidos por maestra</span>
                <span className="flex items-center gap-2">✓ Sin compromisos de matrícula previa</span>
            </div>
        </div>
    </section>
);

export default FinalCTA;
