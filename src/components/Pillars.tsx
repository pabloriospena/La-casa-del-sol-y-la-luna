import React from 'react';

const Pillars = () => (
  <section id="propuesta" className="py-20 bg-brand-background">
    <div className="max-w-[1240px] mx-auto px-6 text-center">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF5CB] text-[#A83910] text-xs font-bold mb-6 border border-[#FFD043]">
          <span className="material-symbols-outlined text-sm">filter_vintage</span> PEDAGOGÍA CON SENTIDO
      </span>
      <h2 className="text-4xl font-extrabold text-[#006492] mb-4 font-heading leading-tight max-w-2xl mx-auto">Por qué las familias eligen La Casa del Sol y la Luna</h2>
      <p className="text-sm text-gray-600 mb-16 max-w-2xl mx-auto font-body">Resolvemos las principales preocupaciones de mamás y papás trabajadores con hechos, estructura y respeto sincero.</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
            { 
                title: "Tranquilidad y Transparencia", 
                desc: "Sabes exactamente qué comió, cuánto descansó y su estado anímico. Cero respuestas prefabricadas de manual.", 
                icon: "fact_check", 
                color: "border-[#BAE6FD]",
                bg: "bg-[#E3F4FD]",
                badge: "Comunicación diaria por chat"
            },
            { 
                title: "Continuidad Anual", 
                desc: "Entendemos tu trabajo. Permanecemos abiertos durante recesos escolares y vacaciones de mitad de año sin cortes imprevistos que desordenen tu rutina.", 
                icon: "calendar_month", 
                color: "border-[#FFE8EB]",
                bg: "bg-[#FFE8EB]",
                badge: "Sin cierres intempestivos"
            },
            { 
                title: "Alimentación Consciente", 
                desc: "Tú decides el menú con su lonchera fresca refrigerada. Devolvemos lo no consumido para tu supervisión y mantenemos cero dulces ultraprocesados.", 
                icon: "nutrition", 
                color: "border-[#E6F8EE]",
                bg: "bg-[#E6F8EE]",
                badge: "Respeto a sus señales de hambre"
            },
            { 
                title: "Montessori en la Práctica", 
                desc: "Mobiliario a escala infantil y rutinas que despiertan su independencia natural sin premios artificiales, gritos ni castigos.", 
                icon: "self_improvement", 
                color: "border-[#F2EDFC]",
                bg: "bg-[#F2EDFC]",
                badge: "Desarrollo motor y autonomía"
            },
        ].map((item, i) => (
            <div key={i} className={`p-8 rounded-[2rem] border ${item.color} ${item.bg} text-left flex flex-col`}>
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#006492] mb-6 shadow-sm">
                    <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#006492] mb-4 font-heading">{item.title}</h3>
                <p className="text-sm text-gray-600 font-body mb-6 flex-grow">{item.desc}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 pt-4 border-t border-gray-200/50">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    {item.badge}
                </div>
            </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pillars;
