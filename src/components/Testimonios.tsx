import { Star } from 'lucide-react';

interface Testimonio {
  id: number;
  nombre: string;
  carrera: string;
  foto: string;
  testimonio: string;
  calificacion: number;
}

function Testimonios() {
  const testimonios: Testimonio[] = [
    {
      id: 1,
      nombre: 'María García',
      carrera: 'Ingeniería en Sistemas',
      foto: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      testimonio: 'La beca de UVG Altiplano cambió mi vida completamente. Sin este apoyo, no hubiera podido continuar mis estudios. Hoy soy profesional gracias al sacrificio de la universidad.',
      calificacion: 5,
    },
    {
      id: 2,
      nombre: 'Carlos López',
      carrera: 'Administración de Empresas',
      foto: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      testimonio: 'Más allá de la beca, lo que valoró fue el ambiente de la comunidad. Los clubes me permitieron desarrollarme como persona y hacer amistades que perduran hasta hoy.',
      calificacion: 5,
    },
    {
      id: 3,
      nombre: 'Ana Rodríguez',
      carrera: 'Educación',
      foto: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      testimonio: 'El proceso de registro fue muy sencillo y el equipo siempre estuvo disponible para resolver mis dudas. La experiencia académica fue excepcional desde el primer día.',
      calificacion: 5,
    },
    {
      id: 4,
      nombre: 'Juan Morales',
      carrera: 'Contabilidad',
      foto: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      testimonio: 'Las 10 horas de beca no fueron una carga, sino una oportunidad para aprender y crecer. Contribuir al campus mientras estudiaba me hizo valorar aún más mi educación.',
      calificacion: 5,
    },
    {
      id: 5,
      nombre: 'Sofia Campos',
      carrera: 'Psicología',
      foto: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      testimonio: 'UVG Altiplano no solo me preparó académicamente, sino que me formó como persona. La comunidad estudiantil es lo más valioso de esta institución.',
      calificacion: 5,
    },
    {
      id: 6,
      nombre: 'Diego Sánchez',
      carrera: 'Ingeniería Civil',
      foto: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      testimonio: 'La beca me permitió enfocarse en mis estudios sin preocupaciones económicas. Hoy trabajo en proyectos de impacto social, gracias a los valores aprendidos aquí.',
      calificacion: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, i) => (
      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
    ));
  };

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Historias de Éxito
          </h2>
          <p className="text-xl text-gray-600">
            Testimonios de estudiantes que transformaron sus vidas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 transform"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={testimonio.foto}
                  alt={testimonio.nombre}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = `https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {testimonio.nombre}
                    </h3>
                    <p className="text-sm text-green-700 font-semibold">
                      {testimonio.carrera}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {renderStars(testimonio.calificacion)}
                </div>

                <p className="text-gray-700 leading-relaxed line-clamp-4">
                  "{testimonio.testimonio}"
                </p>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    Estudiante egresado
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonios;
