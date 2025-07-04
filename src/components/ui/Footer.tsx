import React from "react";

const Footer: React.FC = () => (
  <section className="fixed bottom-0 left-0 w-full bg-blue-900 text-white py-16 px-6 z-50">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      <div className="space-y-3">
        <div className="text-5xl">🧠</div>
        <h3 className="text-2xl font-semibold">Asistente inteligente</h3>
        <p className="text-gray-300">
          Generá horarios optimizados en segundos con nuestra API.
        </p>
      </div>
      <div className="space-y-3">
        <div className="text-5xl">📅</div>
        <h3 className="text-2xl font-semibold">Diseño visual</h3>
        <p className="text-gray-300">
          Arrastrá y organizá bloques con una interfaz clara.
        </p>
      </div>
      <div className="space-y-3">
        <div className="text-5xl">📥</div>
        <h3 className="text-2xl font-semibold">Carga desde PDF</h3>
        <p className="text-gray-300">
          Subí tu archivo de matrícula y obtené tu horario al instante.
        </p>
      </div>
    </div>
  </section>
);

export default Footer;