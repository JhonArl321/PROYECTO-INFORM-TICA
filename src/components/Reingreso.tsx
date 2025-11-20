import { ClipboardList, AlertTriangle, Download } from 'lucide-react';

function Reingreso() {
  return (
    <section id="registro" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">



        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <ClipboardList size={48} className="text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Reingreso para el siguiente ciclo académico
          </h2>
          <p className="text-xl text-gray-600">
            4 pasos que debes realizar para registar tu inscripción y asignación de cursos
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-8 mb-12">

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
            <div className="text-center mb-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Actualización de datos </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  Ingresa a la página del portal{" "}
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

              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span> Luego clic en Portal de servicios electrónicos</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Ingresa tu usuario y contraseña</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span> Ingresa a la opción Estudiantes </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Ingresa la opción Actualización de Datos </span>
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
                <span>Ingresa la opción Inscripción, y llena todos los campos requeridos.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-600">
            <div className="text-center mb-4">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Pago de matrícula </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Puedes realizar el pago en efectivo por el concepto de matrícula y mensualidad en caja ubicada en las
                  instalaciones de la Universidad Oficina B1 frente a Hospital de Ojos </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>O a través de depósito a la cuenta monetaria G&T Continental </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Notificar el pago al correo electrónico ca.caja@uvg.edu.gt</span>
              </li>

            </ul>
          </div>



          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-600">
            <div className="text-center mb-4">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Asignación de cursos </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>
                  Ingresa a la plataforma{" "}
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



          {/* DESCARGA DE PDF */}
          <div className="text-center mt-12 space-y-4">
            <a
              href="/instructivospdf/inscripcion.pdf"
              download="Instructivo_inscripcion_UVG.pdf"
              className="animate-wobble inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all hover:scale-105 mx-auto"
            >
              <Download className="mr-2" size={20} />
              Descargar Instructivo de Inscripcion (PDF)
            </a>

            <a
              href="/instructivospdf/asignacionCursos.pdf"
              download="Calendario_Reingreso_UVG.pdf"
              className="animate-wobble inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all hover:scale-105 mx-auto block"
            >
              <Download className="mr-2" size={20} />
              Descargar Instructivo de asignaciones de cursos (PDF)
            </a>
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





        </div>





      </div>
    </section>
  );
}

export default Reingreso;
