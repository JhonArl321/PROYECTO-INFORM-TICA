import { ClipboardList, Calendar, AlertTriangle, MessageCircle } from 'lucide-react';

function RegistroAcademico() {
  return (
    <section id="registro" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <ClipboardList size={48} className="text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Registro Académico
          </h2>
          <p className="text-xl text-gray-600">
            Tu proceso de inscripción paso a paso
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
            <div className="text-center mb-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Preparación</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Fotocopia de DPI vigente</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Título de nivel medio</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Correo electrónico personal</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Firma de compromiso académico</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-600">
            <div className="text-center mb-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Inscripción</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Completar formulario en línea</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Subir documentación requerida</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Verificar datos personales</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Confirmar envío del formulario</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-600">
            <div className="text-center mb-4">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Confirmación</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Revisar correo de confirmación</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Verificar estatus de inscripción</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Completar pago de matrícula</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Asistir a inducción inicial</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <div className="flex items-center mb-4">
            <Calendar className="text-orange-600 mr-3" size={28} />
            <h3 className="text-2xl font-bold text-gray-900">Fechas Importantes</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="font-bold text-lg text-orange-800 mb-2">Ciclo de Enero</h4>
              <p className="text-gray-700">
                Inscripciones: <strong>Primera semana de enero</strong>
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Inicio de clases: Segunda semana de enero
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
              <h4 className="font-bold text-lg text-teal-800 mb-2">Ciclo de Julio</h4>
              <p className="text-gray-700">
                Inscripciones: <strong>Primera semana de julio</strong>
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Inicio de clases: Segunda semana de julio
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-8 rounded-xl shadow-lg border border-yellow-200">
          <div className="flex items-center mb-4">
            <AlertTriangle className="text-yellow-600 mr-3" size={28} />
            <h3 className="text-2xl font-bold text-gray-900">Errores Comunes en el Formulario</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-gray-700 mb-6">
            <div className="flex items-start">
              <span className="text-yellow-600 mr-2 mt-1">⚠</span>
              <span>Usar correo institucional en lugar de personal</span>
            </div>
            <div className="flex items-start">
              <span className="text-yellow-600 mr-2 mt-1">⚠</span>
              <span>Subir documentos en formato incorrecto</span>
            </div>
            <div className="flex items-start">
              <span className="text-yellow-600 mr-2 mt-1">⚠</span>
              <span>No verificar datos antes de enviar</span>
            </div>
            <div className="flex items-start">
              <span className="text-yellow-600 mr-2 mt-1">⚠</span>
              <span>Omitir campos obligatorios</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <MessageCircle className="text-green-600 mr-3" size={24} />
              <span className="text-gray-700">¿Tienes dudas sobre tu inscripción?</span>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Contactar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistroAcademico;
