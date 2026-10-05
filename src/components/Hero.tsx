import React from 'react';


const Hero = () => (
  <section className="pt-32 pb-20 bg-brand-background">
    <div className="max-w-[1240px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF5CB] text-[#984800] text-xs font-bold mb-6 border border-[#FFD043]">
            <span>☀️ 6 meses a 5 años • Calle 22 #19-31, La Ceja • Horario 7:30 a.m. a 5:00 p.m.</span>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-[#006492] mb-4 leading-tight font-heading">
          Tu hijo aprende con respeto.
        </h1>
        <h2 className="text-5xl font-extrabold tracking-tight text-[#FF784B] mb-6 leading-tight font-heading">
          Tú sabes exactamente cómo estuvo durante el día.
        </h2>
        <p className="text-sm text-gray-600 mb-8 max-w-xl font-body leading-relaxed">
          Acompañamos a niños y niñas de 6 meses a 5 años en La Ceja, con Montessori, crianza respetuosa y horarios flexibles. Mantenemos una comunicación cercana con cada familia para que sepan qué comió, qué hizo y cómo estuvo su hijo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a href="https://wa.me/573113863086" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-[#FF784B] text-white font-bold text-center hover:bg-[#E25B2D] transition-all shadow-lg flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">chat</span>
                Consultar cupos disponibles por WhatsApp
            </a>
            <a href="#servicios" className="px-8 py-4 rounded-full bg-[#E3F4FD] text-[#006492] font-bold text-center hover:bg-[#BAE6FD] transition-all">
                Ver programas y horarios ↓
            </a>
        </div>
        <div className="text-xs font-bold text-gray-600 mb-10 flex flex-wrap gap-4">
            <span className="flex items-center gap-1 text-brand-tertiary">✓ Respuesta rápida • ✓ Cupos limitados por edad para atención 1:6 • ✓ Sin compromiso</span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
                { icon: 'workspace_premium', text: '+25 años de experiencia' },
                { icon: 'savings', text: 'Sin listas costosas' },
                { icon: 'event_repeat', text: 'Ingreso todo el año' },
                { icon: 'assignment_turned_in', text: 'Reporte diario real' },
            ].map((item, i) => (
                <div key={i} className="flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
                    <span className="material-symbols-outlined text-[#006492] mb-2">{item.icon}</span>
                    <span className="text-[10px] font-bold text-slate-800">{item.text}</span>
                </div>
            ))}
        </div>
      </div>
      
      <div className="lg:col-span-5 relative">
        <div className="bg-white p-4 rounded-[2.25rem] shadow-xl border border-gray-100">
            <img
            src="/img1.jpeg"
            alt="Montessori classroom"
            className="rounded-[2rem] w-full h-[480px] object-cover"
            />
            <div className="absolute top-8 right-8 px-4 py-2 bg-[#FF784B] text-white rounded-full shadow-lg text-xs font-bold">
                Cupos limitados por aula
            </div>
            <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFF5CB] text-[#A83910] flex items-center justify-center">
                    <span className="material-symbols-outlined">child_care</span>
                </div>
                <p className="font-bold text-sm text-[#006492]">Ambientes y Profesionales Preparados</p>
            </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
