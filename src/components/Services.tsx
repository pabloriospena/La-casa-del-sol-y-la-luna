import React from 'react';
import servicePlaceholder from '../assets/images/service_placeholder_1791233143362.jpg';

const Services = () => (
  <section id="servicios" className="py-20 bg-brand-background">
    <div className="max-w-[1240px] mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sky-light text-brand-primary text-xs font-bold mb-4 border border-brand-sky-border">
                <span className="material-symbols-outlined text-sm">settings</span> SERVICIOS FLEXIBLES
            </span>
            <h2 className="text-4xl font-extrabold text-brand-navy mb-4 font-heading">Nuestros Programas y Horarios</h2>
            <p className="text-sm text-brand-muted font-body">Soluciones pensadas para las dinámicas familiares de La Ceja y el Oriente Antioqueño.</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-brand-on-surface-variant mt-4 md:mt-0">
             <span className="material-symbols-outlined text-sm text-brand-tertiary">check_circle</span> Inscripciones disponibles todo el año escolar
          </div>
      </div>
      
      {/* Tarjeta Principal */}
      <div className="bg-white p-8 rounded-[2.25rem] border border-gray-100 shadow-xl mb-8">
         <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
                <div className="flex gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-brand-secondary text-xs font-bold">Programa Principal (80/20)</span>
                    <span className="px-3 py-1 rounded-full bg-brand-sky-light text-brand-primary text-xs font-bold">6 meses a 5 años</span>
                    <span className="px-3 py-1 rounded-full bg-green-100 text-brand-tertiary text-xs font-bold">Lunes a Viernes</span>
                </div>
                <h3 className="text-3xl font-bold text-brand-navy mb-4 font-heading">Servicio de Acompañamiento Integral</h3>
                <p className="text-sm text-brand-muted mb-8 font-body">Acompañamiento con pedagogía activa y Montessori, estimulación sensorial, vida práctica, conexión con la naturaleza y respeto genuino del ritmo individual de tu hijo.</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { title: "Jornada Completa", desc: "7:30 a.m. a 5:00 p.m.", icon: "schedule" },
                        { title: "Media Jornada Mañana", desc: "8:00 a.m. a 12:00 m.", icon: "schedule" },
                        { title: "Media Jornada Tarde", desc: "1:00 p.m. a 5:00 p.m.", icon: "schedule" },
                        { title: "Somos Flexibles en el horario", desc: "Pueden recoger o llevar a sus hijos en el horario que mejor les quede", icon: "favorite" },
                    ].map((h, i) => (
                        <div key={i} className="flex items-center gap-3 border rounded-2xl p-4">
                            <span className="material-symbols-outlined text-brand-secondary text-lg">{h.icon}</span>
                            <div>
                                <p className="text-xs font-bold text-brand-navy">{h.title}</p>
                                <p className="text-[10px] text-brand-muted">{h.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="lg:col-span-4 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <h4 className="font-bold text-brand-navy mb-4">Ventajas Incluidas para Matriculados:</h4>
                <ul className="text-xs text-brand-muted space-y-3 font-body">
                    <li className="flex gap-2">✓ Sin listas de útiles costosas.</li>
                    <li className="flex gap-2">✓ Ingreso en cualquier mes del año.</li>
                    <li className="flex gap-2">✓ Incluye recesos escolares.</li>
                    <li className="flex gap-2">✓ Bitácora diaria real.</li>
                </ul>
                <a href="https://wa.me/573113863086" target="_blank" rel="noopener noreferrer" className="block w-full text-center mt-8 py-3 rounded-full bg-brand-secondary-container text-white font-bold text-sm hover:bg-brand-secondary transition-all">Consultar cupos Servicio Regular por WhatsApp</a>
            </div>
         </div>
      </div>

      {/* Tarjetas Secundarias */}
      <div className="grid md:grid-cols-2 gap-8">
        {[
            { title: "Vacaciones Recreativas", desc: "Semanas de receso escolar (Semana Santa, mitad de año y octubre).", tag: "Temporadas Especiales", tag2: "Abierto a todo público", icon: "calendar_month", btn: "Preguntar fechas" },
            { title: "Inglés Lúdico los sábados", desc: "Inmersión dinámica a través de cocina infantil, música, retos y expresión corporal.", tag: "Sábados • 8:00 am a 12:00m", icon: "school", btn: "Inscribir en taller" },
        ].map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.25rem] border border-gray-100 shadow-lg flex flex-col justify-between">
                <div>
                    <img src={servicePlaceholder} className="w-full h-40 object-cover rounded-2xl mb-6" />
                    <div className="flex gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-brand-peach-light text-brand-secondary text-xs font-bold">{s.tag}</span>
                        {s.tag2 && <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold">{s.tag2}</span>}
                    </div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-4 font-heading">{s.title}</h3>
                    <p className="text-sm text-brand-muted font-body mb-8">{s.desc}</p>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-muted">Cupos limitados</span>
                    <a href="https://wa.me/573113863086" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-brand-primary text-white font-bold text-sm hover:bg-brand-secondary transition-all">{s.btn}</a>
                </div>
            </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
