// Galeria.tsx
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const fotos = [
  '/galeria/galeria1.jpeg',
  '/galeria/galeria2.jpeg',
  '/galeria/galeria3.jpeg',
  '/galeria/galeria4.jpeg',
  '/galeria/galeria5.jpeg'

];

const Galeria: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % fotos.length);
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  // Obtenemos las 4 imágenes visibles (se usarán según el ancho de pantalla)
  const visibleFotos = [
    fotos[startIndex % fotos.length],
    fotos[(startIndex + 1) % fotos.length],
    fotos[(startIndex + 2) % fotos.length],
    fotos[(startIndex + 3) % fotos.length]
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Nuestra Galería</h2>

      <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 sm:p-12 rounded-2xl shadow-lg mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="text-teal-600 mx-auto mb-4" size={40} />
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            En UVG Altiplano, fomentamos el <strong>compañerismo</strong> y la <strong>participación activa</strong>.
            Los clubes estudiantiles son espacios donde puedes crecer, aprender nuevas habilidades y formar amistades duraderas.
          </p>
        </div>
      </div>

      {/* Carrusel responsive */}
      <div className="flex overflow-hidden">
        {visibleFotos.map((foto, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-1/4 rounded-xl shadow-lg p-1"
          >
            <img
              src={foto}
              alt={`Galería ${index + 1}`}
              className="w-full h-64 sm:h-48 md:h-56 lg:h-48 object-cover object-top rounded-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galeria;


