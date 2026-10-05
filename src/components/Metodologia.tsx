import React from 'react';
import activityImage from '../assets/images/feature_montessori_activity_1791214901474.jpg';

const Metodologia = () => (
    <section id="metodologia" className="py-20 bg-brand-surface">
      <div className="max-w-[1240px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
            <img src={activityImage} alt="Montessori" className="rounded-[2.25rem] shadow-xl" />
        </div>
        <div className="lg:col-span-6">
            <h2 className="text-4xl font-extrabold text-brand-on-surface mb-6 font-heading">Un entorno diseñado milimétricamente para su estatura</h2>
            <p className="text-sm text-brand-on-surface-variant font-body mb-6">María Montessori descubrió que cuando el entorno está preparado, el niño aprende por pura curiosidad.</p>
            <ul className="space-y-4 text-sm font-bold text-brand-on-surface font-body">
                <li>✓ Estantes bajos y abiertos</li>
                <li>✓ Vida Práctica</li>
            </ul>
        </div>
      </div>
    </section>
  );
  
  export default Metodologia;
