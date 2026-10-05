import React from 'react';
import metodologiaPlaceholder from '../assets/images/metodologia_placeholder_1791233152784.jpg';

const Metodologia = () => (
    <section id="metodologia" className="py-20 bg-brand-surface">
      <div className="max-w-[1240px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
            <img src="/img2.jpeg" alt="Montessori" className="rounded-[2.25rem] shadow-xl w-full" />
        </div>
        <div className="lg:col-span-6">
            <h2 className="text-4xl font-extrabold text-brand-navy mb-6 font-heading">Un entorno adecuado para ellos</h2>
            <p className="text-sm text-brand-muted font-body mb-6 leading-relaxed">María Montessori descubrió que cuando el entorno está preparado, el niño no necesita ser empujado ni vigilado con severidad: aprende por pura curiosidad.</p>
            <ul className="space-y-4 text-sm font-bold text-brand-navy font-body">
                <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-brand-primary">check_circle</span> Estantes bajos y abiertos: Elige con qué jugar y aprende a guardarlo en su sitio al terminar.
                </li>
                <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-brand-primary">check_circle</span> Vida Práctica: Verter agua en vasos pequeños, abotonar y cuidar su jardín.
                </li>
                <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-brand-primary">check_circle</span> Control de esfínteres amoroso: Respetamos sus ritmos biológicos sin premios, presiones ni comparaciones.
                </li>
            </ul>
        </div>
      </div>
    </section>
  );
  
  export default Metodologia;
