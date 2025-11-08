import { Users, Lightbulb, Calendar, Heart } from 'lucide-react';

function Clubes() {
  return (
    <section id="clubes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Users size={48} className="text-teal-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Clubes y Vida Estudiantil
          </h2>
          <p className="text-xl text-gray-600">
            Más que clases, una comunidad activa
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 sm:p-12 rounded-2xl shadow-lg mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="text-teal-600 mx-auto mb-4" size={40} />
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              En UVG Altiplano, fomentamos el <strong>compañerismo</strong> y la <strong>participación activa</strong>.
              Los clubes estudiantiles son espacios donde puedes crecer, aprender nuevas habilidades y formar amistades duraderas.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-teal-600">
            <div className="flex items-center mb-6">
              <Lightbulb className="text-teal-600 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Cómo Crear un Club</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-teal-100 text-teal-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Define el Objetivo</h4>
                  <p className="text-gray-600 text-sm">
                    Establece una visión clara y propósito para tu club
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-100 text-teal-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Reúne a tu Equipo</h4>
                  <p className="text-gray-600 text-sm">
                    Necesitas al menos 5 miembros fundadores comprometidos
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-100 text-teal-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Presenta tu Propuesta</h4>
                  <p className="text-gray-600 text-sm">
                    Incluye objetivos, cronograma de actividades y presupuesto estimado
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-100 text-teal-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Obtén Aprobación</h4>
                  <p className="text-gray-600 text-sm">
                    Coordinación Estudiantil revisará y aprobará tu propuesta
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
            <div className="flex items-center mb-6">
              <Calendar className="text-blue-600 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Organizar Actividades</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Planifica con Anticipación</h4>
                  <p className="text-gray-600 text-sm">
                    Solicita espacio y recursos al menos 2 semanas antes
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Promociona tu Evento</h4>
                  <p className="text-gray-600 text-sm">
                    Usa redes sociales, carteles y anuncios en campus
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ejecuta con Excelencia</h4>
                  <p className="text-gray-600 text-sm">
                    Asegura logística, puntualidad y experiencia de calidad
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Documenta y Evalúa</h4>
                  <p className="text-gray-600 text-sm">
                    Toma fotos, registra asistencia y recolecta feedback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚽</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Deportes</h4>
            <p className="text-gray-600 text-sm">Fútbol, basketball, atletismo y más</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎨</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Arte y Cultura</h4>
            <p className="text-gray-600 text-sm">Música, teatro, pintura, danza</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💻</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Tecnología</h4>
            <p className="text-gray-600 text-sm">Programación, robótica, gaming</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌱</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Medio Ambiente</h4>
            <p className="text-gray-600 text-sm">Sostenibilidad y ecología</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clubes;
