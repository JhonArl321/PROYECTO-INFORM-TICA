import { FileText, CheckCircle, AlertCircle, Download } from 'lucide-react';

function AyudasFinancieras() {
  return (
    <section id="ayudas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
         
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ayudas Financieras
          </h2>
          <p className="text-xl text-gray-600">
            Oportunidades que transforman vidas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 p-8 rounded-xl shadow-md border border-green-100">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-green-600 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Requisitos</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">•</span>
                <span>Promedio mínimo de <strong>75 puntos</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">•</span>
                <span>Completar <strong>10 horas de beca</strong> por ciclo académico</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">•</span>
                <span>Firma del <strong>contrato de beca</strong> al inicio del ciclo</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">•</span>
                <span>Presentar <strong>documentación completa</strong> y en tiempo</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">•</span>
                <span>Mantener <strong>conducta ejemplar</strong> dentro del campus</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl shadow-md border border-blue-100">
            <div className="flex items-center mb-4">
              <FileText className="text-blue-600 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Documentos Necesarios</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span>Fotocopia de DPI o cédula</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span>Constancia de ingresos familiares</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span>Carta de solicitud de beca</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span>Record de notas actualizado</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span>Formulario de inscripción completo</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 p-8 rounded-xl shadow-md border border-red-100 mb-8">
          <div className="flex items-center mb-4">
            <AlertCircle className="text-red-600 mr-3" size={28} />
            <h3 className="text-2xl font-bold text-gray-900">Errores Comunes a Evitar</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-start">
              <span className="text-red-600 mr-2 mt-1">✗</span>
              <span>No cumplir con las 10 horas de beca en el periodo establecido</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-2 mt-1">✗</span>
              <span>Entregar documentación incompleta o fuera de plazo</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-2 mt-1">✗</span>
              <span>No firmar el contrato de beca antes de iniciar el ciclo</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-2 mt-1">✗</span>
              <span>Dejar que el promedio baje de 75 puntos</span>
            </div>
          </div>
        </div>



        <div className="text-center">
  <a
    href="/guiaAyudaFinanciera.pdf"
    download="Guia_de_Ayuda_Financiera_UVG.pdf"
    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all hover:scale-105 mx-auto"
  >
    <Download className="mr-2" size={20} />
    Descargar Guía de Ayuda Financiera (PDF)
  </a>








<p className="mt-4 text-gray-600 flex items-center justify-center gap-2">
  Para más información, contáctanos por WhatsApp:&nbsp;
  <a
    href="https://wa.me/50253048803?text=Hola,%20quisiera%20más%20información%20sobre%20las%20ayudas%20financieras."
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-green-600 font-semibold hover:underline"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 16 16"
      className="mr-1"
    >
      <path d="M13.601 2.326A7.854 7.854 0 0 0 8.043 0C3.617 0 .006 3.612.006 8.04a7.95 7.95 0 0 0 1.12 4.077L0 16l4.04-1.105A7.946 7.946 0 0 0 8.04 16h.004a7.953 7.953 0 0 0 5.557-13.674zM8.044 14.5h-.003a6.471 6.471 0 0 1-3.291-.898l-.236-.14-2.396.655.64-2.336-.153-.24A6.476 6.476 0 0 1 1.538 8.04c0-3.587 2.918-6.506 6.505-6.506a6.43 6.43 0 0 1 4.596 1.908A6.446 6.446 0 0 1 14.55 8.04c0 3.588-2.919 6.507-6.506 6.507zm3.63-4.865c-.197-.099-1.165-.574-1.347-.64-.182-.067-.316-.099-.45.099-.133.198-.516.64-.632.773-.115.133-.233.15-.43.05-.198-.1-.836-.308-1.592-.984-.588-.523-.984-1.168-1.1-1.365-.115-.198-.012-.304.086-.403.089-.089.198-.232.297-.347.1-.115.132-.198.198-.33.066-.133.033-.248-.017-.347-.05-.1-.45-1.083-.616-1.482-.162-.388-.327-.336-.45-.341-.115-.006-.248-.006-.381-.006a.73.73 0 0 0-.53.248c-.182.198-.698.683-.698 1.665s.715 1.933.814 2.065c.1.133 1.407 2.148 3.412 3.008.478.206.85.33 1.14.423.479.152.915.13 1.26.08.385-.057 1.165-.475 1.33-.934.165-.458.165-.85.115-.934-.05-.083-.182-.133-.38-.232z" />
    </svg>
    +502&nbsp;5304-8803
  </a>
</p>







</div>





      </div>




    </section>
  );
}

export default AyudasFinancieras;
