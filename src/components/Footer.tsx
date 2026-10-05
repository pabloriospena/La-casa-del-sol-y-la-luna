import React from 'react';

const Footer = () => (
  <footer className="py-20 bg-[#15192D] text-gray-400 font-body border-t-4 border-[#FFD043]">
    <div className="max-w-[1240px] mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div>
            <div className="flex items-center gap-2 mb-4 text-white font-bold font-heading">
                <span className="material-symbols-outlined">sunny</span>
                <span className="material-symbols-outlined">nights_stay</span>
                La Casa del Sol y la Luna
            </div>
            <p className="text-xs text-gray-400 mb-6">Centro de primera infancia y jardín infantil con pedagogía activa y Montessori en La Ceja, Antioquia. Creciendo con amor, orden natural y autonomía.</p>
            <div className="p-3 border border-gray-600 rounded-xl text-xs text-center">
                Licencia & Resolución de Funcionamiento Vigente
            </div>
        </div>
        <div>
            <h4 className="font-bold text-white mb-4 font-heading">Ubicación & Contacto</h4>
            <p className="text-xs mb-2 flex items-center gap-2"><span className="material-symbols-outlined text-sm">location_on</span> Calle 22 #19-31, La Ceja, Antioquia</p>
            <p className="text-xs mb-2 flex items-center gap-2"><span className="material-symbols-outlined text-sm">call</span> +57 311 386 3086</p>
            <p className="text-xs flex items-center gap-2"><span className="material-symbols-outlined text-sm">schedule</span> Lunes a Viernes: 7:30 a.m. - 5:00 p.m.</p>
        </div>
        <div>
            <h4 className="font-bold text-white mb-4 font-heading">Navegación Rápida</h4>
            <a href="#propuesta" className="block text-xs mb-2 hover:text-white">Por qué nosotros</a>
            <a href="#servicios" className="block text-xs mb-2 hover:text-white">Niveles y Servicios</a>
            <a href="#metodologia" className="block text-xs mb-2 hover:text-white">Ambientes Montessori</a>
            <a href="#alimentacion" className="block text-xs mb-2 hover:text-white">Nutrición Consciente</a>
        </div>
        <div>
            <h4 className="font-bold text-white mb-4 font-heading">Visitas Guiadas</h4>
            <p className="text-xs mb-4">Conoce nuestros espacios diseñados a la escala del niño.</p>
            <a href="https://wa.me/573113863086" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-[#006492] text-white rounded-full text-xs font-bold font-heading">Agendar por WhatsApp</a>
        </div>
    </div>
    <div className="max-w-[1240px] mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-xs text-gray-500 flex justify-between">
        <p>© 2026 La Casa del Sol y la Luna. Todos los derechos reservados.</p>
        <p>Educación Infantil con Filosofía Montessori y Respeto Genuino</p>
    </div>
  </footer>
);

export default Footer;
