import React from 'react';

const Agradecimiento: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">En agradecimiento a UVG Altiplano</h1>
    <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
      Los estudiantes del Técnico en Informática expresamos nuestra gratitud por el apoyo financiero recibido durante dos años, el cual hizo posible continuar nuestra formación académica.
    </p>

    <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg max-w-3xl mx-auto border border-green-100 mb-12">
      <p className="text-lg sm:text-xl text-gray-800 italic font-medium">
        "Este sitio web fue creado en el año 2025 como muestra de gratitud y para facilitar información sobre las oportunidades y ayudas financieras que ofrece la UVG Altiplano."
      </p>
    </div>

    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
      Nuestro objetivo es compartir los recursos, requisitos y experiencias que han beneficiado a muchos estudiantes, e inspirar a futuras generaciones a aprovechar las oportunidades que brinda esta institución.
    </p>
  </div>
);

export default Agradecimiento;
