import React from 'react';

const Alimentacion = () => (
    <section id="alimentacion" className="py-20 bg-brand-background">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-peach-light text-brand-secondary text-xs font-bold mb-4 border border-brand-peach-light">
                <span className="material-symbols-outlined text-sm"></span> CUIDADO SIN SECRETOS
            </span>
            <h2 className="text-4xl font-extrabold text-brand-navy mb-4 font-heading">Alimentación Consciente y Apego Respetuoso</h2>
            <p className="text-sm text-brand-muted font-body">Porque la confianza se construye con hechos claros en la mesa y en el corazón del niño.</p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-8">
            {/* Política Lonchera */}
            <div className="lg:col-span-7 p-10 bg-white rounded-[2.25rem] border border-gray-100 shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-brand-mint-light flex items-center justify-center text-brand-tertiary mb-6">
                    <span className="material-symbols-outlined"></span>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-6 font-heading">Política de Lonchera y Comida Real</h3>
                <p className="text-sm text-brand-muted font-body mb-8">En muchos jardines las familias no saben qué comió su hijo ni si fue obligado. En La Casa practicamos transparencia radical:</p>
                <ul className="text-sm text-brand-on-surface-variant space-y-6 font-body mb-10">
                    <li className="flex gap-4">
                        <span className="material-symbols-outlined text-brand-tertiary">inventory_2</span>
                        <div><strong className="font-bold text-brand-navy">Lo que no comió regresa intacto en su lonchera</strong><br/>Refrigeramos cada lonchera adecuadamente. Nunca botamos alimentos; así supervisas exactamente el apetito y ajustas porciones.</div>
                    </li>
                    <li className="flex gap-4">
                        <span className="material-symbols-outlined text-brand-tertiary">block</span>
                        <div><strong className="font-bold text-brand-navy">Cero dulces ni ultraprocesados</strong><br/>Cuidamos la concentración, salud digestiva y hábitos naturales de los niños en un ambiente libre de paquetes azucarados.</div>
                    </li>
                    <li className="flex gap-4">
                        <span className="material-symbols-outlined text-brand-tertiary">sentiment_satisfied</span>
                        <div><strong className="font-bold text-brand-navy">Cero presiones en la mesa</strong><br/>Fomentamos la autorregulación respetando sus señales de saciedad sin chantajes ni premios artificiales.</div>
                    </li>
                </ul>
                <div className="bg-brand-yellow-light p-6 rounded-2xl flex items-center gap-4 border border-brand-yellow">
                    <span className="material-symbols-outlined text-brand-secondary">shopping_basket</span>
                    <p className="text-sm font-bold text-brand-navy">¿Prefieres no enviar lonchera? Contamos con opción de almuerzo casero fresco preparado el mismo día bajo solicitud familiar.</p>
                </div>
            </div>

            {/* Bitácora y Adaptación */}
            <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="p-8 bg-white rounded-[2.25rem] border border-gray-100 shadow-lg">
                    <div className="flex justify-between items-center mb-6">
                        <h4 className="font-bold text-brand-navy flex items-center gap-2 font-heading"><span className="material-symbols-outlined text-brand-secondary">assignment_turned_in</span> Comunicación Diaria</h4>
                        <span className="px-3 py-1 rounded-full bg-brand-yellow-light text-brand-secondary text-xs font-bold">Reporte Diario</span>
                    </div>
                    <p className="text-xs text-brand-muted mb-6">«Sé dónde está mi hijo, qué hizo y qué comió»</p>
                    <div className="space-y-4 text-sm font-body">
                        <div className="flex justify-between border-b pb-2"><span>Alimentación:</span><span className="font-bold text-brand-tertiary">Fruta 100% • Almuerzo 80%</span></div>
                        <div className="flex justify-between border-b pb-2"><span>Descanso / Siesta:</span><span className="font-bold text-brand-primary">1h 15 min tranquilo</span></div>
                        <div className="flex justify-between border-b pb-2"><span>Estado Emocional:</span><span className="font-bold text-brand-secondary">Activo, explorador, alegre</span></div>
                        <div className="flex justify-between pb-2"><span>Contacto con Padres:</span><span className="font-bold text-brand-primary">Foto y nota de voz enviadas</span></div>
                    </div>
                </div>

                <div className="p-8 bg-brand-peach-light rounded-[2.25rem] border border-gray-100 flex flex-col justify-between flex-grow">
                    <div>
                        <h4 className="font-bold text-brand-navy flex items-center gap-2 mb-4 font-heading"><span className="material-symbols-outlined text-brand-secondary">volunteer_activism</span> Adaptación Respetuosa y Real</h4>
                        <p className="text-sm text-brand-muted font-body">Rechazamos el "déjelo llorar que se le pasa". Acogemos el llanto con brazos seguros y afecto, informamos en tiempo real por WhatsApp y respetamos una adaptación gradual al compás de cada familia.</p>
                    </div>
                    <div className="flex justify-between items-center pt-8 border-t border-brand-peach-light">
                        <span className="text-xs font-bold text-brand-secondary">Sin prisas ni rupturas abruptas</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
  
  export default Alimentacion;
