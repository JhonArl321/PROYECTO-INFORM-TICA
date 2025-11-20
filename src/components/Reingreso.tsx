import { ClipboardList, AlertTriangle, Download } from 'lucide-react';

function Reingreso() {
  return (
    <section id="registro" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITULO */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <ClipboardList size={48} className="text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Reingreso para el siguiente ciclo académico
          </h2>
          <p className="text-xl text-gray-600">
            4 pasos que debes realizar para registrar tu inscripción y asignación de cursos
          </p>
        </div>

        {/* GRID RESPONSIVE: 1 COL (MÓVIL) — 2 COLS (TABLET) — 3 COLS (DESKTOP) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

          {/* PASO 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
            <div className="text-center mb-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Actualización de datos</h3>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  Ingresa a{" "}
                  <a
                    href="https://portal.uvg.edu.gt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline hover:text-blue-900"
                  >
                    https://portal.uvg.edu.gt/
                  </a>
                </span>
              </li>

              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Portal de servicios electrónicos</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Ingresa tu usuario y contraseña</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Ingresa a Estudiantes</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Actualización de Datos</li>
            </ul>
          </div>

          {/* PASO 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600">
            <div className="text-center mb-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Inscripción</h3>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Ingresa la opción Inscripción y llena los campos requeridos.</span>
              </li>
            </ul>
          </div>

          {/* PASO 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-600">
            <div className="text-center mb-4">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Pago de matrícula</h3>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><span className="text-purple-600 mr-2">•</span>Paga en caja UVG Altiplano</li>
              <li className="flex items-start"><span className="text-purple-600 mr-2">•</span>O deposita en G&T Continental</li>
              <li className="flex items-start"><span className="text-purple-600 mr-2">•</span>Notifica al correo ca.caja@uvg.edu.gt</li>
            </ul>
          </div>

          {/* PASO 4 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-600">
            <div className="text-center mb-4">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Asignación de cursos</h3>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>
                  Ingresa a{" "}
                  <a
                    href="https://asignaciones.uvg.edu.gt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline hover:text-blue-900"
                  >
                    asignaciones.uvg.edu.gt
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* DESCARGAS — SE COLOCA COMO UNA TARJETA MÁS EN EL GRID */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600 flex flex-col justify-center items-center space-y-4">
            <a
              href="/instructivospdf/inscripcion.pdf"
              download="Instructivo_inscripcion_UVG.pdf"
              className="animate-wobble inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all"
            >
              <Download className="mr-2" size={20} />
              Instructivo de Inscripción
            </a>

            <a
              href="/instructivospdf/asignacionCursos.pdf"
              download="Instructivo_asignacion_UVG.pdf"
              className="animate-wobble inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all"
            >
              <Download className="mr-2" size={20} />
              Instructivo de Asignación
            </a>
          </div>

        </div>

        {/* ERRORES */}
        <div className="bg-yellow-50 p-8 rounded-xl shadow-lg border border-yellow-200">
          <div className="flex items-center mb-4">
            <AlertTriangle size={28} className="text-yellow-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Errores Comunes</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-start"><span className="text-yellow-600 mr-2 mt-1">⚠</span>Usar correo institucional</div>
            <div className="flex items-start"><span className="text-yellow-600 mr-2 mt-1">⚠</span>Subir documentos incorrectos</div>
            <div className="flex items-start"><span className="text-yellow-600 mr-2 mt-1">⚠</span>No verificar datos</div>
            <div className="flex items-start"><span className="text-yellow-600 mr-2 mt-1">⚠</span>Omitir campos obligatorios</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reingreso;
