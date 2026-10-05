import React, { useState } from 'react';

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-[860px] mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-brand-on-surface mb-12 font-heading">Preguntas Frecuentes</h2>
        <div className="space-y-4">
            {[
                { q: "¿Reciben bebés desde los 6 meses y que aún usen pañal?", a: "Sí. Contamos con un ambiente preparado." },
                { q: "¿Qué útiles o materiales deben comprar?", a: "Cero listas costosas. Todo está incluido." },
            ].map((item, i) => (
                <div key={i} className="border rounded-2xl p-6 cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
                    <div className="font-bold flex justify-between items-center text-brand-on-surface font-heading">
                        {item.q}
                        <span className="text-brand-secondary">{open === i ? '-' : '+'}</span>
                    </div>
                    {open === i && <p className="mt-4 text-sm text-brand-on-surface-variant font-body">{item.a}</p>}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
