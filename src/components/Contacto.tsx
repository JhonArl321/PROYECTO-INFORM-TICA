import { Mail, MessageCircle, MapPin, Heart } from 'lucide-react';

function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Heart size={48} className="text-red-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Contacto y Agradecimiento
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
              Agradecemos profundamente a la{' '}
              <strong className="text-green-700">Universidad del Valle de Guatemala, Campus Altiplano</strong>,
              por abrir las puertas del conocimiento a cientos de jóvenes.
            </p>
            <p className="text-base sm:text-lg text-gray-600 italic">
              Su apoyo ha transformado vidas y ha hecho posible que muchos sueños académicos se conviertan en realidad.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-green-100">
            <div className="flex justify-center mb-4">
              <div className="bg-green-600 p-4 rounded-full">
                <Mail className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
              Correo Electrónico
            </h3>
            <p className="text-center text-gray-700 mb-2">Departamento de Becas:</p>
            <a
              href="mailto:becas@uvg.edu.gt"
              className="block text-center text-green-700 font-semibold hover:text-green-800 transition-colors"
            >
              becas@uvg.edu.gt
            </a>
            <p className="text-center text-gray-700 mt-4 mb-2">Registro Académico:</p>
            <a
              href="mailto:registro.altiplano@uvg.edu.gt"
              className="block text-center text-green-700 font-semibold hover:text-green-800 transition-colors"
            >
              registro.altiplano@uvg.edu.gt
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-blue-100">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600 p-4 rounded-full">
                <MessageCircle className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
              WhatsApp
            </h3>
            <p className="text-center text-gray-700 mb-4">
              Atención directa para resolver tus dudas
            </p>
            <a
              href="https://wa.me/50212345678"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              +502 1234 5678
            </a>
            <p className="text-center text-gray-600 text-sm mt-4">
              Lunes a Viernes: 8:00 AM - 5:00 PM
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-orange-100">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-600 p-4 rounded-full">
                <MapPin className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
              Ubicación
            </h3>
            <p className="text-center text-gray-700 mb-2">
              Campus Altiplano
            </p>
            <p className="text-center text-gray-600 text-sm leading-relaxed">
              Sololá, Guatemala
            </p>
            <a
              href="https://www.uvg.edu.gt/altiplano"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-orange-700 font-semibold hover:text-orange-800 transition-colors mt-4"
            >
              Visitar Sitio Web Oficial
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 sm:p-12 rounded-2xl shadow-2xl text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Educando para transformar vidas
          </h3>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed opacity-95">
            Este proyecto es una muestra de gratitud de estudiantes que han sido beneficiados
            por el apoyo académico y financiero de la UVG Altiplano. Juntos construimos un mejor futuro.
          </p>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">
            Encuéntranos en el mapa
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto border border-gray-200">
            <iframe
              title="Ubicación UVG Altiplano"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.786027127874!2d-91.1516!3d14.7666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85894ce37cda87a1%3A0xfd74b201234cd85f!2sUniversidad%20del%20Valle%20de%20Guatemala%20Campus%20Altiplano!5e0!3m2!1ses!2sgt!4v1705000000000!5m2!1ses!2sgt"
              width="100%"
              height="450"

              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
          <div className="text-center mt-4">
            <a
              href="https://maps.app.goo.gl/RqUoDvJAWh8uCRUi6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>






      </div>
    </section>
  );
}

export default Contacto;
